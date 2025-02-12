import dark from "../svg/dark.svg"
import light from "../svg/light.svg"
import { useContext } from "react"
import { DarkContext } from "./DarkContext"


const BtnThemeSwitch = () => {
  //const { darkMode, cambiarTema } = useDarkMode()
  const { darkMode, cambiarTema } = useContext(DarkContext)

  return (
      <button onClick={cambiarTema}>
        <img src={darkMode ? light : dark} alt="Tema" 
          title={`Cambiar a modo ${darkMode?"claro":"oscuro"}`} />

      </button>
  )
}

export default BtnThemeSwitch
