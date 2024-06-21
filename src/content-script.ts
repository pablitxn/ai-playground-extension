import { getVariableFromLocalStorage } from "./utils/chrome"
import { ACTIONS, BACKEND_API_URL } from "./utils/constants"
import { waitForLastChangeInDom } from "./utils/dom"

// Global Variables
// let example = false

/**
 * Actions that are triggered to make
 * the content script do something with the DOM.
 */
chrome.runtime.onMessage.addListener(async (message) => {
  const action = message.action
  const opener = message.opener
  const messageHasUserInfo = message.section && message.html

  // if (action === ACTIONS.EXAMPLE) {
  //   const callback = async () => {
  //     const newMessage = {
  //       data: "stuff",
  //       tabId: +opener,
  //       html: document.getElementsByTagName("main")[0].innerHTML
  //     }
  //     const responseCallback = () => window.close()
  //     chrome.runtime.sendMessage(newMessage, responseCallback)
  //   }
  //   waitForLastChangeInDom(callback)
  // }
})

/**
 * Listener for page load
 * If the page is the callback page, close the tab
 */
window.onload = () => {
  // const isCallbackLoginPage = window.location.href.indexOf(`${BACKEND_API_URL}/auth/success`) > -1
  // if (isCallbackLoginPage) chrome.runtime.sendMessage({ closeTab: true })
}
