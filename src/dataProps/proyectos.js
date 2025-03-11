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
    `ArgyView es una aplicación móvil desarrollada en Kotlin para Android que permite visualizar en tiempo real las cotizaciones del mercado bursátil argentino. Ideal para inversores y entusiastas del mercado financiero. 

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
    "Heladería_UNLZ",
    "Sistema web para la gestión de una heladería, implementando MVC e inyección de dependencias.",
    `Este proyecto, desarrollado en C# con ASP.NET, consiste en un sistema web para la gestión de una heladería, incluyendo un CRUD de sabores de helado, una página para realizar pedidos, distinguiendo rol de usuario administrador y cliente. 

Se utiliza una base de datos compartida en Azure. 
    
Los usuarios deben ingresar con su cuenca de Google, con la cual se realiza la autenticación con aprovechando la tecnología OAuth 2.0.

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
    "Carrito_de_compras_UNLZ",
    "Carrito de compras web desarrollado en Java con MVC para la UNLZ.",
    `Proyecto grupal desarrollado en Java con servlets y JSP implementando patrones como MVC (modelo-vista-controlador), singleton, factory.

Funcionalidades:
  - Agregar productos al carrito.
  - Modificar y eliminar productos.
  - Calcular total de la compra.
  - Generación de factura PDF.

El trabajo fomentó la colaboración y la aplicación de conceptos clave, como la separación de responsabilidades, trabajo con repositorios y desarrollo web dinámico.


  
Tecnologías usadas: Backend en Java, Frontend en HTML/CSS/JS, servidor Apache Tomcat.`,
    ["Java", "Tomcat", "Bootstrap", "Git"],
    null,
    "https://github.com/crisfide/CarritoTP-UNLZ",
    ""
  ),
];
