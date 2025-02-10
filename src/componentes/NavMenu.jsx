


const NavMenu = ({items}) => {
  console.log(items)
  return (
    <ul>
      {
        items
          .map( ({txt, ruta}) => <MenuItem txt={txt} ruta={ruta} />)
      }
    </ul>
  )
}


const MenuItem = ({txt, ruta}) => {
  return (
    <li>
      <a href={ruta}>{txt}</a>
    </li>
  )
}



export default NavMenu
