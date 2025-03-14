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
    "Sistema_de_Finanzas_Hogareñas_UNLZ",
    "CAJA es una aplicación diseñada para gestionar los gastos e ingresos del hogar, implementando el patrón MVC en PHP.",
    `CAJA es un sistema colaborativo desarrollado en equipo para gestionar los gastos e ingresos del hogar, facilitando el control financiero personal. El proyecto fue implementado en un repositorio Git compartido con otros grupos, permitiendo una integración eficiente del código y una colaboración fluida entre equipos.

  Funcionalidades:
  - Registro y Login: Acceso seguro con email y contraseña. Registro con datos como nombre, DNI, email, celular y contraseña.
  - Envío de mail para recuperar la contraseña a través de la librería PHPMailer.
  - Panel de Administración:
  - Alta de cuentas.
  - Registro de ingresos y egresos.
  - Consulta de movimientos (completos, filtrados por fecha, tipo de movimiento y categoría).
  - Tabla y gráfico que muestran el porcentaje que representan cada tipo de gasto en los ingresos (se utiliza Chart.js).
  
Este sistema facilita la toma de decisiones financieras a través de un seguimiento detallado y visual de los movimientos económicos.`,
    ["PHP", "MySQL", "JavaScript", "Bootstrap", "Git"],
    null,
    "https://github.com/juanPabloCesarini/appweb_caba_2c_2024",
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
