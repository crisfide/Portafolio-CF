import { useClipBoard } from "../../hooks/useClipBoard";

const BtnCopiar = ({texto}) => {
    const { copiado, copiar } = useClipBoard(texto);
    
    const estilos = {
        marginLeft:"0.5rem", 
        cursor:"pointer", 
        background:"transparent", 
        border:"none"
    }

    return (
        <button onClick={copiar} style={estilos} title={copiado ? "¡Copiado!" : "Copiar al portapapeles"}>
            {copiado ?
                <i className="fa-solid fa-check" style={{color:"rgb(82, 220, 36)"}}></i>
                :
                <i className="fa-regular fa-copy"></i>
            }


        
        </button>
    )
}

export default BtnCopiar
