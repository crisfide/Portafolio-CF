import { useBurgerMenu } from "../hooks/useBurgerMenu"


const NavMenu = ({items}) => {
  const {toggleMenu} = useBurgerMenu()

  return (
    <ul>
      <li className="celular" onClick={toggleMenu}>
        <a href="#">
          <i className="fa-solid fa-bars" id="burgerIcon"></i>
        </a>
      </li>
      {
        items.map( ({txt, ruta}) => (
          <MenuItem txt={txt} ruta={ruta} key={ruta} />)
        )
      }
    </ul>
  )
}


const MenuItem = ({txt, ruta}) => {
  return (
    <li className="pc">
      <a href={ruta}>{txt}</a>
    </li>
  )
}



export default NavMenu
