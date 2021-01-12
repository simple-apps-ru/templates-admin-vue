import router from '@/router'
import {
  AreaChartOutlined,
  SubnodeOutlined,
  TeamOutlined
} from '@ant-design/icons-vue'
import { Menu } from 'ant-design-vue'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const selectedKeys = computed(() => [router.currentRoute.value.meta.menu])

    return () => (
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys.value}
        onSelect={e => router.push(e.key)}
      >
        <Menu.Item key="/">
          <AreaChartOutlined />
          <span>Панель</span>
        </Menu.Item>
        <Menu.Item key="/users">
          <TeamOutlined />
          <span>Пользователи</span>
        </Menu.Item>

        <Menu.SubMenu
          v-slots={{
            title: () => (
              <>
                <SubnodeOutlined />
                <span>Подменю</span>
              </>
            )
          }}
        >
          <Menu.Item key="/link1"> Ссылка 1</Menu.Item>
          <Menu.Item key="/links/2">Ссылка 2</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    )
  }
})
