import {createRoot} from "react-dom/client"
import PopupLayout from "@/layouts/popup"

function init() {
  const appContainer = document.createElement("div")
  document.body.appendChild(appContainer)

  const root = createRoot(appContainer)

  root.render(<PopupLayout />)
}

init()

