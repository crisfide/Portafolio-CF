import ReactDOM from "react-dom";
import { useModal } from "../../../hooks/useModal";
import './modal.css'
import { useEffect, useState } from "react";


const Img = ({src,alt="",title=""}) => {
    
  const [isOpen, open, close] = useModal();

  const [className, setClassName] = useState("horizontal");
  
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
        if (img.naturalWidth > img.naturalHeight) {
            setClassName("horizontal");
        } else {
            setClassName("vertical");
        }
    };
  }, [src]);

  return isOpen ? 
    (<ModalPortalImg isOpen={isOpen} close={close}>
        <img src={src} alt={alt} title={title} className={className} loading="lazy" />
    </ModalPortalImg>) : <img src={src} alt={alt} title={title} onClick={open} loading="lazy" />
  
}

export default Img


const ModalPortalImg = ({ children, isOpen, close }) => {


  const cerrar = (e) => {
    if ( e.target.tagName !== "IMG" ) {
      close();
    }
  };

  const [zoom, setZoom] = useState(false);
  

  return ReactDOM.createPortal(
    <article className={`modal-back ${isOpen && "is-open"}`} onClick={cerrar}>
      <button className="modal-close">
        <i className="fa-solid fa-x" id="burgerIcon"></i>
      </button>
      <div className={`modal-img-container ${zoom && "zoomed"}`} 
          onClick={()=>setZoom(!zoom)} 
        >
        {children}
      </div>
    </article>,
    document.getElementById("modal")
  );
};

