import { useState, useEffect } from "react";

export const useBurgerMenu = e => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.getElementById("burgerIcon").classList.toggle("fa-bars")
    document.getElementById("burgerIcon").classList.toggle("fa-x")
    document.querySelectorAll("nav ul li.pc").forEach(li => {
      li.classList.toggle("visible")
    })    
    document.querySelector("nav ul").classList.toggle("expand")

  }, [menu]);

  const toggleMenu = e => {
    e.preventDefault()
    setMenu(!menu)
  }

  return { menu, toggleMenu };
};


