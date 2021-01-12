import { Button, Form, Input, Space } from 'ant-design-vue'
import { defineComponent, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import useAuthLogin from '@/hooks/authLogin'
import useAuthRegister from '@/hooks/authRegister'
import { loadUser } from '@/plugins/api'
import { FormRules } from '@/types'

export default defineComponent({
  name: 'AuthRegister',
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
        await useAuthRegister(data.email, data.password, async () => {
          await useAuthLogin(data.email, data.password)
          await loadUser()
        })
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
        <h2>Регистрация</h2>
        <Form.Item label="Email" name="email">
          <Input
            placeholder="Введите email"
            size="large"
            v-model={[formData.email, 'value']}
            type="email"
          />
        </Form.Item>
        <Form.Item name="password" label="Пароль">
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
              loading={formData.loading}
              size="large"
            >
              Регистрация
            </Button>
            <RouterLink to="/auth">Вход</RouterLink>
          </Space>
        </Form.Item>
      </Form>
    )
  }
})
