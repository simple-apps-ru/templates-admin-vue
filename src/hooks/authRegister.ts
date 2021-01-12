import api from '../plugins/api'
import { defaultError } from '../types'
import { message } from 'ant-design-vue'
import { AxiosError } from 'axios'

export default async (
  email: string,
  password: string,
  onSuccess?: () => Promise<void>
) => {
  try {
    await api.auth.register(email, password)
    if (onSuccess) await onSuccess()
  } catch (e) {
    if ('isAxiosError' in e) {
      const error = e as AxiosError
      const errorMessage = error.response?.data.message

      switch (errorMessage) {
        case 'Account already exists.':
          message.error('Пользователь с таким email уже зарегистрирован')
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
