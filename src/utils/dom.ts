export const waitForLastChangeInDom = async (callback: any) => {
  let dateTime = new Date().getTime()

  const checkChanges = async () => {
    if (new Date().getTime() - dateTime > 500) {
      if (callback) {
        callback()
      }
    } else {
      setTimeout(() => checkChanges(), 200)
    }
  }

  const observer = new MutationObserver(() => {
    dateTime = new Date().getTime()
  })

  const config = { attributes: true, childList: true, subtree: true }
  observer.observe(document.body, config)

  checkChanges()
}

