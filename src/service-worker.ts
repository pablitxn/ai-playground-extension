import { ACTIONS, FAVICON_COLORS } from "./utils/constants"
import { getIdTokenFromCookie, getVariableFromLocalStorage } from "./utils/chrome"

// Variables to keep track of the opened tabs
const openedTabs = []


chrome.runtime.onMessage.addListener(async (message, sender) => {
  // const idToken = await getIdTokenFromCookie()
  // if (message.action === ACTIONS.EXAMPLE) {
  //   // const idToken = await getIdTokenFromCookie()
  // }
})

/**
 * Listener for tab updates.
 * When the page is loaded, check if it is a profile page.
 * If it is, check if the profile is already in the database.
 * If it is not, open the education and skills pages in the background.
 *
 * @param tabId
 * @param changeInfo
 * @param tab
 */
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  // const changeInfoComplete = changeInfo.status === "complete"
  // chrome.tabs.sendMessage(tabId, { tabId, changeInfo, tab })

  // if (message.action === ACTIONS.EXAMPLE) {
  //   // const idToken = await getIdTokenFromCookie()
  // }
})
