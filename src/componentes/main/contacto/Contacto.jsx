import { redesSociales } from "../../../dataProps/redesSociales"
import './contacto.css'

const Contacto = () => {
  const linkLinkedin = redesSociales.find(r=>r.txt==="Linkedin").ruta
  return (
    <main>
      {/* <form action="" style={{textAlign:"center", padding:"30%"}}>
      </form> */}
        <a href={linkLinkedin} className={`btn linkedin`} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
          Perfil de Linkedin
        </a>

    </main>
  )
}

export default Contacto
