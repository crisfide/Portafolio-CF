import { itemsMenu } from "../../dataProps/itemsMenu"
import BtnLinkedin from "./BtnLinkedin"
import BtnThemeSwitch from "./BtnThemeSwitch"
import NavMenu from "./NavMenu"
import './header.css'

const Header = () => {
  
  return (
    <header>
      <nav>
        <NavMenu items={itemsMenu} />
        
        {/* <BtnLinkedin /> */}
        <BtnThemeSwitch />
      </nav>
    </header>
  )
}

export default Header
