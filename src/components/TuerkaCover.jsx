import { ArrowUpRight, CarFront, SlidersHorizontal } from "lucide-react";

export default function TuerkaCover() {
  return (
    <div className="tuerka-cover">
      <span className="cover-kicker">03 / WEB · CATÁLOGO DE VEHÍCULOS</span>
      <div className="tuerka-cover-heading">
        <h3>TUERK<span>A.</span></h3>
        <CarFront size={38} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <span className="tuerka-cover-purpose"><SlidersHorizontal size={13} aria-hidden="true" /> EXPLORAR · FILTRAR · ELEGIR</span>
      <div className="tuerka-cover-browser">
        <div><i /><i /><i /><span>TUERKA / WEB PUBLICADA</span></div>
        <img src="assets/tuerka-home.webp" alt="Portada real de Tuerka con su identidad negra y amarilla y un vehículo en la costa al atardecer" width="1343" height="566" loading="lazy" />
      </div>
      <span className="cover-note">CAPTURA REAL / INVENTARIO DE DEMOSTRACIÓN</span>
      <span className="cover-arrow"><ArrowUpRight size={21} /></span>
    </div>
  );
}
