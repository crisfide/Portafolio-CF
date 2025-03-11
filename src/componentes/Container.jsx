import { HashRouter } from "react-router-dom"
import {Header, Footer} from "."
import { DarkContext } from "../context/DarkContext"
import {useDarkMode} from "../hooks/useDarkMode"
import Rutas from "./main/Rutas"



const Container = () => {
  const { darkMode, cambiarTema } = useDarkMode()

  return (
    <>    
      <DarkContext.Provider value={{ darkMode, cambiarTema }}>
        <HashRouter>
          <Header/>

          <Rutas />
        </HashRouter>
        <Footer/>
      </DarkContext.Provider>
    </>
  )
}

export default Container