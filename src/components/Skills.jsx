import { useLocale } from "../i18n/LocaleContext.jsx";
import { skills } from "../data/skills.js";
import TechIcon from "./TechIcon.jsx";
export default function Skills() {
  const { t, language } = useLocale();
  return (
    <section className="skills section-paper" id="habilidades">
      <div className="chapter">
        <span>{t("03 / HABILIDADES")}</span>
        <span>{t("HERRAMIENTAS, FORMACIÓN Y PRÁCTICA")}</span>
      </div>
      <div className="section-heading reveal">
        <h2>{t("TECNOLOGÍAS &")}<br />
          <span className="red">{t("ESPECIALIDADES.")}</span>
        </h2>
        <p>{t("Un perfil que combina software,")}<br />{t("diseño de experiencias, creación visual")}<br />{t("y fundamentos de sistemas.")}</p>
      </div>
      <div className="expertise-grid">
        {skills.map((skill) => (
          <article
            className={`expertise-card reveal area-${skill.number}`}
            key={skill.number}
          >
            <div className="expertise-top">
              <span>{skill.number}</span>
              <b>{t(skill.area)}</b>
              <TechIcon name={skill.icon} />
            </div>
            <h3>{t(skill.title)}</h3>
            <p>{t(skill.description)}</p>
            <div className="tools">
              {skill.tools.map((tool) => (
                <span className="tool" key={tool}>
                  <TechIcon name={tool} />
                  {t(tool)}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <p className="skills-note">{t("Mis proyectos muestran aplicaciones concretas de Java, React y JavaScript. Las demás áreas forman parte de mi formación, práctica e intereses de desarrollo.")}</p>
    </section>
  );
}
