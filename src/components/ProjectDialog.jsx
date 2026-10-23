import { ArrowUpRight, X } from "lucide-react";
import { useDialog } from "../hooks/useDialog.js";
import { TechTags } from "./TechIcon.jsx";
import CaseOverview, { CaseReasoning } from "./ProjectCaseStudy.jsx";
export default function ProjectDialog({ project, onClose }) {
  const { ref, close, onBackdropClick } = useDialog(Boolean(project), onClose);
  return (
    <dialog
      ref={ref}
      id="project-dialog"
      aria-labelledby="project-title"
      onClick={onBackdropClick}
    >
      <button
        className="dialog-close"
        onClick={close}
        aria-label="Cerrar proyecto"
      >
        <X />
      </button>
      {project && (
        <div id="dialog-content">
          <span className="dialog-eyebrow">{project.eyebrow}</span>
          <h2 className="dialog-title" id="project-title">
            {project.title}
            <span className="red">.</span>
          </h2>
          <p className="dialog-intro">{project.intro}</p>
          <ProjectLinks project={project} />
          {project.caseStudy && <CaseOverview study={project.caseStudy} />}
          {project.image && (
            <img
              className="project-detail-image"
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
            />
          )}
          {project.caseStudy && <CaseReasoning study={project.caseStudy} />}
          <details className="case-technical">
            <summary>Implementación y contexto técnico</summary>
            {project.details.map(([title, text]) => (
              <div className="dialog-detail" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </details>
          {project.gallery?.length > 0 && (
            <div className="project-detail-gallery">
              <h3>La experiencia en pantalla</h3>
              {project.gallery.map((image) => (
                <figure key={image.src}>
                  <img
                    className="project-detail-image"
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                  />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
          <TechTags items={project.tags} className="dialog-tags" />
          <p className="dialog-note">{project.note}</p>
        </div>
      )}
    </dialog>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.link && (
        <a className="button dialog-link" href={project.link} target="_blank" rel="noopener noreferrer">
          {project.linkText}<ArrowUpRight size={18} />
        </a>
      )}
      {project.links?.map(link => (
        <a className="button dialog-link secondary-project-link" href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}<ArrowUpRight size={18} />
        </a>
      ))}
    </div>
  );
}
