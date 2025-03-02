import { useState, useEffect, useContext } from "react"
import { DarkContext } from "./DarkContext"
import './iconos.css'
import { Link } from "react-router-dom"
import { obtenerIcono } from "./obtenerIcono"

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
  const { darkMode } = useContext(DarkContext)
  const [img, setImg] = useState(`assets/img/${darkMode === true ? "dark/" : ""}${nombre}.jpg`);
  useEffect(() => {
    setImg(`assets/img/${darkMode === true ? "dark/" : ""}${nombre}.jpg`);
  }, [darkMode]);

  const estiloFondo = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: "100vh",
    };

  return (
    <div className="proyecto" style={estiloFondo}>
      <div className="transparente">
        <div>
          <h3>{nombre}</h3>
          <div>
            <p><small>{resumen}</small></p>
            <Link to={`/proyectos/${nombre}`} className="btn">+ detalles</Link>
          </div>
        </div>

        <div>
          <ul>
            {
              tecnologias.map( tec => (
                <li key={tec}>
                  <a href="#" className="tec" title={tec}>
                    <i className={`devicon-${obtenerIcono(tec)}-plain colored`}></i>
                    <br />
                    <code><small>{tec}</small></code>
                  </a>
                </li>)
              )
            }            
          </ul>

          <ul>
            <li>
              <a href={linkGithub} target="_blank" title="Ver en Github">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            {
              (linkWeb) ?
              <li>
                <a href={linkWeb} target="_blank" title="Acceder al proyecto">
                  <i className="fa-solid fa-link"></i>
                </a>
              </li>
              :null
            }

          </ul>

        </div>
      </div>

    </div>
  )
}


export default GridProyectos




