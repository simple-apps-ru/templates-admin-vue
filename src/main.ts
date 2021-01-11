import { DefaultApolloClient } from '@vue/apollo-composable'
import { createApp } from 'vue'
import App from './App'
import { apolloClient, auth, loadUser } from './plugins/api'
import './registerServiceWorker'
import router from './router'

import './assets/styles/ant.less'
import './assets/styles/app.scss'

auth.refreshToken().finally(() => {
  loadUser().finally(() => {
    createApp(App)
      .use(router)
      .provide(DefaultApolloClient, apolloClient)
      .mount('#app')
  })
})
