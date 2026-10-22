import { skills } from "../data/skills.js";
import TechIcon from "./TechIcon.jsx";
export default function Skills() {
  return (
    <section className="skills section-paper" id="habilidades">
      <div className="chapter">
        <span>03 / HABILIDADES</span>
        <span>HERRAMIENTAS, FORMACIÓN Y PRÁCTICA</span>
      </div>
      <div className="section-heading reveal">
        <h2>
          TECNOLOGÍAS &<br />
          <span className="red">ESPECIALIDADES.</span>
        </h2>
        <p>
          Un perfil que combina software,
          <br />
          diseño de experiencias, creación visual
          <br />y fundamentos de sistemas.
        </p>
      </div>
      <div className="expertise-grid">
        {skills.map((skill) => (
          <article
            className={`expertise-card reveal area-${skill.number}`}
            key={skill.number}
          >
            <div className="expertise-top">
              <span>{skill.number}</span>
              <b>{skill.area}</b>
              <TechIcon name={skill.icon} />
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="tools">
              {skill.tools.map((tool) => (
                <span className="tool" key={tool}>
                  <TechIcon name={tool} />
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <p className="skills-note">
        Mis proyectos muestran aplicaciones concretas de Java, React y
        JavaScript. Las demás áreas forman parte de mi formación, práctica e
        intereses de desarrollo.
      </p>
    </section>
  );
}
