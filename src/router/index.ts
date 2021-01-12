import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { isAuthWithUser } from '../plugins/api'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: () =>
      import(/* webpackChunkName: "dashboard" */ '../views/Dashboard'),
    meta: {
      menu: '/'
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth'),
    children: [
      {
        path: '',
        name: 'AuthSignIn',
        component: () =>
          import(/* webpackChunkName: "auth" */ '../views/auth/SignIn')
      },
      {
        path: 'register',
        name: 'AuthRegister',
        component: () =>
          import(/* webpackChunkName: "auth" */ '../views/auth/Register')
      },
      {
        path: 'password-recovery',
        name: 'AuthPasswordRecovery',
        component: () =>
          import(
            /* webpackChunkName: "auth" */ '../views/auth/PasswordRecovery'
          )
      }
    ]
  },

  {
    path: '/users',
    name: 'Users',
    component: () =>
      import(/* webpackChunkName: "users" */ '../views/users/Index'),
    meta: {
      menu: '/users'
    }
  },

  {
    path: '/users/:id',
    name: 'UsersForm',
    component: () =>
      import(/* webpackChunkName: "users" */ '../views/users/Form'),
    meta: {
      menu: '/users'
    }
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () =>
      import(/* webpackChunkName: "not-found" */ '../views/NotFound')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

router.beforeEach((to, _, next) => {
  const isAuth = isAuthWithUser.value

  if (!to.path.startsWith('/auth') && !isAuth) {
    return next('/auth')
  }

  if (to.path.startsWith('/auth') && isAuth) {
    return next('/')
  }

  next()
})

export default router
