import { useLocale } from "../i18n/LocaleContext.jsx";
import { projects } from "../data/projects.js";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
export default function Header() {
  const { t, language, setLanguage } = useLocale();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="header">
      <a
        href="#inicio"
        className="brand"
        aria-label={t("Guillermo Pereyra, inicio")}
      >
        <span className="brand-mark">
          G<span>↗</span>
        </span>
        <span>
          GUILLERMO
          <br />
          PEREYRA<span className="red">.</span>
        </span>
      </a>
      <nav
        id="nav"
        className={open ? "open" : ""}
        aria-label={t("Navegación principal")}
        onClick={(e) => {
          if (e.target.closest("a")) setOpen(false);
        }}
      >
        <a href="#proyectos">{t("Proyectos")}<sup>{String(projects.length).padStart(2, "0")}</sup>
        </a>
        <a href="#universo">{t("Sobre mí")}</a>
        <a href="#habilidades">{t("Habilidades")}</a>
        <a href="#certificaciones">{t("Certificados")}<sup>11</sup>
        </a>
        <a className="nav-contact" href="#contacto">{t("Contacto")}<ArrowUpRight size={16} />
        </a>
      </nav>
      <button type="button" className="language-toggle" onClick={() => setLanguage(language === "es" ? "en" : "es")} aria-label={language === "es" ? "Switch to English" : "Cambiar a español"} title={language === "es" ? "Switch to English" : "Cambiar a español"}><span aria-hidden="true">◎</span><span lang="es" className={language === "es" ? "active" : ""}>ES</span><span aria-hidden="true">/</span><span lang="en" className={language === "en" ? "active" : ""}>EN</span></button>
      <button
        className="menu-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="nav"
        aria-label={open ? t("Cerrar menú") : t("Abrir menú")}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
