import {createBrowserRouter} from "react-router-dom"
import NavigationPopup from "@/components/navigation/popup"
import Chat from "@/pages/popup/chat"
import Home from "@/pages/popup/home"
import ModelsDetails from "@/pages/popup/models-details"
import Settings from "@/pages/popup/settings"
import Translate from "@/pages/popup/translate"

const popupRouter = createBrowserRouter([
  {
    path: "/popup.html",
    Component: NavigationPopup,
    children: [
      {
        index: true,
        Component: Settings
      },
      {
        path: "translate",
        // action: translateAction,
        // loader: translateLoader,
        Component: Translate
        // ErrorBoundary: TranslateBoundary,
      },
      {
        path: "settings",
        // action: translateAction,
        // loader: translateLoader,
        Component: Settings,
        // ErrorBoundary: TranslateBoundary,
        children: [
          {
            path: "model-detail/:modelId",
            // loader: todoLoader,
            Component: ModelsDetails
          }
        ]
      },
      {
        path: "chat",
        // action: translateAction,
        // loader: translateLoader,
        Component: Chat
        // ErrorBoundary: TranslateBoundary,
      }
    ]
  }
])

export default popupRouter
