import { useLocale } from "../i18n/LocaleContext.jsx";
import { ArrowUpRight } from "lucide-react";

const covers = {
  novasalud: {
    name: "NovaSalud",
    purpose: "Cada caja. Cada lote. Bajo control.",
    image: "assets/novasalud-dashboard.webp",
    alt: "Panel de NovaSalud con datos ficticios de demostración local",
  },
  inventra: {
    name: "Inventra",
    purpose: "Un lugar. Todo tu inventario.",
    image: "assets/inventra-dashboard.webp",
    alt: "Resumen de Inventra con datos ficticios de demostración local",
  },
};

export default function OperationsCover({ id }) {
  const { t, language } = useLocale();
  const cover = covers[id];
  return (
    <div className={`operations-cover operations-cover-${id}`}>
      <div className="operations-cover-heading">
        <h3>{cover.name}</h3>
        <ArrowUpRight size={34} aria-hidden="true" />
      </div>
      <p>{t(cover.purpose)}</p>
      <img src={cover.image} alt={t(cover.alt)} loading="lazy" width="1363" height="936" />
      <span className="operations-cover-caption">{t("Frontend original · Demostración local")}</span>
    </div>
  );
}
