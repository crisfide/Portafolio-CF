import { useContext, useState } from "react"
import { DarkContext } from "../../../context/DarkContext"
import { Link } from "react-router-dom"
import { obtenerIcono } from "../../../helpers/obtenerIcono"
import { useThemeImg } from "../../../hooks/useThemeImg"
import './gridProyectos.css'
import '../../iconos.css'

const gridScroll = (e, izq=false) => {
  const px = izq ? -350 : 350
  proyectos.scroll(proyectos.scrollLeft + px, 0)
}


const GridProyectos = ({proyectos}) => {
  const [btnIzqDisabled, setBtnIzqDisabled] = useState(true);
  const [btnDerDisabled, setBtnDerDisabled] = useState(false);
  
  const handleScroll = e => {
    const {scrollLeft, clientWidth, scrollWidth } = e.target
    
    setBtnIzqDisabled(scrollLeft === 0)
    setBtnDerDisabled(scrollLeft + clientWidth >= scrollWidth)
  }
  

  return (
    <>
      <h2 className="mt">Proyectos en los que he trabajado</h2>

      <section className="carrusel-container">
        <button className="btn-scroll" 
              onMouseDown={e => gridScroll(e, true)} 
              disabled={btnIzqDisabled ? "disabled" : null}
              >{"<"}</button>

        <div className="carrusel" id="proyectos" onScroll={handleScroll}>
          {
            proyectos.map( proyecto => (
              <ProyectoItem {...proyecto} key={proyecto.nombre} />)
            )
          }
        </div>

        <button className="btn-scroll" 
              onMouseDown={e => gridScroll(e)} 
              disabled={btnDerDisabled ? "disabled" : null}
              >{">"}</button>
      </section>
    </>
  )
}

const ProyectoItem = ({nombre, resumen, tecnologias, linkWeb, linkGithub, linkYoutube}) => {
  const { darkMode } = useContext(DarkContext)
  const img = useThemeImg(nombre,darkMode)

  const estiloFondo = {
        backgroundImage: `url(${img})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: darkMode ? "#a89fe955" : "#fff",
        // height: "100vh",
    };

  return (
    <article className="proyecto" style={estiloFondo}>
      <h3>{nombre.replaceAll("_"," ")}</h3>

      <div className="transparente">
        <div>
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
            {
              (linkYoutube) ?
              <li>
                <a href={linkYoutube} target="_blank" title="Video del proyecto">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              :null
            }

          </ul>

        </div>
      </div>


    </article>
  )
}


export default GridProyectos




