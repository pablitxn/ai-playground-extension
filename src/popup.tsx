import React, { FC, ReactNode } from "react"
import { createRoot } from "react-dom/client"
import Popup from "./layouts/popup"
import StoreProvider from "./state/StoreProvider"
import "./assets/tailwind.css"

const Providers: FC<{ children: ReactNode }> = ({ children }) => (
  <StoreProvider>{children}</StoreProvider>
)

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
