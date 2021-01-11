import { useCurrentUserSubscription } from '@/sdk/hooks'
import { GetCurrentUserDocument } from '@/sdk/operations'
import {
  CurrentUserFragment,
  GetCurrentUserQuery,
  GetCurrentUserQueryVariables
} from '@/sdk/types'
import { defaultError } from '@/types'
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  split
} from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { ErrorHandler, ErrorLink } from '@apollo/client/link/error'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { message } from 'ant-design-vue'
import axios from 'axios'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { computed, ref, watch } from 'vue'
import Auth from './auth'
import Storage from './storage'
import typePolicies from './typePolicies'

export type ApiConfig = {
  apiBaseUrl: string
  graphqlEndpoint: string
  graphqlWsEndpoint: string
  useCookie: boolean
  graphqlErrorHandler: ErrorHandler
}

const config: ApiConfig = {
  apiBaseUrl: process.env.VUE_APP_BASE_URL || '',
  graphqlEndpoint: process.env.VUE_APP_GRAPHQL_ENDPOINT || '',
  graphqlWsEndpoint: process.env.VUE_APP_GRAPHQL_SOCKET_ENDPOINT || '',
  useCookie: process.env.NODE_ENV === 'production',
  graphqlErrorHandler: error => {
    console.error(error)
    message.error(
      error?.graphQLErrors?.[0].message ||
        error?.networkError?.message ||
        defaultError,
      7
    )
  }
}

const http = axios.create({
  baseURL: config.apiBaseUrl
})

export const auth = new Auth(http, config.useCookie)

const makeHeaders = () => {
  const headers: Record<string, string> = {}
  if (auth.isAuth.value) headers.authorization = `Bearer ${auth.token.value}`
  return headers
}

http.interceptors.request.use(config => {
  config.headers = { ...config.headers, ...makeHeaders() }
  return config
})

export const storage = new Storage(http)

// apollo
const subscriptionClient = new SubscriptionClient(config.graphqlWsEndpoint, {
  reconnect: true,
  lazy: false,
  connectionParams: () => ({
    headers: makeHeaders()
  })
})

const sendHeadersToSocket = () => {
  const { client } = subscriptionClient
  if (client instanceof WebSocket) {
    const send = () =>
      client.send(
        JSON.stringify({
          type: 'connection_init',
          payload: { headers: makeHeaders() }
        })
      )

    if (client.readyState === WebSocket.OPEN) {
      send()
    } else {
      client.onopen = send
    }
  }
}

const wsLink = new WebSocketLink(subscriptionClient)

const customFetch = async (uri: string, options: RequestInit | undefined) => {
  const response = await fetch(uri, options)
  return response
}

const httpLink = createHttpLink({
  uri: config.graphqlEndpoint,
  fetch: customFetch
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    ...makeHeaders()
  }
}))

const errorLink = new ErrorLink(config.graphqlErrorHandler)

const link = ApolloLink.from([errorLink, authLink, splitLink])
export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache({ typePolicies }),
  connectToDevTools: process.env.NODE_ENV !== 'production',
  defaultOptions: {
    watchQuery: { fetchPolicy: 'cache-and-network' },
    mutate: { errorPolicy: 'all' }
  }
})

// end apollo

watch(auth.token, () => {
  sendHeadersToSocket()
})

export const currentUser = ref<CurrentUserFragment | null>(null)
export const isAuthWithUser = computed(() => currentUser.value !== null)

watch(auth.isAuth, value => {
  if (!value) currentUser.value = null
})

export const loadUser = async () => {
  try {
    if (auth.userId) {
      const { data } = await apolloClient.query<
        GetCurrentUserQuery,
        GetCurrentUserQueryVariables
      >({
        query: GetCurrentUserDocument,
        variables: { userId: auth.userId }
      })
      if (data.user) currentUser.value = data.user
    }
  } catch (err) {
    config.graphqlErrorHandler(err)
  }
}

export const subscribeToCurrentUser = () => {
  const options = computed(() => ({
    enabled: auth.isAuth.value
  }))

  const variables = computed(() => ({
    userId: auth.userId || ''
  }))

  const { onResult } = useCurrentUserSubscription(variables, options)
  onResult(result => {
    if (result.data?.user) currentUser.value = result.data.user
    else if (result.data) currentUser.value = null
  })
}

export default { auth, storage }
