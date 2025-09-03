import { redesSociales } from "../../dataProps/redesSociales"

const BtnLinkedin = () => {
  const linkLinkedin = redesSociales.find(r=>r.txt==="Linkedin").ruta

  return (
    <button className="btn-nav-linkedin" aria-label="Ir a mi perfil de Linkedin">
      <a href={linkLinkedin} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </button>
  )
}

export default BtnLinkedin
