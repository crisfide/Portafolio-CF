import BtnThemeSwitch from "./BtnThemeSwitch"
import { itemsMenu } from "./dataProps/itemsMenu"
import NavMenu from "./NavMenu"

const Header = () => {
  return (
    <header>
      <nav>
        <NavMenu items={itemsMenu} />
      </nav>
      <BtnThemeSwitch />
    </header>
  )
}

export default Header
