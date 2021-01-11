type OnUpdateAvailableMethod = () => Promise<boolean> | boolean

export default () => {
  let refreshing = false
  let updateMethod: OnUpdateAvailableMethod | null

  document.addEventListener(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    'swUpdated' as any,
    async (e: CustomEvent<ServiceWorkerRegistration>) => {
      if (updateMethod && (await updateMethod())) {
        e.detail.waiting?.postMessage({ type: 'SKIP_WAITING' })
      }
    },
    { once: true }
  )

  navigator.serviceWorker.addEventListener('controllerchange', async () => {
    // Prevent multiple refreshes
    if (refreshing) return
    refreshing = true

    window.location.reload()
  })

  const onUpdateAvailable = async (method: OnUpdateAvailableMethod) => {
    updateMethod = method
  }

  return {
    onUpdateAvailable
  }
}
