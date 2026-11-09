import { useLocale } from "../i18n/LocaleContext.jsx";
import { ArrowUpRight, BrainCircuit, ChartNoAxesCombined } from "lucide-react";

export default function NexusCover() {
  const { t, language } = useLocale();
  return (
    <div className="nexus-cover">
      <div className="nexus-cover-copy">
        <span className="cover-kicker">{t("FULL STACK · INTELIGENCIA APLICADA")}</span>
        <span className="nexus-live">
          <i />{t("DEMO WEB DISPONIBLE")}</span>
        <h3>
          NEXUS
          <br />
          <span>AI.</span>
        </h3>
        <p>{t("Ventas, inventario y clientes.")}<br />{t("Datos que conectan el negocio.")}</p>
        <div className="nexus-capabilities">
          <span>
            <ChartNoAxesCombined size={12} />{t("GESTIÓN + ANALÍTICA")}</span>
          <span>
            <BrainCircuit size={12} />{t("PRONÓSTICOS CON PYTHON")}</span>
        </div>
      </div>
      <div className="nexus-browser">
        <div className="nexus-browser-bar">
          <i />
          <i />
          <i />
          <span>{t("NEXUS AI / PANEL REAL DEL PRODUCTO")}</span>
        </div>
        <img
          src="assets/nexus-ai-dashboard.webp"
          alt={t("Panel real de NEXUS AI: gestión de ventas, stock e indicadores de la demostración")}
          loading="lazy"
          width="1366"
          height="768"
        />
      </div>
      <span className="nexus-cover-note">{t("CAPTURA REAL / DATOS FICTICIOS DE DEMOSTRACIÓN")}</span>
      <span className="cover-arrow">
        <ArrowUpRight size={24} />
      </span>
    </div>
  );
}
