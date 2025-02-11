import { redesSociales } from "./dataProps/redesSociales"
import RedesSoc from "./RedesSoc"

const compartirApp = (e) => {
  e.preventDefault()
  
  
  if (navigator.share) {
    navigator.share({
        title: 'Portafolio de Christian Fidelio, desarrollador',
        text: 'Portafolio de Christian Fidelio, desarrollador',
        url: 'https://crisfide.github.io/Portafolio-CF/', 
    })
    .then(() => console.log('Contenido compartido exitosamente.'))
    .catch((error) => console.error('Error al compartir:', error));
  } else {
      alert("La función de compartir no está soportada en este navegador.");
  }
}


const Footer = () => {
  return (
    <footer id="contacto">
      <RedesSoc items={redesSociales} />

      <div style={{textAlign:"center"}}>
        <a href="#" className="share-link" onClick={compartirApp}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M18 16c-1.24 0-2.34.46-3.19 1.22L8.91 12.7c.06-.23.09-.47.09-.7s-.03-.47-.09-.7l5.9-4.51C15.66 7.54 16.76 8 18 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4c0 .23.03.47.09.7L8.19 8.91C7.34 8.15 6.24 7.69 5 7.69c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.24 0 2.34-.46 3.19-1.22l5.9 4.51c-.06.23-.09.47-.09.7 0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4z"></path>
          </svg>
          Compartir
        </a>
      </div>
      
    </footer>
  )
}

export default Footer
