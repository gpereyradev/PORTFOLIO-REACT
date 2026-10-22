import { useEffect, useRef, useState } from "react";
import { Gamepad2, Pause, Play, RotateCcw } from "lucide-react";
import { createRunner } from "../lib/runner.js";
export default function Arcade() {
  const canvas = useRef(null),
    engine = useRef(null);
  const [game, setGame] = useState({ state: "idle", elapsed: 0, best: 0 });
  useEffect(() => {
    engine.current = createRunner(canvas.current, setGame);
    return () => engine.current?.dispose();
  }, []);
  const { state, elapsed, best } = game;
  const paused = state === "paused",
    won = state === "won",
    over = state === "over";
  const heading = paused
    ? ["EN", "PAUSA."]
    : won
      ? ["YOU", "WIN."]
      : over
        ? ["TRY", "AGAIN."]
        : ["PRESS", "START."];
  const announcement = paused
    ? "Partida en pausa."
    : won
      ? "¡Ganaste! Sobreviviste 30 segundos."
      : over
        ? `Fin de la partida. Sobreviviste ${elapsed.toFixed(1)} segundos.`
        : state === "running"
          ? "Partida iniciada. Salta con espacio, flecha arriba o tocando el juego."
          : "";
  return (
    <section className="arcade" id="arcade">
      <div className="chapter">
        <span>05 / LABORATORIO INTERACTIVO</span>
        <span>JAVASCRIPT / CANVAS</span>
      </div>
      <div className="arcade-layout">
        <div className="arcade-copy reveal">
          <span className="red small-label inline-icon">
            <Gamepad2 size={18} /> EXPERIMENTO JUGABLE
          </span>
          <h2>
            CRIMSON
            <br />
            <span className="outline">RUNNER.</span>
          </h2>
          <p>
            Esquiva los bloques rojos y sobrevive 30 segundos. El mundo acelera.
            Tú decides cuándo saltar.
          </p>
          <div className="game-instructions">
            <span>
              <kbd>ESPACIO</kbd> / <kbd>↑</kbd> SALTAR
            </span>
            <span>
              <kbd>TOCA</kbd> EN CELULAR
            </span>
          </div>
          <p className="game-note">
            JavaScript + Canvas · Colisiones · Partículas · Dificultad
            progresiva
          </p>
        </div>
        <div className="arcade-machine reveal">
          <div className="arcade-bar">
            <span>
              <i /> CRIMSON RUNNER
            </span>
            <span>
              HIGH <b>{best.toFixed(1)}</b>s
            </span>
          </div>
          <div className="canvas-wrap">
            <canvas
              ref={canvas}
              id="game"
              aria-label="Juego Crimson Runner. Usa espacio, flecha arriba o toca para saltar obstáculos. Pulsa P para pausar."
              tabIndex={0}
            />
            {state !== "running" && (
              <div className="game-overlay">
                <span>
                  {paused
                    ? "TÓMATE UN RESPIRO"
                    : won
                      ? "CAPÍTULO COMPLETADO"
                      : over
                        ? `SOBREVIVISTE ${elapsed.toFixed(1)} SEGUNDOS`
                        : "INSERT CURIOSITY"}
                </span>
                <h3>
                  {heading[0]}
                  <br />
                  <em>{heading[1]}</em>
                </h3>
                <button
                  className="button red-button"
                  onClick={() => engine.current.start()}
                >
                  {paused
                    ? "CONTINUAR"
                    : over || won
                      ? "OTRA PARTIDA"
                      : "INICIAR PARTIDA"}
                  {over || won ? <RotateCcw size={20} /> : <Play size={20} />}
                </button>
                <small>
                  {paused
                    ? "TU PARTIDA TE ESPERA."
                    : won
                      ? "BIEN JUGADO. AHORA, ¿CREAMOS ALGO?"
                      : over
                        ? "CADA INTENTO CUENTA."
                        : "30 SEGUNDOS PARA DEMOSTRARLO."}
                </small>
              </div>
            )}
          </div>
          <div className="arcade-bottom">
            <span>
              TIEMPO{" "}
              <b aria-live="off">{elapsed.toFixed(1).padStart(4, "0")}</b> / 30s
            </span>
            <button
              id="pause-game"
              disabled={!["running", "paused"].includes(state)}
              onClick={() => engine.current.togglePause()}
              aria-label={paused ? "Continuar partida" : "Pausar partida"}
            >
              {paused ? "SEGUIR" : "PAUSA"}
              {paused ? <Play size={12} /> : <Pause size={12} />}
            </button>
            <span>01 PLAYER</span>
          </div>
          <p className="sr-only" aria-live="polite">
            {announcement}
          </p>
        </div>
      </div>
    </section>
  );
}
