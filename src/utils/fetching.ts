import {  BACKEND_API_URL } from "./constants"
import { getIdTokenFromCookie } from "./chrome"

export const fetcher = async (...args: [input: RequestInfo, init?: RequestInit]) => {
  const tokenId = await getIdTokenFromCookie()
  const headers = {
    ...args[1]?.headers,
    Authorization: `Bearer ${tokenId}`
  }
  const init = {
    ...args[1],
    headers
  }
  const response = await fetch(`${BACKEND_API_URL}${args[0]}`, init)

  if (response.status === 201) return response

  return response.json()
}
