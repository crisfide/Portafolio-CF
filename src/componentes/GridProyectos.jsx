
const GridProyectos = ({proyectos}) => {
  return (
    <section className="carrusel" id="proyectos">
      {
        proyectos.map( proyecto => (
          <ProyectoItem {...proyecto} key={proyecto.nombre} />)
        )
      }
    </section>
  )
}

const ProyectoItem = ({nombre, resumen, tecnologias, linkWeb, linkGithub, imagen}) => {
  const imagen2 = "assets/fotoPerfil.jpg" //prueba
  const estiloFondo = {
        backgroundImage: `url(${imagen2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
    };

  return (
    <div className="proyecto" style={estiloFondo}>
        <h3>{nombre}</h3>
        <p><small>{resumen}</small></p>

        <a href="#" className="btn">+ detalles</a>

        <ul>
            {
                tecnologias.map( tec => (
                <li key={tec}>
                    <a href="#" className="tec" title={tec}>
                        <i className={tec+"-link"}>A</i>
                    </a>
                </li>)
                )
            }            
        </ul>

        <ul>
            <li>
                <a href={linkGithub} target="_blank">
                    <i className="github-link">A</i>
                </a>
            </li>
            {
                (linkWeb) ?
                    <li>
                        <a href={linkWeb} target="_blank">
                            <i className="web-link">A</i>
                        </a>
                    </li>
                :null
            }

        </ul>

        
    </div>
  )
}


export default GridProyectos
