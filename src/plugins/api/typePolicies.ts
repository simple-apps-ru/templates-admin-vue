import { TypePolicies } from '@apollo/client/core'

const typePolicies: TypePolicies = {
  Subscription: {
    fields: {
      bases: {
        merge: (_, incoming) => ({
          ...incoming
        })
      }
    }
  }
}

export default typePolicies
