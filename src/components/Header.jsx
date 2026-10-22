import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
export default function Header() {
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
        aria-label="Guillermo Pereyra, inicio"
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
        aria-label="Navegación principal"
        onClick={(e) => {
          if (e.target.closest("a")) setOpen(false);
        }}
      >
        <a href="#proyectos">
          Proyectos <sup>09</sup>
        </a>
        <a href="#universo">Sobre mí</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#certificaciones">
          Certificados <sup>11</sup>
        </a>
        <a className="nav-contact" href="#contacto">
          Contacto <ArrowUpRight size={16} />
        </a>
      </nav>
      <button
        className="menu-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="nav"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
