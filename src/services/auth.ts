import { BACKEND_API_URL } from "../utils/constants"

export const getAuth = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }

  const res = await fetch(`${BACKEND_API_URL}/auth/google`, requestOptions)
  const response = await res.json()
  const authURL = response.url

  chrome.tabs.create({ url: authURL })
}
