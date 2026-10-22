export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot"></span>
          {" DESARROLLO & DISEÑO "}
          <span className="sep">{"/"}</span>
          {" LIMA, PERÚ"}
        </div>
        <h1>
          <span className="hero-name">{"GUILLERMO PEREYRA"}</span>
          <span className="hero-word">
            {"CODE"}
            <span className="red">{"."}</span>
          </span>
          <span className="hero-word outline">
            {"DESIGN"}
            <span>{"."}</span>
          </span>
          <span className="hero-word play-word">
            {"PLAY"}
            <span className="red">{"."}</span>
            <span className="spark" aria-hidden="true">
              {"✳"}
            </span>
          </span>
        </h1>
        <p className="hero-description">
          {"Desarrollo de software, diseño UX/UI y videojuegos."}
          <br />
          {"Me interesa construir cómo funciona una experiencia"}
          <br className="desktop-br" />
          {" y diseñar cómo se ve, se siente y responde."}
        </p>
        <div className="hero-actions">
          <a href="#proyectos" className="button lime-button">
            {"VER PROYECTOS "}
            <span>{"↗"}</span>
          </a>
          <a
            href="https://github.com/gpereyradev"
            className="github-hero"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets/github.svg" alt="" />
            {"GitHub "}
            <span>{"↗"}</span>
          </a>
        </div>
        <div className="hero-roles">
          <span>{"SOFTWARE DEVELOPER"}</span>
          <span>{"UX/UI DESIGNER"}</span>
          <span>{"GAME DEV"}</span>
        </div>
      </div>
      {"\n"}
      <div className="portrait-panel">
        <div className="portrait-backdrop" aria-hidden="true"></div>
        <div className="portrait-frame">
          <img
            src="assets/guillermo-pereyra.webp"
            alt="Guillermo Pereyra"
            fetchPriority="high"
          />
          <div className="portrait-caption">
            <span>{"GUILLERMO PEREYRA"}</span>
            <strong>
              {"Software, diseño"}
              <br />
              {"e interacción."}
            </strong>
          </div>
          <span className="portrait-index">{"GP / 01"}</span>
        </div>
        <span className="portrait-label">
          {"INGENIERÍA DE SOFTWARE CON IA"}
        </span>
        <div className="portrait-note">
          {"LIMA, PERÚ "}
          <span>{"↗"}</span>
        </div>
      </div>
      <div className="hero-bottom">
        <span>{"PORTFOLIO / GUILLERMO PEREYRA"}</span>
        <a href="#proyectos" aria-label="Ver proyectos">
          {"↓"}
        </a>
        <span>{"DESPLAZA PARA EXPLORAR"}</span>
      </div>
    </section>
  );
}
