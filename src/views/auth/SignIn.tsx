import { Button, Form, Input, Space } from 'ant-design-vue'
import { defineComponent, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import styled from 'vue3-styled-components'
import useAuthLogin from '@/hooks/authLogin'
import { loadUser } from '@/plugins/api'
import { FormRules } from '@/types'

export default defineComponent({
  name: 'AuthSignIn',
  setup() {
    const formData = reactive({
      email: '',
      password: '',
      loading: false
    })

    const rules: FormRules = {
      email: [
        {
          required: true,
          message: 'Введите email',
          type: 'email',
          trigger: 'blur'
        }
      ],
      password: [
        {
          min: 8,
          required: true,
          message: 'Пароль должен содержать минимум 8 символов',
          trigger: 'blur'
        }
      ]
    }

    const onSubmit = async (data: typeof formData) => {
      formData.loading = true
      try {
        await useAuthLogin(data.email, data.password)
        await loadUser()
      } finally {
        formData.loading = false
      }
    }

    return () => (
      <Form
        model={formData}
        onFinish={onSubmit}
        layout="vertical"
        rules={rules as any}
        class="form-default"
      >
        <h2>Вход</h2>
        <Form.Item label="Email" name="email">
          <Input
            placeholder="Введите email"
            v-model={[formData.email, 'value']}
            type="email"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="password"
          label={
            <PasswordLabel>
              <span>Пароль</span>
              <RouterLink to="/auth/password-recovery">
                Забыли пароль?
              </RouterLink>
            </PasswordLabel>
          }
        >
          <Input.Password
            placeholder="Введите пароль"
            size="large"
            v-model={[formData.password, 'value']}
          />
        </Form.Item>
        <Form.Item>
          <Space size={24}>
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              size="large"
              loading={formData.loading}
            >
              Вход
            </Button>
            <RouterLink to="/auth/register">Регистрация</RouterLink>
          </Space>
        </Form.Item>
      </Form>
    )
  }
})

const PasswordLabel = styled.div`
  position: relative;
  margin-top: -21px;
  padding-left: 10px;
  a {
    position: absolute;
    right: 0;
  }
`
