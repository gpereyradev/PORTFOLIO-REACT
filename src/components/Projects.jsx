import { useMemo, useState } from "react";
import { ArrowUpRight, CircleCheck, Search, X } from "lucide-react";
import { projects } from "../data/projects.js";
import { filterProjects } from "../lib/projects.js";
import { profile } from "../data/profile.js";
import ProjectCover from "./ProjectCover.jsx";
import ProjectDialog from "./ProjectDialog.jsx";
import ParkingDemo from "./ParkingDemo.jsx";
import TechIcon, { TechTags } from "./TechIcon.jsx";
const filters = [
  ["all", "TODOS"],
  ["android", "ANDROID"],
  ["web", "WEB"],
  ["ai", "IA / DATOS"],
  ["ux", "UX/UI"],
  ["game", "GAME DEV"],
  ["iot", "IoT / ARDUINO"],
  ["team", "EN EQUIPO"],
];
export default function Projects() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const filtered = useMemo(
    () => filterProjects(projects, category, query),
    [category, query],
  );
  return (
    <section className="projects section-paper" id="proyectos">
      <div className="chapter">
        <span>01 / PROYECTOS</span>
        <span>DESARROLLO · DISEÑO · INTERACCIÓN</span>
      </div>
      <div className="section-heading reveal">
        <h2>
          PROYECTOS
          <br />
          <span className="red">SELECCIONADOS.</span>
        </h2>
        <p>
          Qué problema aborda cada proyecto.
          <br />
          Qué decisiones lo sostienen.
          <br />Y cómo comprobar el resultado.
        </p>
      </div>
      <div className="project-toolbar">
        <div className="filters" role="group" aria-label="Filtrar proyectos">
          {filters.map(([id, label]) => (
            <button
              className={category === id ? "active" : ""}
              aria-pressed={category === id}
              key={id}
              onClick={() => setCategory(id)}
            >
              {label}
              {id === "all" && (
                <sup>{String(projects.length).padStart(2, "0")}</sup>
              )}
            </button>
          ))}
        </div>
        <label className="project-search">
          <Search size={17} />
          <span className="sr-only">Buscar proyectos o tecnologías</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Proyecto o tecnología…"
          />
          {query && (
            <button
              type="button"
              aria-label="Borrar búsqueda"
              onClick={() => setQuery("")}
            >
              <X size={15} />
            </button>
          )}
        </label>
      </div>
      <span className="project-count" role="status">
        {filtered.length} {filtered.length === 1 ? "proyecto" : "proyectos"} /
        explora cada caso
      </span>
      <div className="project-grid">
        {filtered.map((project) => {
          const content = (
            <>
              <ProjectCover id={project.id} />
              <div className="project-info">
                <div>
                  <span className="small-label">{project.label}</span>
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
                      ? "JUGAR AL PROTOTIPO"
                      : "VER CASO Y DECISIONES"}{" "}
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
              onClick={() => setSelected(project)}
              aria-label={`Ver proyecto ${project.title}`}
            >
              {content}
            </button>
          );
        })}
      </div>
      {filtered.length === 0 && (
        <div className="projects-empty">
          <Search size={30} />
          <h3>No encontré ese proyecto.</h3>
          <p>Prueba con Java, React o una disciplina diferente.</p>
          <button
            className="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
          >
            VER TODOS <ArrowUpRight size={17} />
          </button>
        </div>
      )}
      <ParkingDemo />
      <a
        className="all-repos"
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="inline-icon">
          <TechIcon name="GitHub" />
          MÁS CÓDIGO EN GITHUB
        </span>
        <span>@gpereyradev ↗</span>
      </a>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
