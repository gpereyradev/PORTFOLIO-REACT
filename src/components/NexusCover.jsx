import { ArrowUpRight, BrainCircuit, ChartNoAxesCombined } from "lucide-react";

export default function NexusCover() {
  return (
    <div className="nexus-cover">
      <div className="nexus-cover-copy">
        <span className="cover-kicker">
          01 / FULL STACK · INTELIGENCIA APLICADA
        </span>
        <span className="nexus-live">
          <i /> DEMO WEB DISPONIBLE
        </span>
        <h3>
          NEXUS
          <br />
          <span>AI.</span>
        </h3>
        <p>
          Ventas, inventario y clientes.
          <br />
          Datos que conectan el negocio.
        </p>
        <div className="nexus-capabilities">
          <span>
            <ChartNoAxesCombined size={12} /> GESTIÓN + ANALÍTICA
          </span>
          <span>
            <BrainCircuit size={12} /> PRONÓSTICOS CON PYTHON
          </span>
        </div>
      </div>
      <div className="nexus-browser">
        <div className="nexus-browser-bar">
          <i />
          <i />
          <i />
          <span>NEXUS AI / PANEL REAL DEL PRODUCTO</span>
        </div>
        <img
          src="assets/nexus-ai-dashboard.webp"
          alt="Panel real de NEXUS AI: gestión de ventas, stock e indicadores de la demostración"
          loading="lazy"
          width="1366"
          height="768"
        />
      </div>
      <span className="nexus-cover-note">
        CAPTURA REAL / DATOS FICTICIOS DE DEMOSTRACIÓN
      </span>
      <span className="cover-arrow">
        <ArrowUpRight size={24} />
      </span>
    </div>
  );
}
