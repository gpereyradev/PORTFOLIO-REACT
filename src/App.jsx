import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Certificates from "./components/Certificates.jsx";
import Arcade from "./components/Arcade.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import usePortfolioEffects from "./hooks/usePortfolioEffects.js";

export default function App() {
  const { progressRef, cursorRef } = usePortfolioEffects();
  return (
    <>
      <a className="skip-link" href="#proyectos">
        Saltar a los proyectos
      </a>
      <div className="reading-progress" ref={progressRef} aria-hidden="true" />
      <div className="cursor" ref={cursorRef} aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <div className="marquee" aria-hidden="true">
          <div>
            {[0, 1].map((i) => (
              <span key={i}>
                DISEÑO UX/UI <b>↗</b> DESARROLLO DE SOFTWARE <b>↗</b>{" "}
                VIDEOJUEGOS <b>↗</b> DISEÑO 2D / 3D <b>↗</b>{" "}
              </span>
            ))}
          </div>
        </div>
        <Projects />
        <About />
        <Skills />
        <Certificates />
        <Arcade />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
