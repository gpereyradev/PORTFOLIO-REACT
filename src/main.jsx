import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LocaleProvider } from "./i18n/LocaleContext.jsx";
import "./styles/style.css";
import "./styles/revision.css";
import "./styles/personal.css";
import "./styles/react.css";
import "./styles/nexus.css";
import "./styles/neurochess.css";
import "./styles/case-studies.css";
import "./styles/tuerka.css";
import "./styles/operations.css";
import "./styles/locale.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LocaleProvider><App /></LocaleProvider>
  </StrictMode>,
);
