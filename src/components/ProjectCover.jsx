export default function ProjectCover({ id }) {
  switch (id) {
    case "fitcoach":
      return (
        <div className="fitcoach-cover">
          <div className="fitcoach-cover-copy">
            <span className="cover-kicker">
              {"01 / PROYECTO DE MI EMPRESA"}
            </span>
            <span className="in-progress">
              <i></i>
              {" EN DESARROLLO"}
            </span>
            <h3>
              {"FIT"}
              <br />
              <span>{"COACH."}</span>
            </h3>
            <p>
              {"Backend, diseño de producto"}
              <br />
              {"y colaboración en equipo."}
            </p>
            <div className="fitcoach-tags">
              <span>{"BACKEND"}</span>
              <span>{"FIGMA"}</span>
              <span>{"PRODUCTO"}</span>
            </div>
          </div>
          <div className="fitcoach-browser">
            <div className="fitcoach-browser-bar">
              <i></i>
              <i></i>
              <i></i>
              <span>{"FITCOACH / DISEÑO ORIGINAL"}</span>
            </div>
            <img
              src="assets/fitcoach-dashboard.webp"
              alt="Dashboard de FitCoach capturado desde su diseño en Figma"
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
            {"02 / ANDROID · TRABAJO EN EQUIPO"}
          </span>
          <div className="cover-word">
            {"doit"}
            <span>{"✓"}</span>
          </div>
          <div className="doit-board">
            <div className="doit-top">
              {"Tus tareas "}
              <b>{"+"}</b>
            </div>
            <div className="doit-task">
              <i>{"✓"}</i>
              <span>
                {"Validar fechas"}
                <small>{"REGLAS DE NEGOCIO"}</small>
              </span>
              <b>{"COMPLETADA"}</b>
            </div>
            <div className="doit-task">
              <i>{"◷"}</i>
              <span>
                {"Organizar pendientes"}
                <small>{"GESTIÓN DE ESTADOS"}</small>
              </span>
              <b>{"EN PROGRESO"}</b>
            </div>
            <div className="doit-task">
              <i>{"○"}</i>
              <span>
                {"Preparar entrega"}
                <small>{"PLANIFICACIÓN"}</small>
              </span>
              <b>{"PENDIENTE"}</b>
            </div>
            <div className="doit-bottom">
              {"MI APORTE / VALIDACIONES + FECHAS + TESTS"}
            </div>
          </div>
          <span className="cover-note">
            {"PORTADA ILUSTRATIVA DEL PROYECTO"}
          </span>
          <span className="cover-arrow">{"↗"}</span>
        </div>
      );
    case "parksense":
      return (
        <div className="cover park-cover">
          <span className="cover-kicker">{"03 / ARDUINO · TINKERCAD"}</span>
          <div className="park-cover-title">
            <h3>
              {"ParkSense"}
              <span>{"↗"}</span>
            </h3>
            <p>{"SENSORES / ESTACIONAMIENTO INTELIGENTE"}</p>
          </div>
          <img
            src="assets/parksense-circuito.webp"
            alt="Circuito real del sistema de parqueo simulado en Tinkercad"
            loading="lazy"
          />
          <span className="cover-note">{"CIRCUITO ORIGINAL DEL PROYECTO"}</span>
          <span className="cover-arrow">{"↗"}</span>
        </div>
      );
    case "ecolim":
      return (
        <div className="cover ecolim-cover">
          <span className="cover-kicker">{"04 / JAVA + SQLITE"}</span>
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
              {"Panel de"}
              <br />
              {"Control"}
            </h4>
            <p>{"¿Qué deseas hacer hoy?"}</p>
            <div className="phone-option">
              <i>{"+"}</i>
              {" Registrar residuos"}
            </div>
            <div className="phone-option">
              <i>{"≡"}</i>
              {" Ver historial"}
            </div>
            <div className="phone-option">
              <i>{"↗"}</i>
              {" Generar reportes"}
            </div>
            <span className="phone-home"></span>
          </div>
          <span className="cover-note">
            {"RECREACIÓN VISUAL DE LA INTERFAZ"}
          </span>
          <span className="cover-arrow">{"↗"}</span>
        </div>
      );
    case "proforma":
      return (
        <div className="cover proforma-cover">
          <span className="cover-kicker">{"05 / ANDROID + MATERIAL"}</span>
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
              <span>{"● CRUD + VALIDACIONES"}</span>
            </div>
          </div>
          <span className="cover-note">{"LÓGICA DE PRODUCTOS Y TOTALES"}</span>
          <span className="cover-arrow">{"↗"}</span>
        </div>
      );
    case "mantenimiento":
      return (
        <div className="cover maintenance-cover">
          <span className="cover-kicker">{"06 / JAVA + GITHUB ACTIONS"}</span>
          <div className="cover-word">
            {"PEOPLE"}
            <br />
            {"& DATA."}
          </div>
          <div className="employee-pass">
            <div className="pass-top">
              {"REGISTRO DE EMPLEADOS "}
              <b>{"↗"}</b>
            </div>
            <div className="pass-profile">
              <div className="pass-avatar">{"GP"}</div>
              <div>
                <small>{"APP MANTENIMIENTO"}</small>
                <strong>{"Datos consistentes."}</strong>
                <span>{"VALIDACIONES / ANDROID"}</span>
              </div>
            </div>
            <div className="pass-field">
              {"DNI "}
              <b>{"8 dígitos"}</b>
              <i>{"✓"}</i>
            </div>
            <div className="pass-field">
              {"Sueldo "}
              <b>{"Mayor que 0"}</b>
              <i>{"✓"}</i>
            </div>
            <div className="pass-bottom">
              {"LISTVIEW "}
              <span>{"JAVA / GRADLE"}</span>
            </div>
          </div>
          <span className="cover-note">
            {"REGISTRO / VALIDACIÓN / LISTADO"}
          </span>
          <span className="cover-arrow">{"↗"}</span>
        </div>
      );
    case "app-escuela":
      return (
        <div className="cover school-cover">
          <span className="cover-kicker">{"07 / REACT + VITE"}</span>
          <div className="cover-word">
            {"CAMPUS"}
            <br />
            {"CONNECT."}
          </div>
          <div className="school-window">
            <div className="school-bar">
              <span>{"● ● ●"}</span>
              <b>{"Directorio de alumnos"}</b>
              <i>{"↗"}</i>
            </div>
            <div className="school-cards">
              <div>
                <i>{"DP"}</i>
                <b>{"Desarrollo de Software"}</b>
                <span>{"Matriculado"}</span>
              </div>
              <div>
                <i>{"MP"}</i>
                <b>{"Diseño Gráfico"}</b>
                <span className="inactive">{"Inactivo"}</span>
              </div>
              <div>
                <i>{"CM"}</i>
                <b>{"Administración"}</b>
                <span>{"Matriculado"}</span>
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
      return (
        <div className="cover ux-cover">
          <span className="cover-kicker">{"08 / DISEÑO UX/UI + FRONTEND"}</span>
          <div className="cover-word">
            {"DESIGN"}
            <br />
            {"SYSTEM."}
          </div>
          <div className="ux-board">
            <div className="ux-title">
              {"GP "}
              <span>{"PORTFOLIO / UI"}</span>
            </div>
            <div className="ux-swatches">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="ux-types">
              {"Aa "}
              <span>
                {"Diseño."}
                <br />
                {"Código."}
                <br />
                {"Interacción."}
              </span>
            </div>
            <div className="ux-controls">
              <span>{"PROYECTOS ↗"}</span>
              <b>{"→"}</b>
              <i>{"✳"}</i>
            </div>
          </div>
          <span className="cover-note">
            {"IDENTIDAD / JERARQUÍA / RESPONSIVE"}
          </span>
          <span className="cover-arrow">{"↗"}</span>
        </div>
      );
    case "runner":
      return (
        <div className="cover runner-cover">
          <span className="cover-kicker">{"09 / JAVASCRIPT + CANVAS"}</span>
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
          <span className="cover-note">{"PROTOTIPO ORIGINAL JUGABLE"}</span>
          <span className="cover-arrow">{"▶"}</span>
        </div>
      );
    default:
      return null;
  }
}
