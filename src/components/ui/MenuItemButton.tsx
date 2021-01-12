import { Menu } from 'ant-design-vue'
import { Component, defineComponent, PropType } from 'vue'
import styled from 'vue3-styled-components'

export default defineComponent({
  props: {
    onClick: Function as PropType<(e: MouseEvent) => void>,
    icon: Function as PropType<() => Component | HTMLElement>
  },
  setup: (props, { slots }) => () => (
    <MenuItem>
      {props.icon && <MenuItemIcon>{props.icon()}</MenuItemIcon>}
      <MenuItemContent>{slots.default && slots.default()}</MenuItemContent>
    </MenuItem>
  )
})

const MenuItemIcon = styled.span`
  width: 28px;
  display: flex;
`

const MenuItemContent = styled.span`
  flex: 1;
`

const MenuItem = styled(Menu.Item)`
  display: flex;
  align-items: center;
`
