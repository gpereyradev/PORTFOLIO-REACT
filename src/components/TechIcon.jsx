import {
  Accessibility,
  AppWindow,
  Blocks,
  Box,
  Braces,
  Bug,
  CircleCheck,
  Code2,
  Cpu,
  Database,
  FileCode2,
  FlaskConical,
  Gamepad2,
  GitBranch,
  Layers,
  LayoutDashboard,
  ListChecks,
  MonitorSmartphone,
  Network,
  Orbit,
  PenTool,
  Radio,
  Repeat2,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
  WandSparkles,
  Workflow,
  Wrench,
} from "lucide-react";

const brands = {
  Java: "java",
  Python: "python",
  JavaScript: "javascript",
  React: "react",
  SQL: "mysql",
  SQLite: "sqlite",
  Bootstrap: "bootstrap",
  HTML5: "html5",
  HTML: "html5",
  CSS3: "css3",
  CSS: "css3",
  Figma: "figma",
  Godot: "godot",
  Blender: "blender",
  Linux: "linux",
  Git: "git",
  GitHub: "github",
  Vite: "vitejs",
  Vercel: "vercel",
  "Android Studio": "androidstudio",
  "Android SDK": "androidstudio",
  "VS Code": "vscode",
};
const symbols = {
  "APIs REST": Server,
  Backend: Server,
  "Trabajo en equipo": Users,
  "En curso": Workflow,
  "UX/UI": PenTool,
  "Diseño UI": PenTool,
  "UX Research": Search,
  Wireframes: LayoutDashboard,
  Prototipado: Blocks,
  Accesibilidad: Accessibility,
  "Diseño responsive": MonitorSmartphone,
  "Prototipos 2D": Gamepad2,
  "Game loops": Repeat2,
  "Game loop": Repeat2,
  "Interfaces de juego": AppWindow,
  Colisiones: Box,
  "Modelado 3D": Box,
  "Diseño 2D": PenTool,
  VFX: WandSparkles,
  "Composición visual": Layers,
  Ciberseguridad: ShieldCheck,
  Redes: Network,
  Hardware: Cpu,
  "Análisis de malware": Bug,
  IoT: Radio,
  "GitHub Actions": Workflow,
  Gradle: Wrench,
  "Arduino Uno": Cpu,
  Tinkercad: Blocks,
  Sensores: Radio,
  Electrónica: Cpu,
  Canvas: Gamepad2,
  RecyclerView: ListChecks,
  "Material Components": Layers,
  ListView: ListChecks,
  "Reglas de negocio": Braces,
  "Pruebas unitarias": FlaskConical,
  Producto: LayoutDashboard,
  "Diseño UX": PenTool,
  Desarrollo: Code2,
  Diseño: PenTool,
  Videojuegos: Gamepad2,
  Visual: Sparkles,
  Sistemas: ShieldCheck,
  Herramientas: GitBranch,
  Datos: Database,
  Completado: CircleCheck,
};

export default function TechIcon({ name, className = "" }) {
  const brand = brands[name];
  if (brand)
    return (
      <img
        className={`tech-icon ${className}`}
        src={`assets/${brand}.svg`}
        alt=""
        loading="lazy"
        aria-hidden="true"
      />
    );
  const Icon = symbols[name] || FileCode2;
  return (
    <Icon
      className={`tech-icon ${className}`}
      size={18}
      strokeWidth={1.8}
      aria-hidden="true"
    />
  );
}
export function TechTags({ items, className = "project-tech" }) {
  return (
    <div className={className}>
      {items.map((name) => (
        <span key={name}>
          <TechIcon name={name} />
          {name}
        </span>
      ))}
    </div>
  );
}
