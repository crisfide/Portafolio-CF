import { redesSociales } from "../../../dataProps/redesSociales"
import BtnCopiar from "../BtnCopiar"
import './contacto.css'

const Contacto = () => {
  const linkLinkedin = redesSociales.find(r=>r.txt==="Linkedin").ruta
  const linkMail = redesSociales.find(r=>r.txt==="Mail").ruta
  const mail = linkMail.replace("mailto:","")

  return (
    <main className="contacto">

      <div className="contacto-contenedor">

        <span className="btn btn-mail">
          <i className="fa-solid fa-envelope"></i>
          <a href={linkMail} style={{flexGrow:"1"}} title={mail} target="_blank" rel="noopener noreferrer">
            Enviar Mail
          </a>
          <BtnCopiar texto={mail} />
        </span>

        <a href={linkLinkedin} className={`btn linkedin`} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
          Perfil de Linkedin
        </a>

      </div>


    </main>
  )
}

export default Contacto
