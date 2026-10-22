import { useState } from "react";
import { CarFront, RotateCcw } from "lucide-react";
export default function ParkingDemo() {
  const [slots, setSlots] = useState([false, false]);
  const free = slots.filter((occupied) => !occupied).length;
  return (
    <div className="parking-lab reveal">
      <div className="parking-lab-copy">
        <span className="small-label">PARKSENSE / DEMO VISUAL INTERACTIVA</span>
        <h3>
          Así cambia la
          <br />
          disponibilidad.
        </h3>
        <p>
          Toca una plaza para alternar su estado y observa cómo cambia el
          acceso.
        </p>
        <button
          className="parking-reset"
          onClick={() => setSlots([false, false])}
        >
          REINICIAR ESTADOS <RotateCcw size={14} />
        </button>
      </div>
      <div className="parking-demo">
        <div className="parking-display">
          <span>PLAZAS DISPONIBLES</span>
          <strong aria-live="polite">{String(free).padStart(2, "0")}</strong>
          <span
            className={`parking-gate ${free ? "open" : ""}`}
            aria-label={
              free
                ? "Acceso disponible"
                : "Acceso cerrado: estacionamiento completo"
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
              aria-label={`Plaza ${i + 1} ${occupied ? "ocupada. Pulsa para liberar" : "libre. Pulsa para ocupar"}`}
              onClick={() =>
                setSlots((current) =>
                  current.map((value, index) => (index === i ? !value : value)),
                )
              }
            >
              <span>PLAZA 0{i + 1}</span>
              <b className="slot-car" aria-hidden="true">
                <CarFront size={38} />
              </b>
              <strong>{occupied ? "OCUPADA" : "LIBRE"}</strong>
              <i />
            </button>
          ))}
        </div>
        <p role="status">
          {free
            ? `Acceso disponible · ${free} ${free === 1 ? "plaza libre" : "plazas libres"}`
            : "Estacionamiento completo · Sin plazas libres"}
        </p>
      </div>
    </div>
  );
}
