import { useLocale } from "../i18n/LocaleContext.jsx";
import { projects } from "../data/projects.js";

export default function About() {
  const { t, language } = useLocale();
  return (
    <section className="universe" id="universo">
      <div className="chapter">
        <span>{t("02 / SOBRE MÍ")}</span>
        <span>{t("PROGRAMACIÓN + PENSAMIENTO VISUAL")}</span>
      </div>
      <div className="about-layout">
        <div className="about-heading reveal">
          <span className="small-label red">
            {"GUILLERMO ANDERSON PEREYRA RAMIREZ"}
          </span>
          <h2>
            {t("DISEÑO,")}
            <br />
            {t("CÓDIGO E")}
            <br />
            <span className="outline">{t("INTERACCIÓN.")}</span>
          </h2>
          <div className="about-location">
            <span>{"↗"}</span>
            <div>
              {t("LIMA, PERÚ")}
              <small>{t("INGENIERÍA DE SOFTWARE CON IA / SENATI")}</small>
            </div>
          </div>
        </div>
        <div className="about-content reveal">
          <p className="about-lead">
            {
              t("Soy desarrollador full-stack y estudiante de Ingeniería de Software con IA en SENATI. Me gusta trabajar entre la lógica de un sistema y la experiencia de quien lo usa.")
            }
          </p>
          <p>
            {
              t("Desarrollo aplicaciones con Java y React, diseño interfaces y exploro la creación de videojuegos con Godot. También practico modelado 3D, composición visual y VFX con Blender.")
            }
          </p>
          <p>
            {
              t("Complemento mis proyectos con formación en UX, programación, datos, redes y seguridad. En este portfolio reúno lo que he construido, lo que he estudiado y los experimentos con los que sigo aprendiendo.")
            }
          </p>
          <div className="about-facts">
            <a href="#proyectos">
              <strong>{String(projects.filter(project => !project.href && project.id !== "portfolio").length).padStart(2, "0")}</strong>
              <span>
                {t("PROYECTOS PRINCIPALES")}
                <br />
                {"SOFTWARE + IoT"}
              </span>
            </a>
            <a href="#certificaciones">
              <strong>{"11"}</strong>
              <span>
                {t("CREDENCIALES")}
                <br />
                {t("PARA CONSULTAR")}
              </span>
            </a>
            <a href="#arcade">
              <strong>{"01"}</strong>
              <span>
                {t("PROTOTIPO")}
                <br />
                {t("JUGABLE")}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
