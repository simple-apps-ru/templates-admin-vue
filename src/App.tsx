import { ConfigProvider, Spin } from 'ant-design-vue'
import ruRU from 'ant-design-vue/es/locale/ru_RU'
import { defineComponent, ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import styled, { ThemeProvider } from 'vue3-styled-components'
import AppLayout from './components/AppLayout'
import useServiceWork from './hooks/serviceWorker'
import { auth, isAuthWithUser, subscribeToCurrentUser } from './plugins/api'
import router from './router'

export default defineComponent({
  name: 'App',
  setup() {
    subscribeToCurrentUser()

    const { onUpdateAvailable } = useServiceWork()
    onUpdateAvailable(() => true)

    const withLayout = ref(isAuthWithUser.value)
    watch(isAuthWithUser, async value => {
      await router.push(value ? '/' : '/auth')
      withLayout.value = isAuthWithUser.value
    })

    return () => (
      <ConfigProvider locale={ruRU}>
        <ThemeProvider theme={{}}>
          {withLayout.value ? (
            <AppLayout>
              <RouterView />
            </AppLayout>
          ) : auth.isAuth.value ? (
            <LoadingWrapper>
              <Spin size="large" />
            </LoadingWrapper>
          ) : (
            <RouterView />
          )}
        </ThemeProvider>
      </ConfigProvider>
    )
  }
})

const LoadingWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
