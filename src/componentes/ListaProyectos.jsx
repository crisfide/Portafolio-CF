import GridProyectos from "./GridProyectos"

const ListaProyectos = ({proyectos}) => {
  return (
    <main>

      {/* toDo:  se debe hacer un listado horizontal con tarjetas */}
      <GridProyectos proyectos={proyectos} />
    </main>
  )
}

export default ListaProyectos
