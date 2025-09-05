import { useState } from "react";

export const useClipBoard = (texto) => {
    const [copiado, setCopiado] = useState(false);

    const copiar = async () => {
        try {
            
            await navigator.clipboard.writeText(texto);
            setCopiado(true);
            setTimeout(() => setCopiado(false), 2000); // vuelve a "Copiar" después de 2s

        } catch (err) {
            console.error("Error al copiar: ", err);
        }
    };

    return { copiado, copiar  }
}