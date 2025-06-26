export const obtenerIcono = tec => {
  const tecLower = tec.toLowerCase();
  switch (tecLower) {
    case "html":
      return "html5";
    case "css":
      return "css3";
    case ".net":
      return "dot-net";
    case "c#":
      return "csharp";
    case "oauth2":
      return "oauth";
    case "tomcat":
      return "tomcat-line";
    case "tailwind css":
      return "tailwindcss";
    default:
      return tecLower;
  }
};
