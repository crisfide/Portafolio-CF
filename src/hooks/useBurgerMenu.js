import { useState, useEffect } from "react";

export const useBurgerMenu = e => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const burgerIcon = document.getElementById("burgerIcon");
    const ul = document.querySelector("nav ul");
    const items = document.querySelectorAll("nav ul li.pc");

    burgerIcon.classList.toggle("fa-bars", !menu)
    burgerIcon.classList.toggle("fa-x", menu)
    items.forEach(li => {
      li.classList.toggle("visible", menu)
    })    
    ul.classList.toggle("expand", menu)

  }, [menu]);

  const toggleMenu = e => {
    e.preventDefault()
    setMenu(anterior => !anterior)
  }

  return { menu, toggleMenu };
};


