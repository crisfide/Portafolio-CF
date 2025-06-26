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
    "Electro_Desafio",
    "Desarrollo de una aplicación web responsiva para automatizar la gestión de trabajos eléctricos, pagos y sistema de referidos.",
    `Sistema de Referidos para Electricistas

Proyecto web en Laravel + React (Inertia.js) | Hostinger – En línea desde mayo de 2025

Desarrollo de una aplicación web responsiva para automatizar la gestión de trabajos eléctricos, pagos y sistema de referidos.

Tecnologías principales:
  - Backend: Laravel 12 (PHP 8.2), Eloquent ORM, autenticación con Laravel Breeze, rutas protegidas con middleware.
  - Frontend: React + Inertia.js + Vite, diseño responsivo, Tailwind CSS, formularios dinámicos.
  - Base de datos: MySQL con relaciones entre entidades y optimización para escalabilidad futura.
  - Autenticación: Login con email, contraseña o Facebook Login (OAuth2).
  - Despliegue: Hosting en Hostinger, dominio propio, variables .env configuradas para producción.

Funcionalidades principales:
  - ABM (Alta/Baja/Modificación) de usuarios, clientes y demás entidades.
  - Gestión de usuarios con roles diferenciados (admin / colaborador), perfil editable.

  - Single Page Application moderna y optimizada.
  - Diseño adaptable (mobile/PC) y modo claro/oscuro.
  - Uso de React-Select y modales para facilitar la interacción.
  - Reutilización de componentes; validación del lado cliente y servidor.
  - Integración de gráficos con Chart.js para visualización de datos.


Tareas adicionales realizadas:
  - Pruebas funcionales realizadas en cada etapa para asegurar la integridad del sistema.
  - Documentación técnica y funcional del sistema.
  - Despliegue en servidor web con configuración de entorno de producción.

`,
    ["PHP", "Laravel", "React", "MySQL", "Tailwind CSS", "OAuth2", "Git"],
    "https://electrodesafio.com/",
    "https://github.com/crisfide/electroDesafioWeb",
    ""
  ),


  crearProyecto(
    "Sistema_de_Gestión_Contable",
    "Pasantía como Desarrollador Full Stack .NET para Estudio contable, desarrollando un sistema de gestión y liquidación automática de impuestos.",
    `Pasantía como Desarrollador Full Stack .NET para Estudio contable V. Domínguez 

Este proyecto es el proyecto final de la carrera de Tecnicatura en Programación, y fue desarrollado como pasantía o práctica profesional supervisada.

Diseño y desarrollo de un sistema interno de gestión contable, orientado a digitalizar y automatizar procesos operativos del estudio.

Stack y Tecnologías Utilizadas:
  - Backend: ASP.NET (C#), arquitectura MVC.
  - Frontend: HTML, CSS (Bootstrap y AdminLTE), JavaScript puro (validaciones y control dinámico).
  - Base de datos: SQL Server, diseño de modelo entidad-relación, consultas optimizadas, integración mediante Entity Framework Code First.
  - Control de versiones: Git, trabajo colaborativo mediante repositorio en GitHub.
  - Documentación: Redacción de manual técnico y documentación funcional para soporte y mantenimiento.

Tareas destacadas:
  - Desarrollo de módulos para gestión de empleados y automatización de reportes por cliente.
  - Optimización de estructuras de datos leídos desde hojas de cálculo de Excel.
  - Participación en validaciones funcionales junto a usuarios reales del estudio.
  - Desarrollo incremental con fases: relevamiento → prototipado → desarrollo → validación → entrega.
  - Despligue en servidor web a través de Docker.

Alcance funcional:
  - Sustitución de procesos manuales por flujos digitales.
  - Cálculo de netos e impuestos a pagar según las diferentes alícuotas.
  - Generación de reportes en PDF y Excel para Impuesto a las Ganancias, IVA e Ingresos brutos.
  - Importación de datos desde planilla Excel estándar de AFIP.
  - Automatización de resúmenes mensuales/anuales.
  - Diseño de planillas personalizadas optimizadas para los procesos contables del cliente.

`,
    ["C#", ".NET", "Docker", "Bootstrap", "Git"],
    null,
    "https://github.com/CejasPablo/AppEstudioContable",
    ""
  ),

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
    "https://www.heladeriaunlz.somee.com/",
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
