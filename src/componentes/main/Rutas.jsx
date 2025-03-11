import { Route, Routes } from "react-router-dom"
import { Main } from ".."
import Contacto from "./contacto/Contacto"
import { proyectos } from "../../dataProps/proyectos"
import ListaProyectos from "./proyectos/ListaProyectos"
import Proyecto from "./proyectos/Proyecto"
import ScrollToTop from "./ScrollToTop"


const Rutas = () => {
  return (<>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/proyectos" element={<ListaProyectos proyectos={proyectos} />} />
      <Route path="/proyectos/:nombre" element={<Proyecto />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  </>
  )
}

export default Rutas
