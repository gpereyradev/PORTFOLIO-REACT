import { useLocale } from "../i18n/LocaleContext.jsx";
import { ArrowUpRight, BrainCircuit, GitBranch } from "lucide-react";

export default function NeuroChessCover() {
  const { t, language } = useLocale();
  return (
    <div className="neurochess-cover">
      <span className="cover-kicker">{t("GAME DEV · IA EN PYTHON")}</span>
      <div className="neurochess-heading">
        <h3>NEURO<span>CHESS.</span></h3>
        <BrainCircuit size={36} strokeWidth={1.4} aria-hidden="true" />
      </div>
      <span className="neurochess-engine">
        <GitBranch size={13} aria-hidden="true" />{t("MINIMAX + PODA ALFA-BETA")}</span>
      <div className="neurochess-screen">
        <img
          src="assets/neurochess-desktop.webp"
          alt={t("Interfaz real de NeuroChess, con tablero de ajedrez, piezas SVG y controles de partida")}
          width="1116"
          height="936"
          loading="lazy"
        />
      </div>
      <span className="cover-note">{t("MOTOR PROPIO / DEMO WEB JUGABLE")}</span>
      <span className="cover-arrow"><ArrowUpRight size={20} /></span>
    </div>
  );
}
