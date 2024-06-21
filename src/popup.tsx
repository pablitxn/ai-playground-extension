import React from "react"
import { createRoot } from "react-dom/client"
import Popup from "./layouts/popup"

function init() {
  const appContainer = document.createElement("div")
  document.body.appendChild(appContainer)

  const root = createRoot(appContainer)
  root.render(<Popup />)
}

init()
