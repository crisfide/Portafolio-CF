import { useParams } from "react-router-dom"
import { proyectos } from "../../../dataProps/proyectos"
import ListaProyectos from "./ListaProyectos"
import { obtenerIcono } from "../../../helpers/obtenerIcono"
import { useContext, useEffect, useState } from "react"
import { DarkContext } from "../../../context/DarkContext"
import Img from "./Img"
import { existeImg } from "../../../helpers/existeImg"
import GridProyectos from "./GridProyectos"

const Proyecto = () => {
  const {nombre} = useParams()
  const proyecto = proyectos.find(p=>p.nombre===nombre)
  //console.log(proyecto)
  if (!proyecto) return (
    <main>
      <h2>No existe el proyecto {nombre}</h2>
      <br />
      <ListaProyectos proyectos={proyectos} />
    </main>
  )
  
  const { darkMode } = useContext(DarkContext)
  const [img, setImg] = useState("");
  const [arrImg, setArrImg] = useState([`${img}.jpg`])
  
  useEffect(() => {
    const getImgInicial = async () => {
      const urlDark = `assets/img/dark/${proyecto.nombre}`
      const urlLight = `assets/img/${proyecto.nombre}`
            
      if (darkMode) {
        const existeImgDark = await existeImg(urlDark+".jpg")
        if (existeImgDark) {
          setImg(urlDark)
          return
        }
      }

      setImg(urlLight)
    }
    getImgInicial()

    //setImg(`assets/img/${darkMode === true ? "dark/" : ""}${proyecto.nombre}`);
  }, [darkMode, proyecto]);
  
  useEffect(() => {
    const getImgs  = async () => {
      let arr = [`${img}.jpg`]

      for (let i = 2; i < 10; i++) {
        let url = `${img} (${i}).jpg`
        const existe = await existeImg(url)
          
        if (!existe) 
          break
        
        arr.push(url)
      }
      setArrImg(arr)
    }

    getImgs()
  }, [img]);

  return (
    <main>
      <article className="proyecto-detalle">

        <section>
          <h2>{proyecto.nombre.replaceAll("_"," ")}</h2>
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
                  <span>  Visitar sitio</span>
                </a>
              </li>
              :null
            }

          </ul>


        </section>

        <h3>Imágenes del proyecto:</h3>
        <section className="img-proy">

          
          {
            arrImg.map((img, i) => (
              <Img src={img} alt={`Imagen ${i} del proyecto ${proyecto.nombre}`} key={i} />
            ))
          }

        </section>
      
      </article>

      
      <GridProyectos proyectos={proyectos} />

    </main>
  )
}

export default Proyecto
