import { redesSociales } from "../../../dataProps/redesSociales"
import './contacto.css'

const Contacto = () => {
  const linkLinkedin = redesSociales.find(r=>r.txt==="Linkedin").ruta
  const linkMail = redesSociales.find(r=>r.txt==="Mail").ruta
  const mail = linkMail.replace("mailto:","")

  return (
    <main className="contacto">

      <div className="contacto-contenedor">

        <a href={linkMail} className={`btn btn-mail`} title={mail} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-envelope"></i>
          Enviar Mail
        </a>

        <a href={linkLinkedin} className={`btn linkedin`} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
          Perfil de Linkedin
        </a>

      </div>


    </main>
  )
}

export default Contacto
