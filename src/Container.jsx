import { HashRouter } from "react-router-dom"
import {Header, Main, Footer} from "./componentes"
import { DarkContext } from "./componentes/DarkContext"
import {useDarkMode} from "./hooks/useDarkMode"
import Rutas from "./componentes/Rutas"



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