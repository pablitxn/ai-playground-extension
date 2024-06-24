import {FC} from "react"
import {RouterProvider} from "react-router-dom"
import Fallback from "@/components/fallbacks/popup"
import Settings from "@/pages/popup/settings"
import router from "@/router/popup"
import StoreProvider from "@/state/StoreProvider"
import "@/tailwind.css"

const PopupLayout: FC = () => (
  <StoreProvider>
    <Settings />
  </StoreProvider>
)

export default PopupLayout
