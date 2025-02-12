import { proyectos } from "./dataProps/proyectos"
import { sobreMi } from "./dataProps/sobreMi"
import { Perfil } from "./Perfil"
import GridProyectos from "./GridProyectos"

const Main = () => {
  return (
    <main>
      <Perfil sobreMi={sobreMi} />
      <GridProyectos proyectos={proyectos} />
    </main>
  )
}

export default Main
