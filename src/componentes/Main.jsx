import { proyectos } from "./dataProps/proyectos"
import { Perfil } from "./Perfil"
import GridProyectos from "./GridProyectos"

const Main = () => {
  return (
    <main>
      <Perfil />
      <GridProyectos proyectos={proyectos} />
    </main>
  )
}

export default Main
