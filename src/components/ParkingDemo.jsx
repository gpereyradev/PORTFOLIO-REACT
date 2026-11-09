import { useLocale } from "../i18n/LocaleContext.jsx";
import { useState } from "react";
import { CarFront, RotateCcw } from "lucide-react";
export default function ParkingDemo() {
  const { t, language } = useLocale();
  const [slots, setSlots] = useState([false, false]);
  const free = slots.filter((occupied) => !occupied).length;
  return (
    <div className="parking-lab reveal">
      <div className="parking-lab-copy">
        <span className="small-label">{t("PARKSENSE / DEMO VISUAL INTERACTIVA")}</span>
        <h3>{t("Así cambia la")}<br />{t("disponibilidad.")}</h3>
        <p>{t("Toca una plaza para alternar su estado y observa cómo cambia el acceso.")}</p>
        <button
          className="parking-reset"
          onClick={() => setSlots([false, false])}
        >{t("REINICIAR ESTADOS")}<RotateCcw size={14} />
        </button>
      </div>
      <div className="parking-demo">
        <div className="parking-display">
          <span>{t("PLAZAS DISPONIBLES")}</span>
          <strong aria-live="polite">{String(free).padStart(2, "0")}</strong>
          <span
            className={`parking-gate ${free ? "open" : ""}`}
            aria-label={
              free
                ? t("Acceso disponible")
                : t("Acceso cerrado: estacionamiento completo")
            }
          >
            <i />
          </span>
        </div>
        <div className="parking-slots">
          {slots.map((occupied, i) => (
            <button
              key={i}
              className={`parking-slot ${occupied ? "occupied" : ""}`}
              aria-pressed={occupied}
              aria-label={`${language === "en" ? "Space" : "Plaza"} ${i + 1} ${occupied ? t("ocupada. Pulsa para liberar") : t("libre. Pulsa para ocupar")}`}
              onClick={() =>
                setSlots((current) =>
                  current.map((value, index) => (index === i ? !value : value)),
                )
              }
            >
              <span>{t("PLAZA 0")}{i + 1}</span>
              <b className="slot-car" aria-hidden="true">
                <CarFront size={38} />
              </b>
              <strong>{occupied ? t("OCUPADA") : t("LIBRE")}</strong>
              <i />
            </button>
          ))}
        </div>
        <p role="status">
          {free
            ? `${t("Acceso disponible")} · ${free} ${free === 1 ? t("plaza libre") : t("plazas libres")}`
            : t("Estacionamiento completo · Sin plazas libres")}
        </p>
      </div>
    </div>
  );
}
