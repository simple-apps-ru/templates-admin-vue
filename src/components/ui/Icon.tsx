import { Icons } from '@/types/icons'
import { defineComponent, PropType } from 'vue'
import * as vueInlineSvg from 'vue-inline-svg'
import styled from 'vue3-styled-components'

export default defineComponent({
  name: 'Icon',
  props: {
    width: [String, Number],
    height: [String, Number],
    name: { type: String as PropType<Icons>, required: true }
  },
  setup: props => () => (
    <StyledIcon
      src={require(`@/assets/icons/${props.name}.svg`)}
      width={props.width}
      height={props.height || props.width}
      class={`ui-icon ui-icon--${props.name}`}
    />
  )
})

const StyledIcon = styled(vueInlineSvg.default)`
  path,
  line,
  rect {
    fill: currentColor;
    stroke: currentColor;
  }
`
