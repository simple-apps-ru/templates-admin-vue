import { storage } from '@/plugins/api'
import { Avatar } from 'ant-design-vue'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Avatar',
  props: {
    user: {
      type: Object as PropType<{
        display_name?: string | null
        avatar_url?: string | null
      }>,
      required: true
    },
    size: { type: Number, default: 40 }
  },
  setup(props) {
    return () =>
      props.user.avatar_url ? (
        <Avatar
          size={props.size}
          src={storage.getUrl(props.user.avatar_url as string)}
        />
      ) : (
        <Avatar
          size={props.size}
          style={{
            color: '#1683dc',
            backgroundColor: '#e9e9e9'
          }}
        >
          {(props.user.display_name
            ? props.user.display_name.slice(0, 1)
            : '-'
          ).toUpperCase()}
        </Avatar>
      )
  }
})
