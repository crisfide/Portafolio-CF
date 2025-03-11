import { existeImg } from "../helpers/existeImg"
import { useEffect, useState } from "react";

export const useThemeImg = (nombre, darkMode) => {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const getImgInicial = async () => {
      const urlDark = `assets/img/dark/${nombre}_preview.webp`
      const urlLight = `assets/img/${nombre}_preview.webp`

      if (darkMode) {
        const existeImgDark = await existeImg(urlDark)
        if (existeImgDark) {
          setImg(urlDark)
          return
        }
      }

      setImg(urlLight)
    }
    getImgInicial()

    //setImg(`assets/img/${darkMode === true ? "dark/" : ""}${nombre}.webp`);
  }, [darkMode]);

  return img;
};
