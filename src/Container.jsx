import {Header, Main, Footer} from "./componentes"
import { DarkContext } from "./componentes/DarkContext"
import {useDarkMode} from "./hooks/useDarkMode"



const Container = () => {
  const { darkMode, cambiarTema } = useDarkMode()
  return (
    <>    
      <DarkContext.Provider value={{ darkMode, cambiarTema }}>
        <Header/>
        <Main/>
        <Footer/>
      </DarkContext.Provider>
    </>
  )
}

export default Container