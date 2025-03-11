import { useContext } from "react"
import { DarkContext } from "../../../context/DarkContext"
import { obtenerIcono } from "../../../helpers/obtenerIcono"
import { Link } from "react-router-dom"
import { useThemeImg } from "../../../hooks/useThemeImg"
import './listaProyectos.css'
import '../../iconos.css'

const ListaProyectos = ({proyectos}) => {
  return (
    <main>
      <h2>Mis proyectos</h2>
      <section className="cards">
        {
          proyectos.map(proyecto => (
            <ProyectoCard {...proyecto} key={proyecto.nombre} />
          ))
        }      
      </section>
    </main>
  )
}

const ProyectoCard = ({nombre, resumen, tecnologias, linkWeb, linkGithub, imagen}) => {
  const { darkMode } = useContext(DarkContext)
  const img = useThemeImg(nombre,darkMode)

  return (
    <Link to={`/proyectos/${nombre}`}>

      <article className="card cols">
        <div className="col img">
          <img src={img} alt={`Imagen de ${nombre}`} loading="lazy" />
        </div>
        <div className="col">
          <div>
            <h3>{nombre.replaceAll("_"," ")}</h3>
            <p>{resumen}</p>
          </div>

          <div>
            <ul>
              {
                tecnologias.map( tec => (
                  <li key={tec}>
                    <span className="tec" title={tec}>
                      <i className={`devicon-${obtenerIcono(tec)}-plain colored`}></i>
                    </span>
                  </li>)
                )
              }            
            </ul>

            <ul>
              <li>
                <a href={linkGithub} target="_blank" title="Ver en Github">
                  <i className="fa-brands fa-github"></i> Ver en github
                </a>
              </li>
              {
                (linkWeb) ?
                <li>
                  <a href={linkWeb} target="_blank" title="Acceder al proyecto">
                    <i className="fa-solid fa-link"></i> Visitar sitio
                  </a>
                </li>
                :null
              }

            </ul>

          </div>
        </div>
      </article>
    </Link>
  )          
}

export default ListaProyectos
