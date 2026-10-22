import { useState } from "react";
import { ArrowDownToLine, ArrowUpRight, Award } from "lucide-react";
import { certificates } from "../data/certificates.js";
import { TechTags } from "./TechIcon.jsx";
const issuers = [
  ["all", "TODOS", "11"],
  ["google", "GOOGLE", "01"],
  ["oracle", "ORACLE", "04"],
  ["cisco", "CISCO", "06"],
];
export default function Certificates() {
  const [filter, setFilter] = useState("all");
  return (
    <section className="certificates" id="certificaciones">
      <div className="chapter">
        <span>04 / CERTIFICACIONES</span>
        <span>GOOGLE · ORACLE ACADEMY · CISCO</span>
      </div>
      <div className="section-heading reveal">
        <h2>
          FORMACIÓN
          <br />
          <span className="outline">CONTINUA.</span>
        </h2>
        <p>
          11 credenciales en diseño, programación,
          <br />
          bases de datos, redes y seguridad.
          <br />
          Documentos disponibles para consulta.
        </p>
      </div>
      <div
        className="cert-filters"
        role="group"
        aria-label="Filtrar certificados"
      >
        {issuers.map(([id, name, count]) => (
          <button
            key={id}
            className={filter === id ? "active" : ""}
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
          >
            {name}
            <sup>{count}</sup>
          </button>
        ))}
      </div>
      {(filter === "all" || filter === "google") && (
        <article className="google-credential">
          <div className="google-mark" aria-hidden="true">
            <span>G</span>
          </div>
          <div>
            <span className="small-label">GOOGLE / COURSERA</span>
            <h3>Google UX Design</h3>
            <p>
              Diseño centrado en las personas, investigación UX, accesibilidad,
              wireframes y prototipos de interfaces.
            </p>
            <TechTags
              items={["UX Research", "Figma", "Prototipado"]}
              className="google-tags"
            />
          </div>
          <a
            className="button lime-button"
            href="https://coursera.org/share/83d39358a87d63d7afdb1151eb1dd3ee"
            target="_blank"
            rel="noopener noreferrer"
          >
            VER CREDENCIAL <ArrowUpRight size={18} />
          </a>
        </article>
      )}
      <div className="certificate-grid">
        {certificates
          .filter((c) => filter === "all" || c.issuer === filter)
          .map((cert) => (
            <article className="certificate-card" key={cert.pdf}>
              <a
                className="certificate-image"
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir certificado ${cert.title}`}
              >
                <img
                  src={cert.image}
                  alt={`Certificado de ${cert.title} de Guillermo Pereyra`}
                  loading="lazy"
                />
                <span>VER DOCUMENTO ↗</span>
              </a>
              <div className="certificate-content">
                <span className="issuer-name">
                  <Award size={12} />
                  {cert.issuerName}
                </span>
                <h3>{cert.title}</h3>
                <div className="certificate-meta">
                  <time dateTime={cert.date}>{cert.dateText}</time>
                  <a
                    href={cert.pdf}
                    download
                    aria-label={`Descargar certificado ${cert.title}`}
                  >
                    PDF <ArrowDownToLine size={12} />
                  </a>
                </div>
              </div>
            </article>
          ))}
      </div>
      <p className="certificate-footnote">
        Las copias de Oracle reproducen fotografías de los certificados
        originales. Los documentos de Cisco se conservan en PDF. Google UX
        Design se presenta como una sola credencial.
      </p>
    </section>
  );
}
