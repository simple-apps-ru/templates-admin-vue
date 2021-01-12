import Container from '@/components/ui/Container'
import router from '@/router'
import { Button, Result } from 'ant-design-vue'
import { defineComponent } from 'vue'
import styled from 'vue3-styled-components'

export default defineComponent({
  name: 'NotFound',
  setup() {
    return () => (
      <NotFoundContainer>
        <Result status="404" title="404" subTitle="Страница не найдена">
          <Button
            type="primary"
            shape="round"
            size="large"
            onClick={() => router.push('/')}
          >
            На главную
          </Button>
        </Result>
      </NotFoundContainer>
    )
  }
})

const NotFoundContainer = styled(Container)`
  padding: 80px 0 !important;
  text-align: center;
  .ant-result-content {
  }
`
