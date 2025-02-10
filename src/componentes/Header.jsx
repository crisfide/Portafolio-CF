import BtnThemeSwitch from "./BtnThemeSwitch"
import NavMenu from "./NavMenu"

const itemsMenu = [
  {
    txt: "Home",
    ruta: "/"
  },
  {
    txt: "Proyectos",
    ruta: "proyectos"
  },
  {
    txt: "Contacto",
    ruta: "contacto"
  },
]

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
