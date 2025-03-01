const crearProyecto = (
  nombre,
  resumen,
  descripcion,
  tecnologias,
  linkWeb,
  linkGithub,
  imagen
) => ({
  nombre,
  resumen,
  descripcion,
  tecnologias,
  linkWeb,
  linkGithub,
  imagen,
});

export const proyectos = [
  crearProyecto(
    "ArgyView",
    "ArgyView es una app móvil Android que muestra en tiempo real las cotizaciones del mercado bursátil argentino...",
    `ArgyView es una aplicación móvil desarrollada en Kotlin para Android que permite visualizar en tiempo real 
       las cotizaciones del mercado bursátil argentino. Ideal para inversores y entusiastas del mercado financiero. 
       Funcionalidades:
       - Visualización de precios de distintos activos.
       - Actualización en tiempo real.
       - Filtros y búsqueda de acciones.
       - Gráficos históricos (próximamente).
       - Panel de favoritos personalizable.`,
    ["Kotlin", "Android"],
    null,
    "https://github.com/crisfide/ArgyView",
    ""
  ),

  crearProyecto(
    "Heladería UNLZ",
    "Sistema web para la gestión de una heladería, implementando MVC e inyección de dependencias.",
    `Este proyecto, desarrollado en C# con ASP.NET, consiste en un sistema web para la gestión de una heladería... 
       Funcionalidades:
       - Gestión de productos.
       - Pedidos en línea.
       - Autenticación con Google.
       - Base de datos en Azure.
       - Interfaz con Bootstrap y JavaScript.`,
    ["C#", ".NET", "OAuth2", "Azure", "Bootstrap", "Git"],
    null,
    "https://github.com/crisfide/HeladeriaTP-UNLZ",
    ""
  ),

  crearProyecto(
    "Carrito de compras UNLZ",
    "Carrito de compras web desarrollado en Java con MVC para la UNLZ.",
    `Proyecto grupal desarrollado en Java con servlets y JSP... 
       Funcionalidades:
       - Agregar productos al carrito.
       - Modificar y eliminar productos.
       - Calcular total de la compra.
       - Simulación de checkout.
       Tecnologías usadas: Backend en Java, Frontend en HTML/CSS/JS, servidor Apache Tomcat.`,
    ["Java", "Tomcat", "Bootstrap", "Git"],
    null,
    "https://github.com/crisfide/CarritoTP-UNLZ",
    ""
  ),
];
