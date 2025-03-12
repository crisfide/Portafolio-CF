import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Container from "./componentes/Container";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter basename="/Portafolio-CF"> */}
    <Container />
    {/* </BrowserRouter> */}
  </StrictMode>
);
