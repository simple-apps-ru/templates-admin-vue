import { ConfigProvider } from 'ant-design-vue'
import ruRU from 'ant-design-vue/es/locale/ru_RU'
import { computed, defineComponent, ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import { ThemeProvider } from 'vue3-styled-components'
import { auth, isAuthWithUser, subscribeToCurrentUser } from './plugins/api'
import router from './router'
import useServiceWork from './hooks/serviceWorker'

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
        <ThemeProvider theme={{}}>APP</ThemeProvider>
      </ConfigProvider>
    )
  }
})
