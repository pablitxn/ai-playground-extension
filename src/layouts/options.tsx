import {FC} from "react"
import {RouterProvider} from "react-router-dom"
import Fallback from "@/components/fallbacks/popup"
import router from "@/router/popup"
import StoreProvider from "@/state/StoreProvider"
import "@/tailwind.css"

const PopupLayout: FC = () => (
  <StoreProvider>
    <RouterProvider router={router} fallbackElement={<Fallback />} />
  </StoreProvider>
)

export default PopupLayout
