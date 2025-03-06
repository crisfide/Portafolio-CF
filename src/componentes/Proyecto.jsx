import { useParams } from "react-router-dom"
import { proyectos } from "./dataProps/proyectos"
import ListaProyectos from "./ListaProyectos"
import { obtenerIcono } from "./obtenerIcono"
import { useContext, useEffect, useState } from "react"
import { DarkContext } from "./DarkContext"

const Proyecto = () => {
  const {nombre} = useParams()
  const proyecto = proyectos.find(p=>p.nombre===nombre)
  //console.log(proyecto)
  if (!proyecto) return (
    <main>
      <h2>No existe el proyecto {nombre}</h2>
      <ListaProyectos proyectos={proyectos} />
    </main>
  )
  
  const { darkMode } = useContext(DarkContext)
  const [img, setImg] = useState(`assets/img/${darkMode === true ? "dark/" : ""}${proyecto.nombre}`);
  useEffect(() => {
    setImg(`assets/img/${darkMode === true ? "dark/" : ""}${proyecto.nombre}`);
  }, [darkMode]);
  
  return (
    <main className="proyecto-detalle">
      <section>
        <h2>{proyecto.nombre}</h2>
      </section>
      <section>
        <p>{proyecto.descripcion}</p>
      </section>

      <br />

      <section className="tecs-proy">
        <h3>Tecnologías utilizadas:</h3>
        <ul>
        {
          proyecto.tecnologias.map( tec => (
          <li key={tec}>
            <span className="tec" title={tec}>
              <i className={`devicon-${obtenerIcono(tec)}-plain colored`}></i>
              <code> {tec}</code>
            </span>
          </li>)
          )
        }            
        </ul>
      </section>

      <section className="links-proy">

        <ul>
          <li>
            <a href={proyecto.linkGithub} target="_blank" rel="noopener noreferrer" title="Ver en Github">
              <i className="fa-brands fa-github"></i>
              <span>  Ver en Github</span> 
            </a>
          </li>
          {
            (proyecto.linkWeb) ?
            <li>
              <a href={proyecto.linkWeb} target="_blank" rel="noopener noreferrer" title="Acceder al proyecto">
                <i className="fa-solid fa-link"></i> 
                <span>  Acceder al proyecto</span>
              </a>
            </li>
            :null
          }

        </ul>


      </section>

      <section className="img-proy">
        
        <img src={`${img}.jpg`} alt={`Imagen del proyecto ${proyecto.nombre}`} />

      </section>

    </main>
  )
}

export default Proyecto
