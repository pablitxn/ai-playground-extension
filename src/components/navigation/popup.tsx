import {FC} from "react"
import {Outlet, Link} from "react-router-dom"

const NavigationPopup: FC = () => {
  const some = "value"
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/translate">Translate</Link>
          </li>
          <li>
            <Link to="/settings">Settings {some}</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}

export default NavigationPopup
