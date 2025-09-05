import { redesSociales } from "../../dataProps/redesSociales"

const BtnLinkedin = () => {
  const linkLinkedin = redesSociales.find(r=>r.txt==="Linkedin").ruta

  return (
    <a className="btn-action" aria-label="Ir a mi perfil de Linkedin" href={linkLinkedin} target="_blank" rel="noopener noreferrer">
      <i className="fa-brands fa-linkedin-in"></i>
    </a>
  )
}

export default BtnLinkedin
