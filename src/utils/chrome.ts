import {  BACKEND_API_URL } from "./constants"

export const getIdTokenFromCookie = (): Promise<string | null> => {
  return new Promise((resolve) => {
    chrome.cookies.get({ url: `${BACKEND_API_URL}`, name: "oauth_session" }, (cookie) => {
      const hasCookie = cookie && cookie.value
      if (hasCookie) {
        const id_token = cookie.value
        resolve(id_token)
      } else {
        resolve(null)
      }
    })
  })
}

export const getVariableFromLocalStorage = (
  variable: string
): Promise<string | number | boolean | null> => {
  return new Promise((resolve) => {
    chrome.storage.sync.get([variable], (result) => {
      resolve(result[variable])
    })
  })
}


export const reloadCurrentTab = () =>
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.reload(tabs[0].id)
  })

export const getCurrentTab = (): Promise<any> => {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      resolve(tabs[0])
    })
  })
}

export const setVariableToLocalStorage = async (
  variable: string,
  value: string | number | boolean
) => {
  await chrome.storage.sync.set({ [variable]: value })
}

