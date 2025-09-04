import { proyectos } from "../../../dataProps/proyectos"
import { tecnologias } from "../../../dataProps/tecnologias"
import { sobreMi } from "../../../dataProps/sobreMi"
import { Perfil } from "./Perfil"
import GridProyectos from "../proyectos/GridProyectos"
import Habilidades from "./Habilidades"

const Main = () => {
  return (
    <main>
      <Perfil sobreMi={sobreMi} />
      <Habilidades tecnologias={tecnologias} />
      <GridProyectos proyectos={proyectos} />
    </main>
  )
}

export default Main
