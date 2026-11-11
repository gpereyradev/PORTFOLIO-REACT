import { useLocale } from "../i18n/LocaleContext.jsx";
import NexusCover from "./NexusCover.jsx";
import NeuroChessCover from "./NeuroChessCover.jsx";
import TuerkaCover from "./TuerkaCover.jsx";
import OperationsCover from "./OperationsCover.jsx";
export default function ProjectCover({ id }) {
  const { t, language } = useLocale();
  switch (id) {
    case "novasalud":
    case "inventra":
      return <OperationsCover id={id} />;
    case "nexus-ai":
      return <NexusCover />;
    case "neurochess":
      return <NeuroChessCover />;
    case "tuerka":
      return <TuerkaCover />;
    case "tarifa-clara":
      return (
        <div className="screenshot-cover tarifa-clara-cover">
          <img src="assets/tarifa-clara-portada.webp" alt="" loading="lazy" width="1140" height="489" />
          <span>{t("CAPTURA REAL / WEB PUBLICADA")}</span>
        </div>
      );
    case "fitcoach":
      return (
        <div className="fitcoach-cover">
          <div className="fitcoach-cover-copy">
            <span className="cover-kicker">
              {t("PROYECTO DE MI EMPRESA")}
            </span>
            <span className="in-progress">
              <i></i>
              {t(" EN DESARROLLO")}
            </span>
            <h3>
              {"FIT"}
              <br />
              <span>{"COACH."}</span>
            </h3>
            <p>
              {t("Backend, diseño de producto")}
              <br />
              {t("y colaboración en equipo.")}
            </p>
            <div className="fitcoach-tags">
              <span>{"BACKEND"}</span>
              <span>{"FIGMA"}</span>
              <span>{t("PRODUCTO")}</span>
            </div>
          </div>
          <div className="fitcoach-browser">
            <div className="fitcoach-browser-bar">
              <i></i>
              <i></i>
              <i></i>
              <span>{t("FITCOACH / DISEÑO ORIGINAL")}</span>
            </div>
            <img
              src="assets/fitcoach-dashboard.webp"
              alt={t("Dashboard de FitCoach capturado desde su diseño en Figma")}
              loading="lazy"
            />
          </div>
          <span className="cover-arrow">{"↗"}</span>
        </div>
      );
    case "doit":
      return (
        <div className="cover doit-cover">
          <span className="cover-kicker">
            {t("ANDROID · TRABAJO EN EQUIPO")}
          </span>
          <div className="cover-word">
            {"doit"}
            <span>{"✓"}</span>
          </div>
          <div className="doit-board">
            <div className="doit-top">
              {t("Tus tareas ")}
              <b>{"+"}</b>
            </div>
            <div className="doit-task">
              <i>{"✓"}</i>
              <span>
                {t("Validar fechas")}
                <small>{t("REGLAS DE NEGOCIO")}</small>
              </span>
              <b>{t("COMPLETADA")}</b>
            </div>
            <div className="doit-task">
              <i>{"◷"}</i>
              <span>
                {t("Organizar pendientes")}
                <small>{t("GESTIÓN DE ESTADOS")}</small>
              </span>
              <b>{t("EN PROGRESO")}</b>
            </div>
            <div className="doit-task">
              <i>{"○"}</i>
              <span>
                {t("Preparar entrega")}
                <small>{t("PLANIFICACIÓN")}</small>
              </span>
              <b>{t("PENDIENTE")}</b>
            </div>
            <div className="doit-bottom">
              {t("MI APORTE / VALIDACIONES + FECHAS + TESTS")}
            </div>
          </div>
          <span className="cover-note">
            {t("PORTADA ILUSTRATIVA DEL PROYECTO")}
          </span>
          <span className="cover-arrow">{"↗"}</span>
        </div>
      );
    case "parksense":
      return (
        <div className="cover park-cover">
          <span className="cover-kicker">{"ARDUINO · TINKERCAD"}</span>
          <div className="park-cover-title">
            <h3>
              {"ParkSense"}
              <span>{"↗"}</span>
            </h3>
            <p>{t("SENSORES / ESTACIONAMIENTO INTELIGENTE")}</p>
          </div>
          <img
            src="assets/parksense-circuito.webp"
            alt={t("Circuito real del sistema de parqueo simulado en Tinkercad")}
            loading="lazy"
          />
          <span className="cover-note">{t("CIRCUITO ORIGINAL DEL PROYECTO")}</span>
          <span className="cover-arrow">{"↗"}</span>
        </div>
      );
    case "ecolim":
      return (
        <div className="cover ecolim-cover">
          <span className="cover-kicker">{"JAVA + SQLITE"}</span>
          <div className="cover-word">
            {"ECO"}
            <br />
            {"LIM"}
            <span>{"↗"}</span>
          </div>
          <div className="cover-phone">
            <div className="phone-speaker"></div>
            <small>{"ECOLIM PREMIUM"}</small>
            <h4>
              {t("Panel de")}
              <br />
              {t("Control")}
            </h4>
            <p>{t("¿Qué deseas hacer hoy?")}</p>
            <div className="phone-option">
              <i>{"+"}</i>
              {t(" Registrar residuos")}
            </div>
            <div className="phone-option">
              <i>{"≡"}</i>
              {t(" Ver historial")}
            </div>
            <div className="phone-option">
              <i>{"↗"}</i>
              {t(" Generar reportes")}
            </div>
            <span className="phone-home"></span>
          </div>
          <span className="cover-note">
            {t("RECREACIÓN VISUAL DE LA INTERFAZ")}
          </span>
          <span className="cover-arrow">{"↗"}</span>
        </div>
      );
    case "proforma":
      return (
        <div className="cover proforma-cover">
          <span className="cover-kicker">{"ANDROID + MATERIAL"}</span>
          <div className="cover-word">
            {"APP"}
            <br />
            {"PROFORMA"}
          </div>
          <div className="code-window">
            <div className="code-window-top">
              <i></i>
              <i></i>
              <i></i>
              <span>{"MainActivity.java"}</span>
            </div>
            <code>
              <span className="syntax-purple">{"private void"}</span>{" "}
              <span className="syntax-green">{"calcularTotal"}</span>
              {"() {"}
              <br />
              {"  "}
              <span className="syntax-purple">{"double"}</span>
              {" precio;"}
              <br />
              {"  "}
              <span className="syntax-purple">{"int"}</span>
              {" cantidad;"}
              <br />
              <br />
              {"  total = precio * cantidad;"}
              <br />
              {"  "}
              <span className="syntax-green">{"actualizarTotalAcumulado"}</span>
              {"();"}
              <br />
              {"}"}
            </code>
            <div className="code-footer">
              {"JAVA "}
              <span>{t("● CRUD + VALIDACIONES")}</span>
            </div>
          </div>
          <span className="cover-note">{t("LÓGICA DE PRODUCTOS Y TOTALES")}</span>
          <span className="cover-arrow">{"↗"}</span>
        </div>
      );
    case "mantenimiento":
      return (
        <div className="cover maintenance-cover">
          <span className="cover-kicker">{"JAVA + GITHUB ACTIONS"}</span>
          <div className="cover-word">
            {"PEOPLE"}
            <br />
            {"& DATA."}
          </div>
          <div className="employee-pass">
            <div className="pass-top">
              {t("REGISTRO DE EMPLEADOS ")}
              <b>{"↗"}</b>
            </div>
            <div className="pass-profile">
              <div className="pass-avatar">{"GP"}</div>
              <div>
                <small>{"APP MANTENIMIENTO"}</small>
                <strong>{t("Datos consistentes.")}</strong>
                <span>{t("VALIDACIONES / ANDROID")}</span>
              </div>
            </div>
            <div className="pass-field">
              {"DNI "}
              <b>{t("8 dígitos")}</b>
              <i>{"✓"}</i>
            </div>
            <div className="pass-field">
              {t("Sueldo ")}
              <b>{t("Mayor que 0")}</b>
              <i>{"✓"}</i>
            </div>
            <div className="pass-bottom">
              {"LISTVIEW "}
              <span>{"JAVA / GRADLE"}</span>
            </div>
          </div>
          <span className="cover-note">
            {t("REGISTRO / VALIDACIÓN / LISTADO")}
          </span>
          <span className="cover-arrow">{"↗"}</span>
        </div>
      );
    case "app-escuela":
      return (
        <div className="cover school-cover">
          <span className="cover-kicker">{"REACT + VITE"}</span>
          <div className="cover-word">
            {"CAMPUS"}
            <br />
            {"CONNECT."}
          </div>
          <div className="school-window">
            <div className="school-bar">
              <span>{"● ● ●"}</span>
              <b>{t("Directorio de alumnos")}</b>
              <i>{"↗"}</i>
            </div>
            <div className="school-cards">
              <div>
                <i>{"DP"}</i>
                <b>{t("Desarrollo de Software")}</b>
                <span>{t("Matriculado")}</span>
              </div>
              <div>
                <i>{"MP"}</i>
                <b>{t("Diseño Gráfico")}</b>
                <span className="inactive">{t("Inactivo")}</span>
              </div>
              <div>
                <i>{"CM"}</i>
                <b>{t("Administración")}</b>
                <span>{t("Matriculado")}</span>
              </div>
            </div>
            <div className="school-code">
              {"<AlumnoCard /> "}
              <span>{"useState()"}</span>
            </div>
          </div>
          <span className="cover-note">{"COMPONENTES / PROPS / ESTADO"}</span>
          <span className="cover-arrow">{"↗"}</span>
        </div>
      );
    case "portfolio":
      return <div className="screenshot-cover"><img src="assets/portfolio-desktop.webp" alt={t("Captura real de la portada del portfolio publicado de Guillermo Pereyra")} loading="lazy"/><span>{t("CAPTURA REAL / WEB PUBLICADA")}</span></div>;
    case "runner":
      return (
        <div className="cover runner-cover">
          <span className="cover-kicker">{"JAVASCRIPT + CANVAS"}</span>
          <div className="cover-word">
            {"CRIMSON"}
            <br />
            {"RUNNER."}
          </div>
          <div className="runner-scene">
            <div className="runner-sun"></div>
            <div className="runner-building b1"></div>
            <div className="runner-building b2"></div>
            <div className="runner-building b3"></div>
            <div className="pixel-hero"></div>
            <div className="runner-block"></div>
            <span>{"PRESS START →"}</span>
          </div>
          <span className="cover-note">{t("PROTOTIPO ORIGINAL JUGABLE")}</span>
          <span className="cover-arrow">{"▶"}</span>
        </div>
      );
    default:
      return null;
  }
}
