import { ArrowUpRight, CircleCheck, GitBranch, ListChecks, Target } from "lucide-react";

export default function CaseOverview({ study }) {
  return (
    <section className="case-overview" aria-label="Resumen del caso">
      <dl className="case-meta">
        <div><dt>MI PARTICIPACIÓN</dt><dd>{study.role}</dd></div>
        <div><dt>ESTADO</dt><dd>{study.status}</dd></div>
      </dl>
      <div className="case-brief">
        <article>
          <span className="case-label"><Target size={16} /> EL PROBLEMA</span>
          <p>{study.problem}</p>
        </article>
        <article>
          <span className="case-label"><GitBranch size={16} /> LA DECISIÓN CLAVE</span>
          <p>{study.decision}</p>
        </article>
      </div>
      <article className="case-outcome">
        <span className="case-label"><CircleCheck size={17} /> RESULTADO ACTUAL</span>
        <p>{study.outcome}</p>
      </article>
    </section>
  );
}

export function CaseReasoning({ study }) {
  return (
    <>
      <section className="case-reasoning" aria-label="Decisiones y criterios">
        <div className="case-section-title">
          <span>01 / CRITERIO</span><h3>Por qué está construido así.</h3>
        </div>
        {study.decisions.map((decision, index) => (
          <article className="case-decision" key={decision.title}>
            <span className="case-number">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h4>{decision.title}</h4>
              <p className="case-choice">{decision.choice}</p>
              <p><strong>Por qué importa.</strong> {decision.reason}</p>
              <p className="case-tradeoff"><strong>Qué implica.</strong> {decision.tradeoff}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="case-evidence" aria-label="Cómo comprobar el resultado">
        <div className="case-section-title">
          <span>02 / EVIDENCIA</span><h3><ListChecks size={23} /> Cómo comprobarlo.</h3>
        </div>
        <ul>{study.checks.map(check => <li key={check}><CircleCheck size={15} /><span>{check}</span></li>)}</ul>
        {study.evidence && (
          <a href={study.evidence.href} target="_blank" rel="noopener noreferrer">
            {study.evidence.label}<ArrowUpRight size={16} />
          </a>
        )}
        <p className="case-scope"><strong>Alcance.</strong> {study.limit}</p>
      </section>
    </>
  );
}
