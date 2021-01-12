import { auth, currentUser } from '@/plugins/api'
import router from '@/router'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  CaretDownOutlined
} from '@ant-design/icons-vue'
import { Button, Layout, Row, Col, Menu, Dropdown } from 'ant-design-vue'
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import styled from 'vue3-styled-components'
import AppMenu from './AppMenu'
import Avatar from './ui/Avatar'
import MenuItemButton from './ui/MenuItemButton'

export default defineComponent({
  setup(_, { slots }) {
    const collapsed = ref(false)
    const collapsedWidth = ref(80)

    const calculate = () => {
      collapsedWidth.value = window.innerWidth < 992 ? 0 : 80
      collapsed.value = window.innerWidth < 992
    }
    calculate()

    onMounted(() => {
      window.addEventListener('resize', calculate)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', calculate)
    })

    return () => (
      <MainLayout>
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
        <ContentLayout>
          <Header>
            <Row justify="space-between" gutter={24}>
              <Col>
                <Button
                  type="primary"
                  ghost
                  onClick={() => (collapsed.value = !collapsed.value)}
                >
                  {collapsed.value ? (
                    <MenuUnfoldOutlined />
                  ) : (
                    <MenuFoldOutlined />
                  )}
                </Button>
              </Col>

              {currentUser.value && (
                <Col>
                  <Avatar user={currentUser.value} size={36} />
                  <Dropdown
                    trigger={['click']}
                    overlayStyle={{ paddingTop: '10px' }}
                    placement="bottomRight"
                    v-slots={{
                      overlay: () => (
                        <Menu>
                          <MenuItemButton
                            onClick={() => auth.logout()}
                            icon={() => <LogoutOutlined />}
                          >
                            Выход
                          </MenuItemButton>
                        </Menu>
                      )
                    }}
                  >
                    <Button
                      type="link"
                      size="small"
                      shape="circle"
                      style="color: currentColor; margin-left: 12px;height: 36px;"
                    >
                      <CaretDownOutlined />
                    </Button>
                  </Dropdown>
                </Col>
              )}
            </Row>
          </Header>
          <Content>{slots.default && slots.default()}</Content>
        </ContentLayout>
      </MainLayout>
    )
  }
})

const MainLayout = styled(Layout)`
  overflow: hidden;
`

const ContentLayout = styled(Layout)`
  @media (max-width: 991px) {
    min-width: 100vw;
  }
`

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

  @media (max-width: 575px) {
    padding: 0 15px !important;
  }
`

const Content = styled(Layout.Content)`
  background-color: #fff;
  padding: 25px;
  @media (max-width: 575px) {
    padding: 15px;
  }
`
