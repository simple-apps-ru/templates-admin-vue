import { auth } from '@/plugins/api'
import router from '@/router'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined
} from '@ant-design/icons-vue'
import { Button, Layout, Row, Col } from 'ant-design-vue'
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import styled from 'vue3-styled-components'
import AppMenu from './AppMenu'

export default defineComponent({
  setup(_, { slots }) {
    const collapsed = ref(false)
    const collapsedWidth = ref(80)

    const calculate = () => {
      collapsedWidth.value = window.innerWidth < 1024 ? 0 : 80
      collapsed.value = window.innerWidth < 1024
    }
    calculate()

    onMounted(() => {
      window.addEventListener('resize', calculate)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', calculate)
    })

    return () => (
      <Layout>
        <Sidebar
          collapsed={collapsed.value}
          collapsible
          trigger={null}
          collapsedWidth={collapsedWidth.value}
          width={240}
        >
          <LogoContainer>
            <Logo to="/">{collapsed.value ? 'C' : 'Company'}</Logo>
          </LogoContainer>
          <AppMenu />
        </Sidebar>
        <Layout>
          <Header>
            <Row justify="space-between" gutter={24}>
              <Col>
                <Button
                  type="link"
                  onClick={() => (collapsed.value = !collapsed.value)}
                >
                  {collapsed.value ? (
                    <MenuUnfoldOutlined />
                  ) : (
                    <MenuFoldOutlined />
                  )}
                </Button>
              </Col>

              <Col>
                <Button onClick={() => auth.logout()}>
                  <LogoutOutlined />
                </Button>
              </Col>
            </Row>
          </Header>
          <Content>{slots.default && slots.default()}</Content>
        </Layout>
      </Layout>
    )
  }
})

const LogoContainer = styled.div`
  padding: 25px 15px;
  text-align: center;
`

const Logo = styled(RouterLink)`
  font-size: 26px;
  color: #fff;
`

const Sidebar = styled(Layout.Sider)`
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden auto;
  position: sticky !important;
`

const Header = styled(Layout.Header)`
  background-color: #fafafa !important;
  padding: 0 25px !important;
`

const Content = styled(Layout.Content)`
  background-color: #fff;
  padding: 25px;
`
