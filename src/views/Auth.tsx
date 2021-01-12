import { Card, Col, Row } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import styled from 'vue3-styled-components'
import Container from '../components/ui/Container'

export default defineComponent({
  name: 'Auth',
  setup() {
    return () => (
      <Wrapper>
        <Card>
          <Row>
            <Left span={24} md={8}>
              <Logo>LOGO</Logo>
            </Left>
            <Right span={24} md={16}>
              <RouterView />
            </Right>
          </Row>
        </Card>
      </Wrapper>
    )
  }
})

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 98vh;
  max-width: 100%;
  > .ant-card {
    min-height: 389px;
    width: 500px;
    max-width: 100%;
    > .ant-card-body {
      padding: 0;
    }
  }
`

const Left = styled(Col)`
  padding: 36px;
`

const Right = styled(Col)`
  padding: 36px;
`
const Logo = styled.div`
  width: 380px;
  font-size: 36px;
  font-weight: 700;
  color: rgba(23, 28, 40, 0.75);
`
