import {
  ChatBubbleLeftRightIcon,
  LanguageIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/solid"
import {FC} from "react"
import {Outlet, Link} from "react-router-dom"

const NavigationPopup: FC = () => {
  const some = "value"
  return (
    <div>
      <nav className="bg-primary-dark py-2">
        <ul className="relative mr-2 flex h-8 w-full flex-row items-center justify-end gap-4 p-4">
          <li>
            <Link to="/popup.html/translate">
              <div>
                <LanguageIcon
                  width={20}
                  height={20}
                  color="white"
                  aria-label="Translate"
                  title="Translate"
                />
              </div>
            </Link>
          </li>
          <li className="absolute left-4">
            <Link to="/popup.html/settings">
              <div>
                <Cog6ToothIcon
                  width={20}
                  height={20}
                  color="white"
                  aria-label="Settings"
                  title="Settings"
                />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/popup.html/chat">
              <div>
                <ChatBubbleLeftRightIcon
                  width={20}
                  height={20}
                  color="white"
                  aria-label="Chat"
                  title="Chat"
                />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}

export default NavigationPopup
