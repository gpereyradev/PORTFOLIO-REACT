import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/style.css";
import "./styles/revision.css";
import "./styles/personal.css";
import "./styles/react.css";
import "./styles/nexus.css";
import "./styles/neurochess.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
