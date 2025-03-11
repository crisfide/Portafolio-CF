import { itemsMenu } from "../../dataProps/itemsMenu"
import BtnThemeSwitch from "./BtnThemeSwitch"
import NavMenu from "./NavMenu"

const Header = () => {
  return (
    <header>
      <nav>
        <NavMenu items={itemsMenu} />
        <BtnThemeSwitch />
      </nav>
    </header>
  )
}

export default Header
