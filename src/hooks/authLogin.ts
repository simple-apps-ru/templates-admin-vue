import api from '../plugins/api'
import { defaultError } from '../types'
import { message } from 'ant-design-vue'
import { AxiosError } from 'axios'

export default async (email: string, password: string) => {
  try {
    await api.auth.login(email, password)
  } catch (e) {
    if ('isAxiosError' in e) {
      const error = e as AxiosError
      const errorMessage = error.response?.data.message

      switch (errorMessage) {
        case 'Account does not exist.':
        case 'Password does not match.':
          message.error('Неверный логин или пароль')
          break

        default:
          message.error(defaultError)
          break
      }
    } else {
      message.error(defaultError)
    }
  }
}
