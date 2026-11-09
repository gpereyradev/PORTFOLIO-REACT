import { useLocale } from "../i18n/LocaleContext.jsx";
import { ArrowUpRight, CircleCheck, GitBranch, ListChecks, Target } from "lucide-react";

export default function CaseOverview({ study }) {
  const { t, language } = useLocale();
  return (
    <section className="case-overview" aria-label={t("Resumen del caso")}>
      <dl className="case-meta">
        <div><dt>{t("MI PARTICIPACIÓN")}</dt><dd>{study.role}</dd></div>
        <div><dt>{t("ESTADO")}</dt><dd>{study.status}</dd></div>
      </dl>
      <div className="case-brief">
        <article>
          <span className="case-label"><Target size={16} />{t("EL PROBLEMA")}</span>
          <p>{study.problem}</p>
        </article>
        <article>
          <span className="case-label"><GitBranch size={16} />{t("LA DECISIÓN CLAVE")}</span>
          <p>{study.decision}</p>
        </article>
      </div>
      <article className="case-outcome">
        <span className="case-label"><CircleCheck size={17} />{t("RESULTADO ACTUAL")}</span>
        <p>{study.outcome}</p>
      </article>
    </section>
  );
}

export function CaseReasoning({ study }) {
  const { t, language } = useLocale();
  return (
    <>
      <section className="case-reasoning" aria-label={t("Decisiones y criterios")}>
        <div className="case-section-title">
          <span>{t("01 / CRITERIO")}</span><h3>{t("Por qué está construido así.")}</h3>
        </div>
        {study.decisions.map((decision, index) => (
          <article className="case-decision" key={decision.title}>
            <span className="case-number">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h4>{decision.title}</h4>
              <p className="case-choice">{decision.choice}</p>
              <p><strong>{t("Por qué importa.")}</strong> {decision.reason}</p>
              <p className="case-tradeoff"><strong>{t("Qué implica.")}</strong> {decision.tradeoff}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="case-evidence" aria-label={t("Cómo comprobar el resultado")}>
        <div className="case-section-title">
          <span>{t("02 / EVIDENCIA")}</span><h3><ListChecks size={23} />{t("Cómo comprobarlo.")}</h3>
        </div>
        <ul>{study.checks.map(check => <li key={check}><CircleCheck size={15} /><span>{check}</span></li>)}</ul>
        {study.evidence && (
          <a href={study.evidence.href} target="_blank" rel="noopener noreferrer">
            {study.evidence.label}<ArrowUpRight size={16} />
          </a>
        )}
        <p className="case-scope"><strong>{t("Alcance.")}</strong> {study.limit}</p>
      </section>
    </>
  );
}
