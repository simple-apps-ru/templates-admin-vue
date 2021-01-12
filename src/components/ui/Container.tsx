import { Card } from 'ant-design-vue'
import styled from 'vue3-styled-components'

export default styled.div`
  width: 1300px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  @media (min-width: 576px) {
    padding: 0 24px;
  }
  @media (min-width: 992px) {
    padding: 0 36px;
  }
`

export const Content = styled(Card)`
  border: none !important;
  @media (min-width: 992px) {
    padding: 16px !important;
  }
  @media (min-width: 1200px) {
    padding: 36px !important;
  }
`
