import { useState, useEffect, useContext } from "react"
import { DarkContext } from "../../../context/DarkContext"
import { Link } from "react-router-dom"
import { obtenerIcono } from "../../../helpers/obtenerIcono"
import { existeImg } from "../../../helpers/existeImg"
import './gridProyectos.css'
import '../../iconos.css'

const GridProyectos = ({proyectos}) => {
  return (
    <>
      <h2 className="mt">Proyectos en los que he trabajado</h2>
      <section className="carrusel" id="proyectos">      
        {
          proyectos.map( proyecto => (
            <ProyectoItem {...proyecto} key={proyecto.nombre} />)
          )
        }
      </section>
    </>
  )
}

const ProyectoItem = ({nombre, resumen, tecnologias, linkWeb, linkGithub, imagen}) => {
  const { darkMode } = useContext(DarkContext)
  const [img, setImg] = useState("");
  useEffect(() => {
    const getImgInicial = async () => {
      const urlDark = `assets/img/dark/${nombre}.webp`
      const urlLight = `assets/img/${nombre}.webp`
            
      if (darkMode) {
        const existeImgDark = await existeImg(urlDark)
        if (existeImgDark) {
          setImg(urlDark)
          return
        }
      }

      setImg(urlLight)
    }
    getImgInicial()

    //setImg(`assets/img/${darkMode === true ? "dark/" : ""}${nombre}.webp`);
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
          <h3>{nombre.replaceAll("_"," ")}</h3>
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
                  <span className="tec" title={tec}>
                    <i className={`devicon-${obtenerIcono(tec)}-plain colored`}></i>
                    <br />
                    <code><small>{tec}</small></code>
                  </span>
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




