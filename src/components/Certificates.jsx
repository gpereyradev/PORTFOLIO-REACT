import { ArrowDownToLine, ArrowUpRight, Award, ChevronDown } from 'lucide-react';
import { certificates } from '../data/certificates.js';
import { useLocale } from '../i18n/LocaleContext.jsx';
export default function Certificates() {
  const { language, t } = useLocale();
  return (
    <section className="certificates" id="certificaciones">
      <div className="chapter"><span>{t('04 / CERTIFICACIONES')}</span><span>GOOGLE · ORACLE ACADEMY · CISCO</span></div>
      <div className="section-heading reveal"><h2>{t('FORMACIÓN')}<br /><span className="outline">{t('CONTINUA.')}</span></h2><p>{t('11 credenciales, agrupadas por institución.')}</p></div>
      <div className="credential-groups">
        <article className="credential-group credential-google">
          <div className="credential-heading"><span className="credential-logo" aria-hidden="true">G</span><div><h3>Google / Coursera</h3><p>{t('Diseño de experiencias')}</p></div><span className="credential-count">1</span></div>
          <div className="credential-row"><div><h4>Google UX Design</h4><p>{t('Diseño centrado en las personas, investigación UX, accesibilidad, wireframes y prototipos de interfaces.')}</p></div><a href="https://coursera.org/share/83d39358a87d63d7afdb1151eb1dd3ee" target="_blank" rel="noopener noreferrer">{t('VER CREDENCIAL')}<ArrowUpRight size={17}/></a></div>
        </article>
        {['oracle','cisco'].map(issuer => <details className="credential-group" key={issuer}>
          <summary><div className="credential-heading"><span className="credential-logo" aria-hidden="true"><Award size={28}/></span><div><h3>{issuer === 'oracle' ? 'Oracle Academy' : 'Cisco Networking Academy'}</h3><p>{t(issuer === 'oracle' ? 'Programación y bases de datos' : 'Python, datos, redes y seguridad')}</p></div><span className="credential-count">{issuer === 'oracle' ? '4' : '6'}</span><ChevronDown className="credential-chevron" size={21}/></div><span className="credential-summary-action">{t('Ver certificados')}</span></summary>
          <div className="credential-list">{certificates.filter(cert => cert.issuer === issuer).map(cert => <article className="credential-row" key={cert.pdf}>
            <a className="credential-thumb" href={cert.pdf} target="_blank" rel="noopener noreferrer" aria-label={`${t('Abrir certificado')} ${t(cert.title)}`}><img src={cert.image} alt="" loading="lazy"/></a>
            <div className="credential-info"><h4><a href={cert.pdf} target="_blank" rel="noopener noreferrer">{t(cert.title)}<ArrowUpRight size={15}/></a></h4><time dateTime={cert.date}>{new Intl.DateTimeFormat(language === 'en' ? 'en-US' : 'es-PE', {day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(`${cert.date}T12:00:00Z`))}</time></div>
            <a className="credential-download" href={cert.pdf} download aria-label={`${t('Descargar certificado')} ${t(cert.title)}`}>PDF <ArrowDownToLine size={16}/></a>
          </article>)}</div>
        </details>)}
      </div>
    </section>
  );
}
