import React from "react"
import { createRoot } from "react-dom/client"
import Popup from "./layouts/popup"
import StoreProvider from "./state/StoreProvider"
import "./assets/tailwind.css"

function Providers({ children }) {
  return <StoreProvider>{children}</StoreProvider>
}

function init() {
  const appContainer = document.createElement("div")
  document.body.appendChild(appContainer)

  const root = createRoot(appContainer)

  root.render(
    <Providers>
      <Popup />
    </Providers>
  )
}

init()
