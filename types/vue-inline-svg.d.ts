declare module 'vue-inline-svg' {
  import { DefineComponent } from 'vue'
  const icon: DefineComponent<{
    src: string
    width: string | number
    height: string | number
  }>
  export default icon
}
