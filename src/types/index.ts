import { ValidationRule } from 'ant-design-vue/lib/form/Form'

export type FormRules<T = { [key: string]: any }> = {
  [K in keyof Partial<T>]: ValidationRule | ValidationRule[]
}

export const defaultError = 'Что-то пошло не так, попробуйте позже'
