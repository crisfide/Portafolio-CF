import { useState } from "react";

const BtnThemeSwitch = () => {
  let modoOscuroSistema = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const [darkMode, setDarkMode] = useState(modoOscuroSistema);
  
  return (
    <button onClick={()=>setDarkMode(!darkMode)}>
      Modo oscuro {darkMode.toString()}
    </button>
  )
}

export default BtnThemeSwitch
