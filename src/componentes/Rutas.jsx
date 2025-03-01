import { Route, Routes } from "react-router-dom"
import { Main } from "."
import Contacto from "./Contacto"
import { proyectos } from "./dataProps/proyectos"
import ListaProyectos from "./ListaProyectos"
import Proyecto from "./Proyecto"


const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/proyectos" element={<ListaProyectos proyectos={proyectos} />} />
      <Route path="/proyectos/:nombre" element={<Proyecto />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  )
}

export default Rutas
