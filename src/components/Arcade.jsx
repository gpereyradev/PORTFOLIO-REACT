import { useLocale } from "../i18n/LocaleContext.jsx";
import { useEffect, useRef, useState } from "react";
import { Gamepad2, Pause, Play, RotateCcw } from "lucide-react";
import { createRunner } from "../lib/runner.js";
export default function Arcade() {
  const { t, language } = useLocale();
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
    ? t("Partida en pausa.")
    : won
      ? t("¡Ganaste! Sobreviviste 30 segundos.")
      : over
        ? (language === "en" ? `Game over. You survived ${elapsed.toFixed(1)} seconds.` : `Fin de la partida. Sobreviviste ${elapsed.toFixed(1)} segundos.`)
        : state === "running"
          ? t("Partida iniciada. Salta con espacio, flecha arriba o tocando el juego.")
          : "";
  return (
    <section className="arcade" id="arcade">
      <div className="chapter">
        <span>{t("05 / LABORATORIO INTERACTIVO")}</span>
        <span>JAVASCRIPT / CANVAS</span>
      </div>
      <div className="arcade-layout">
        <div className="arcade-copy reveal">
          <span className="red small-label inline-icon">
            <Gamepad2 size={18} />{t("EXPERIMENTO JUGABLE")}</span>
          <h2>
            CRIMSON
            <br />
            <span className="outline">RUNNER.</span>
          </h2>
          <p>{t("Esquiva los bloques rojos y sobrevive 30 segundos. El mundo acelera. Tú decides cuándo saltar.")}</p>
          <div className="game-instructions">
            <span>
              <kbd>{t("ESPACIO")}</kbd> / <kbd>↑</kbd>{t("SALTAR")}</span>
            <span>
              <kbd>{t("TOCA")}</kbd>{t("EN CELULAR")}</span>
          </div>
          <p className="game-note">{t("JavaScript + Canvas · Colisiones · Partículas · Dificultad progresiva")}</p>
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
              aria-label={t("Juego Crimson Runner. Usa espacio, flecha arriba o toca para saltar obstáculos. Pulsa P para pausar.")}
              tabIndex={0}
            />
            {state !== "running" && (
              <div className="game-overlay">
                <span>
                  {paused
                    ? t("TÓMATE UN RESPIRO")
                    : won
                      ? t("CAPÍTULO COMPLETADO")
                      : over
                        ? (language === "en" ? `YOU SURVIVED ${elapsed.toFixed(1)} SECONDS` : `SOBREVIVISTE ${elapsed.toFixed(1)} SEGUNDOS`)
                        : "INSERT CURIOSITY"}
                </span>
                <h3>
                  {t(heading[0])}
                  <br />
                  <em>{t(heading[1])}</em>
                </h3>
                <button
                  className="button red-button"
                  onClick={() => engine.current.start()}
                >
                  {paused
                    ? t("CONTINUAR")
                    : over || won
                      ? t("OTRA PARTIDA")
                      : t("INICIAR PARTIDA")}
                  {over || won ? <RotateCcw size={20} /> : <Play size={20} />}
                </button>
                <small>
                  {paused
                    ? t("TU PARTIDA TE ESPERA.")
                    : won
                      ? t("BIEN JUGADO. AHORA, ¿CREAMOS ALGO?")
                      : over
                        ? t("CADA INTENTO CUENTA.")
                        : t("30 SEGUNDOS PARA DEMOSTRARLO.")}
                </small>
              </div>
            )}
          </div>
          <div className="arcade-bottom">
            <span>{t("TIEMPO")}{" "}
              <b aria-live="off">{elapsed.toFixed(1).padStart(4, "0")}</b> / 30s
            </span>
            <button
              id="pause-game"
              disabled={!["running", "paused"].includes(state)}
              onClick={() => engine.current.togglePause()}
              aria-label={paused ? t("Continuar partida") : t("Pausar partida")}
            >
              {paused ? t("SEGUIR") : t("PAUSA")}
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
