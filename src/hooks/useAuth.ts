import { useState, useEffect } from "react"
import { getIdTokenFromCookie } from "../utils/chrome"
// import { getAuth } from "../services/auth"

export const useAuth = () => {
  const [idToken, setIdToken] = useState("")

  useEffect(() => {
    ;(async () => {
      try {
        const _idToken = await getIdTokenFromCookie()
        setIdToken(_idToken)
      } catch (error) {
        console.error(error)
        setIdToken(null)
      }
    })()
  }, [])

  return { isLogged: !!idToken, getAuth: "getAuth" }
}
