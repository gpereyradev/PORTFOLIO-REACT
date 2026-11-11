import { useLocale } from "../i18n/LocaleContext.jsx";
import { useMemo, useState } from "react";
import { ArrowUpRight, CircleCheck, Search, X } from "lucide-react";
import { useProjects } from "../i18n/useProjects.js";
import { filterProjects } from "../lib/projects.js";
import { featuredProjectIds } from "../data/projects.js";
import { profile } from "../data/profile.js";
import ProjectCover from "./ProjectCover.jsx";
import ProjectDialog from "./ProjectDialog.jsx";
import ParkingDemo from "./ParkingDemo.jsx";
import TechIcon, { TechTags } from "./TechIcon.jsx";
const filters = [
  ["featured", "DESTACADOS"],
  ["android", "ANDROID"],
  ["web", "WEB"],
  ["ai", "IA / DATOS"],
  ["ux", "UX/UI"],
  ["game", "GAME DEV"],
  ["iot", "IoT / ARDUINO"],
  ["team", "EN EQUIPO"],
];
export default function Projects() {
  const { t } = useLocale();
  const projects = useProjects();
  const [category, setCategory] = useState("featured");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const filtered = useMemo(
    () => filterProjects(projects, category, query),
    [projects, category, query],
  );
  return (
    <section className="projects section-paper" id="proyectos">
      <div className="chapter">
        <span>{t("01 / PROYECTOS")}</span>
        <span>{t("DESARROLLO · DISEÑO · INTERACCIÓN")}</span>
      </div>
      <div className="section-heading reveal">
        <h2>{t("PROYECTOS")}<br />
          <span className="red">{t("SELECCIONADOS.")}</span>
        </h2>
        <p>{t("Explora mis proyectos destacados o elige una categoría para ver más.")}</p>
      </div>
      <div className="project-toolbar">
        <div className="filters" role="group" aria-label={t("Filtrar proyectos")}>
          {filters.map(([id, label]) => (
            <button
              type="button"
              className={category === id ? "active" : ""}
              aria-pressed={category === id}
              key={id}
              onClick={() => setCategory(id)}
            >
              {t(label)}
              {id === "featured" && (
                <sup>{featuredProjectIds.length}</sup>
              )}
            </button>
          ))}
        </div>
        <label className="project-search">
          <Search size={17} />
          <span className="sr-only">{t("Buscar proyectos o tecnologías")}</span>
          <input
            type="search"
            aria-label={t("Buscar proyectos o tecnologías")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("Proyecto o tecnología…")}
          />
          {query && (
            <button
              type="button"
              aria-label={t("Borrar búsqueda")}
              onClick={() => setQuery("")}
            >
              <X size={15} />
            </button>
          )}
        </label>
      </div>
      <span className="project-count" role="status">
        {filtered.length} {filtered.length === 1 ? t("proyecto") : t("proyectos")} {t("/ explora cada caso")}</span>
      <div className={`project-grid${category === "featured" && !query.trim() ? " project-grid-featured" : ""}`}>
        {filtered.map((project) => {
          const content = (
            <>
              <ProjectCover id={project.id} />
              <div className="project-info">
                <div>
                  <span className="small-label">{t(project.label)}</span>
                  <h3>
                    {project.title}
                    <ArrowUpRight size={25} />
                  </h3>
                  <p>{project.summary}</p>
                  {project.caseStudy && (
                    <>
                      <span className="project-result"><CircleCheck size={16} /><strong>{project.caseStudy.signal}</strong></span>
                      <span className="project-role">{project.caseStudy.role} <span>· {project.caseStudy.status}</span></span>
                    </>
                  )}
                  <TechTags items={project.cardTags} />
                  <span className="project-read">
                    {project.href
                      ? t("JUGAR AL PROTOTIPO")
                      : t("VER CASO Y DECISIONES")}{" "}
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </>
          );
          const className = `project-card real-project ${project.id === "fitcoach" ? "featured-fitcoach" : project.id === "nexus-ai" ? "featured-nexus" : ""}`;
          return project.href ? (
            <a key={project.id} className={className} href={project.href}>
              {content}
            </a>
          ) : (
            <button
              key={project.id}
              className={className}
              onClick={() => setSelected(project.id)}
              aria-label={`${t("Ver proyecto")} ${project.title}`}
            >
              {content}
            </button>
          );
        })}
      </div>
      {filtered.length === 0 && (
        <div className="projects-empty">
          <Search size={30} />
          <h3>{t("No encontré ese proyecto.")}</h3>
          <p>{t("Prueba con Java, React o una disciplina diferente.")}</p>
          <button
            type="button"
            className="button"
            onClick={() => {
              setQuery("");
              setCategory("featured");
            }}
          >{t("VER DESTACADOS")}<ArrowUpRight size={17} />
          </button>
        </div>
      )}
      {filtered.some((project) => project.id === "parksense") && <ParkingDemo />}
      <a
        className="all-repos"
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="inline-icon">
          <TechIcon name="GitHub" />{t("MÁS CÓDIGO EN GITHUB")}</span>
        <span>@gpereyradev ↗</span>
      </a>
      <ProjectDialog project={projects.find(project => project.id === selected)} onClose={() => setSelected(null)} />
    </section>
  );
}
