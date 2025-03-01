import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import Container from "./Container";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter basename="/Portafolio-CF"> */}
    <Container />
    {/* </BrowserRouter> */}
  </StrictMode>
);
