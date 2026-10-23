import { caseStudies } from "./caseStudies.js";

const catalog = [
  {
    id: "nexus-ai",
    title: "NEXUS AI",
    eyebrow: "01 / FULL STACK · GESTIÓN + INTELIGENCIA APLICADA",
    categories: ["web", "ux", "ai"],
    label: "FULL STACK / ANALÍTICA Y PRODUCTO",
    summary:
      "Plataforma de gestión empresarial que conecta ventas, inventario y clientes con analítica y pronósticos. React y TypeScript, backend Java, PostgreSQL y un servicio Python, con una demo web disponible.",
    intro:
      "NEXUS AI conecta la operación de un negocio con la información necesaria para entenderlo: ventas, existencias, clientes, reportes y pronósticos. Es mi proyecto personal para integrar desarrollo frontend, backend, bases de datos y aprendizaje automático dentro de un producto funcional.",
    details: [
      [
        "Un negocio, un mismo espacio",
        "El panel reúne ventas del período, ticket promedio y productos con stock bajo, con accesos rápidos para vender, revisar inventario y consultar análisis. La interfaz incluye temas claro y oscuro, filtros, búsqueda, paginación y adaptación a celulares.",
      ],
      [
        "Arquitectura full stack",
        "React y TypeScript construyen la experiencia web. La API principal utiliza Java con Spring Boot y PostgreSQL para usuarios, catálogos, movimientos y ventas; un servicio Python con FastAPI recibe agregados autorizados para ejecutar la analítica.",
      ],
      [
        "Operaciones y consistencia",
        "Las ventas comprueban existencias y toman los precios del servidor dentro de una transacción. El sistema conserva los precios históricos y el historial de movimientos; una anulación autorizada devuelve las unidades una sola vez. Las migraciones de la base se gestionan con Flyway.",
      ],
      [
        "IA aplicada con un alcance concreto",
        "Los pronósticos comparan regresión Ridge con una referencia semanal mediante bloques cronológicos. El modelo se utiliza solo cuando cumple el criterio de mejora; si falta historial, el sistema informa la limitación. También ofrece alertas y sugerencias de reposición mediante reglas explícitas.",
      ],
      [
        "Acceso según responsabilidades",
        "ADMIN, MANAGER, ANALYST y VIEWER tienen permisos diferenciados. Las sesiones y las rutas de la API controlan el acceso a catálogos, operaciones, reportes y análisis. La demo requiere una cuenta habilitada; las contraseñas no son públicas.",
      ],
      [
        "Del código a la demo",
        "El repositorio incluye pruebas web, Java, integración con PostgreSQL, analítica Python y recorridos E2E con Playwright. La demostración está desplegada en Render con PostgreSQL en Neon y utiliza datos ficticios identificados en la interfaz.",
      ],
    ],
    tags: [
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Python",
      "FastAPI",
      "scikit-learn",
      "APIs REST",
    ],
    cardTags: [
      "React",
      "TypeScript",
      "Java",
      "PostgreSQL",
      "Python",
      "IA aplicada",
    ],
    image: "assets/nexus-ai-dashboard.webp",
    imageAlt:
      "Panel real de NEXUS AI en tema oscuro: accesos rápidos, período de ventas e indicadores calculados con datos ficticios de demostración",
    gallery: [
      {
        src: "assets/nexus-ai-login.webp",
        alt: "Pantalla de acceso real de NEXUS AI con identidad morada y negra y selector de tema",
        caption:
          "Acceso a la demostración · Tema oscuro · Captura proporcionada del producto.",
      },
    ],
    note: "Proyecto personal de demostración en evolución. Las capturas muestran datos ficticios; sus importes no representan resultados de un negocio real. El acceso requiere una cuenta demo habilitada. El alojamiento gratuito puede tardar en iniciar después de un período sin uso.",
    link: "https://nexus-ai-gpereyradev.onrender.com/",
    linkText: "ABRIR DEMO WEB",
    links: [
      {
        href: "https://github.com/gpereyradev/nexus-ai",
        label: "VER CÓDIGO EN GITHUB",
      },
    ],
  },
  {
    eyebrow: "02 / PROYECTO DE EMPRESA · EN DESARROLLO",
    title: "FitCoach",
    intro:
      "FitCoach nace para reunir en una misma experiencia la relación entre un coach y sus clientes: planes, entrenamientos y seguimiento del progreso. Es un producto que desarrollo junto con mi empresa y que continúa en construcción.",
    details: [
      [
        "Contexto y producto",
        "El diseño contempla un portal de cliente con entrenamientos, nutrición, estadísticas y perfil. El objetivo es que la información de cada área se entienda dentro de un recorrido común, desde consultar un plan hasta revisar el progreso.",
      ],
      [
        "Mi participación",
        "Participo en el desarrollo del backend y colaboro con el equipo para organizar perfiles, planes de entrenamiento y las necesidades de cada rol. El trabajo conecta las decisiones del producto con la estructura y la lógica que necesita la aplicación.",
      ],
      [
        "Diseño como referencia",
        "El archivo de Figma permite explorar cómo se organiza la experiencia del cliente y contrastarla con el desarrollo por módulos. La portada muestra una captura del dashboard del diseño original compartido.",
      ],
      [
        "Estado actual",
        "Proyecto de empresa en desarrollo. Las funcionalidades se construyen de forma gradual; el diseño muestra la dirección del producto y no supone que cada módulo esté publicado.",
      ],
    ],
    tags: ["Backend", "Trabajo en equipo", "UX/UI", "Figma"],
    image: "assets/fitcoach-dashboard.webp",
    imageAlt:
      "Dashboard de cliente de FitCoach, captura del diseño original en Figma",
    note: "Proyecto de mi empresa en desarrollo. El acceso al repositorio depende de sus permisos.",
    link: "https://github.com/codainisoftware/fitcoach",
    linkText: "REPOSITORIO",
    links: [
      {
        href: "https://www.figma.com/design/U2EYU235ZzKVBzhKo8ZweA/FitCoach?node-id=812-1581",
        label: "VER DISEÑO EN FIGMA",
      },
    ],
    id: "fitcoach",
    categories: ["web", "ux", "team"],
    label: "DESARROLLO EN EQUIPO / EMPRESA",
    summary:
      "Plataforma de entrenamiento de mi empresa. Participo en el backend y en la construcción de una experiencia que conecta coaches, clientes y seguimiento del progreso.",
    cardTags: ["Backend", "UX/UI", "Trabajo en equipo", "En curso"],
  },
  {
    id: "tuerka",
    title: "Tuerka",
    eyebrow: "03 / VENTA DE VEHÍCULOS · PROYECTO COLABORATIVO",
    categories: ["web", "ux", "team"],
    label: "WEB / CATÁLOGO Y RESERVA DE VEHÍCULOS",
    summary: "Catálogo de vehículos con filtros, favoritos y fichas de detalle, conectado con un flujo de cuentas, cotizaciones y reservas documentado en el proyecto.",
    intro: "Tuerka organiza la búsqueda de un vehículo desde el primer criterio hasta su ficha de detalle. El proyecto conecta un diseño original en Figma con una aplicación React publicada en Vercel.",
    details: [
      ["Del diseño a la navegación", "La identidad negra y amarilla, la portada, el catálogo y el detalle forman parte del diseño de referencia en Figma. La implementación utiliza React, React Router y Vite, con un menú y un buscador disponibles durante el recorrido."],
      ["Un catálogo que conserva el contexto", "La búsqueda combina marca, tipo, condición, precio, año y transmisión, además de ordenación. Los criterios se guardan en la URL para conservar la selección al compartir un enlace o recargar la página. Los favoritos se almacenan en el navegador."],
      ["De la ficha al contacto", "Cada vehículo cuenta con galería, especificaciones, pestañas y opciones relacionadas. El repositorio incluye cuentas de usuario, cotizaciones con respuesta de asesor y un flujo de reservas con Mercado Pago."],
      ["Backend e integraciones", "Supabase aporta autenticación y PostgreSQL con políticas por fila. Las funciones de Vercel crean reservas pendientes y consultan los pagos directamente al proveedor; EmailJS permite avisar de nuevas cotizaciones. Estas integraciones requieren la configuración de sus servicios."],
      ["Alcance colaborativo", "Se presenta como proyecto colaborativo con acceso al código, la web y el diseño original. La captura corresponde a la página publicada; los vehículos y los precios forman un inventario de demostración."],
    ],
    tags: ["React", "JavaScript", "React Router", "Supabase", "PostgreSQL", "Mercado Pago", "EmailJS", "Vercel", "Figma"],
    cardTags: ["React", "Supabase", "React Router", "Figma"],
    image: "assets/tuerka-home.webp",
    imageAlt: "Portada real de Tuerka: identidad negra y amarilla, vehículo junto al mar y acceso al catálogo",
    note: "Proyecto colaborativo. La web muestra inventario de demostración y precios referenciales. Las cuentas, cotizaciones y reservas dependen de la configuración de los servicios y del rol de acceso; la revisión pública se concentra en la navegación y el catálogo.",
    link: "https://proyecto-tuerka.vercel.app/",
    linkText: "EXPLORAR TUERKA",
    links: [
      { href: "https://github.com/Dgirto/ProyectoTuerka", label: "VER CÓDIGO EN GITHUB" },
      { href: "https://www.figma.com/design/4kNYV0piPpnyTGb8g7jql1/Tuerka?node-id=0-1", label: "VER DISEÑO EN FIGMA" },
    ],
  },
  {
    id: "neurochess",
    title: "NeuroChess",
    eyebrow: "04 / GAME DEV · INTELIGENCIA ARTIFICIAL",
    categories: ["game", "ai", "web"],
    label: "GAME DEV / MOTOR DE AJEDREZ CON IA",
    summary:
      "Ajedrez web contra un motor propio en Python. Minimax con poda alfa-beta, cuatro dificultades y un panel que muestra cómo busca la IA. Incluye pistas, historial y descarga de partidas.",
    intro:
      "NeuroChess lleva los algoritmos de búsqueda a una experiencia que se puede jugar: un tablero de ajedrez conectado a un motor desarrollado en Python. El proyecto combina reglas de juego, inteligencia artificial clásica y diseño de interacción para entender qué calcula el ordenador antes de responder.",
    details: [
      [
        "Un motor que toma decisiones",
        "Implementé Minimax con poda alfa-beta y búsqueda iterativa. La evaluación heurística considera material, desarrollo, peones, centralización y seguridad del rey; los cuatro niveles ajustan la profundidad de búsqueda de 1 a 4, respetando un presupuesto de tiempo.",
      ],
      [
        "El tablero tiene reglas",
        "El servidor valida cada movimiento y contempla jaque, mate, ahogado, enroque, captura al paso y coronación. También identifica material insuficiente, repetición de posiciones y las condiciones de tablas por número de jugadas.",
      ],
      [
        "Una partida fácil de seguir",
        "Puedes elegir bando, cambiar la dificultad, pedir una pista, deshacer un turno o descargar la partida en PGN. La interfaz incorpora piezas SVG diferenciadas, notación de jugadas, temas claro y oscuro, controles por teclado y adaptación a móviles.",
      ],
      [
        "La búsqueda a la vista",
        "El panel de análisis permite consultar nodos explorados, cortes alfa-beta, tiempo, profundidad efectiva y evaluación de la posición. Son métricas del cálculo ejecutado por el motor, útiles para observar la relación entre dificultad, coste y decisión.",
      ],
      [
        "Python detrás de la experiencia",
        "Un servidor HTTP y una API en Python gestionan las sesiones y las jugadas. HTML, CSS y JavaScript forman el frontend; el motor utiliza la biblioteca estándar, sin librerías de ajedrez ni servicios de IA externos. Las pruebas cubren reglas, posiciones de referencia y el flujo de la API.",
      ],
    ],
    tags: ["Python", "JavaScript", "HTML5", "CSS3", "Minimax", "Poda alfa-beta", "Algoritmos de búsqueda", "Pruebas unitarias"],
    cardTags: ["Python", "JavaScript", "Minimax", "Poda alfa-beta"],
    image: "assets/neurochess-desktop.webp",
    imageAlt: "Captura real de NeuroChess con tablero, selección de dificultad e historial de jugadas",
    note:
      "Proyecto personal de IA clásica con motor didáctico propio. La profundidad máxima es 4; las partidas se conservan en memoria mientras el servidor siga activo. El alojamiento gratuito puede tardar en iniciar tras un período sin uso. Piezas Chessnut de Alexis Luengas; créditos y licencia en el repositorio.",
    link: "https://neurochess-python.onrender.com/",
    linkText: "JUGAR NEUROCHESS",
    links: [{ href: "https://github.com/gpereyradev/neurochess-python", label: "VER CÓDIGO EN GITHUB" }],
  },
  {
    eyebrow: "05 / ANDROID · PROYECTO EN EQUIPO",
    title: "DoIt",
    intro:
      "Una aplicación Android para organizar pendientes, establecer fechas y seguir el avance de las tareas. DoIt reúne autenticación local, almacenamiento SQLite y un flujo de creación, consulta y edición desarrollado en equipo.",
    details: [
      [
        "El reto",
        "Una tarea necesita información coherente para poder gestionarse: un título válido, fechas interpretables y cambios de estado permitidos. Mi trabajo se concentra en esas reglas que sostienen el comportamiento de la aplicación.",
      ],
      [
        "Mi aporte técnico",
        "Implementé Validaciones, FechaUtils y Resultado dentro de util/, además de sus pruebas unitarias. Las utilidades comprueban títulos, fechas y transiciones de estado, y convierten fechas entre los formatos utilizados por el proyecto.",
      ],
      [
        "Experiencia de uso",
        "El producto contempla inicio de sesión, registro, listado, detalle y creación o edición de tareas. Los estados pendiente, en progreso y completada permiten identificar el momento de cada actividad.",
      ],
      [
        "Colaboración y alcance",
        "Proyecto compartido del equipo de SENATI. El README documenta las responsabilidades; mi contribución corresponde a las utilidades y pruebas, dentro de una aplicación construida junto con otros integrantes.",
      ],
    ],
    tags: [
      "Java",
      "Android Studio",
      "SQLite",
      "Reglas de negocio",
      "Pruebas unitarias",
    ],
    note: "Trabajo colaborativo. El README del repositorio identifica mi contribución en util/ y pruebas. La portada es una representación visual.",
    link: "https://github.com/Dgirto/appTareas",
    linkText: "VER PROYECTO EN GITHUB",
    id: "doit",
    categories: ["android", "team"],
    label: "ANDROID / REGLAS DE NEGOCIO",
    summary:
      "Gestor de tareas Android con SQLite y seguimiento por estados. Desarrollé las validaciones, utilidades de fechas y resultados, junto con sus pruebas unitarias.",
    cardTags: ["Java", "SQLite", "Pruebas unitarias"],
  },
  {
    eyebrow: "06 / ELECTRÓNICA · TINKERCAD",
    title: "ParkSense",
    intro:
      "Sistema de parqueo simulado en Tinkercad para identificar vehículos estacionados y plazas disponibles.",
    details: [
      [
        "El problema",
        "Para entender la disponibilidad de un estacionamiento hay que traducir la detección de vehículos en un estado fácil de consultar: plaza libre u ocupada. ParkSense explora esa relación mediante una simulación electrónica.",
      ],
      [
        "Diseño del sistema",
        "El circuito utiliza Arduino Uno y sensores ultrasónicos para representar la detección de vehículos. La imagen original incorpora indicadores LED, pantalla LCD, servomotores, pulsador y zumbador como parte del montaje de Tinkercad.",
      ],
      [
        "De la señal a la información",
        "El proyecto conecta la lectura de sensores con la representación de disponibilidad y acceso. Trabajar con el circuito permite razonar sobre entradas, salidas y cambios de estado en un sistema físico simulado.",
      ],
      [
        "Explóralo en el portfolio",
        "La demo de dos plazas traduce esa idea a una interacción sencilla: ocupa o libera espacios y observa el contador y la barrera. Es una visualización de la lógica; la imagen del proyecto conserva el circuito original.",
      ],
    ],
    tags: ["Arduino Uno", "Tinkercad", "Sensores", "Electrónica", "IoT"],
    image: "assets/parksense-circuito.webp",
    imageAlt:
      "Circuito original ParkSense con Arduino Uno, sensores ultrasónicos, LCD y servomotores",
    note: "Proyecto académico de simulación electrónica. La imagen corresponde al circuito proporcionado.",
    id: "parksense",
    categories: ["iot"],
    label: "IoT / SIMULACIÓN ELECTRÓNICA",
    summary:
      "Simulación electrónica en Tinkercad para detectar vehículos y plazas libres. Arduino, sensores e indicadores explican el estado del estacionamiento de forma visual.",
    cardTags: ["Tinkercad", "Arduino Uno", "Sensores"],
  },
  {
    eyebrow: "07 / ANDROID / PERSISTENCIA",
    title: "Ecolim Premium",
    intro:
      "Aplicación Android para organizar el registro y seguimiento de residuos con información guardada localmente.",
    details: [
      [
        "Contexto",
        "Ecolim Premium organiza el registro y seguimiento de residuos desde una aplicación móvil. Su panel de control concentra las acciones de registrar, revisar el historial y acceder a reportes.",
      ],
      [
        "Implementación",
        "Desarrollada con Java y Android SDK, conecta las pantallas de acceso y gestión con una base de datos SQLite. La persistencia local permite conservar los registros para consultarlos desde la aplicación.",
      ],
      [
        "Enfoque técnico",
        "El trabajo consiste en mantener un recorrido coherente entre captura, almacenamiento y consulta de información. Cada pantalla cumple una tarea concreta dentro del seguimiento de residuos.",
      ],
    ],
    tags: ["Java", "Android SDK", "SQLite"],
    note: "Proyecto académico. La portada utiliza una representación gráfica de sus funciones; el código original está disponible en GitHub.",
    link: "https://github.com/gpereyradev/TrabajoFinal",
    linkText: "VER CÓDIGO EN GITHUB",
    id: "ecolim",
    categories: ["android"],
    label: "ANDROID / PERSISTENCIA",
    summary:
      "Aplicación Android para registrar residuos y consultar su historial. Combina pantallas de acceso, reportes y persistencia local en SQLite para mantener los datos disponibles.",
    cardTags: ["Java", "Android SDK", "SQLite"],
  },
  {
    eyebrow: "08 / ANDROID / OPERACIONES CRUD",
    title: "App Proforma",
    intro:
      "Herramienta móvil para gestionar productos dentro de proformas y calcular importes de manera automática.",
    details: [
      [
        "El producto",
        "Una herramienta Android para organizar productos dentro de una proforma y calcular sus importes. El flujo reúne registro, edición, eliminación y actualización de los totales.",
      ],
      [
        "Reglas de entrada",
        "El código de producto debe tener seis caracteres, el nombre admite hasta cuarenta, el precio no puede ser negativo y la cantidad debe ser mayor que cero. Estas reglas evitan operar con datos incompletos o incoherentes.",
      ],
      [
        "Interfaz y lógica",
        "RecyclerView presenta los productos y Material Components acompaña la interfaz. Los importes se recalculan a partir de precio y cantidad para reflejar los cambios del listado.",
      ],
      [
        "Flujo de desarrollo",
        "El repositorio incluye un flujo de compilación con GitHub Actions. Es un proyecto académico centrado en operaciones CRUD, validación y actualización de información en Android.",
      ],
    ],
    tags: ["Java", "RecyclerView", "Material Components"],
    note: "Proyecto académico. La portada utiliza una representación gráfica de sus funciones; el código original está disponible en GitHub.",
    link: "https://github.com/gpereyradev/appProforma",
    linkText: "VER CÓDIGO EN GITHUB",
    id: "proforma",
    categories: ["android"],
    label: "ANDROID / OPERACIONES CRUD",
    summary:
      "Gestión móvil de productos y proformas con Java. Incluye altas, edición y eliminación, validación de datos y cálculo automático de importes con RecyclerView.",
    cardTags: ["Java", "RecyclerView", "Material Components"],
  },
  {
    eyebrow: "09 / ANDROID / VALIDACIONES",
    title: "App Mantenimiento",
    intro:
      "Aplicación de registro de empleados con controles para mejorar la consistencia de los datos ingresados.",
    details: [
      [
        "Contexto",
        "Una aplicación académica para registrar empleados y presentar sus datos en un listado. El foco está en controlar la información antes de incorporarla a la interfaz.",
      ],
      [
        "Validación",
        "Comprueba que el DNI tenga ocho dígitos y que el sueldo sea un valor numérico positivo. Las condiciones de entrada forman parte de la lógica de registro y ayudan a mantener datos consistentes.",
      ],
      [
        "Herramientas",
        "Utiliza Java, ListView y Gradle. El repositorio incorpora GitHub Actions para ejecutar comprobaciones de compilación durante el flujo de trabajo.",
      ],
    ],
    tags: ["Java", "ListView", "Gradle"],
    note: "Proyecto académico. La portada utiliza una representación gráfica de sus funciones; el código original está disponible en GitHub.",
    link: "https://github.com/gpereyradev/appMantenimiento",
    linkText: "VER CÓDIGO EN GITHUB",
    id: "mantenimiento",
    categories: ["android"],
    label: "ANDROID / VALIDACIONES",
    summary:
      "Registro de empleados en Android con validación de DNI y sueldo. La información se organiza en un listado y el repositorio incorpora compilación con GitHub Actions.",
    cardTags: ["Java", "ListView", "Gradle"],
  },
  {
    eyebrow: "10 / FRONTEND / REACT",
    title: "Sistema de Matrícula",
    intro:
      "Directorio de alumnos desarrollado con componentes reutilizables y estados interactivos en React.",
    details: [
      [
        "La experiencia",
        "Un directorio académico que presenta alumnos y permite alternar su estado de matrícula. La interfaz convierte los datos en tarjetas y mantiene las interacciones dentro de un recorrido sencillo.",
      ],
      [
        "Arquitectura de componentes",
        "Navbar, AlumnoCard, Contador y Footer separan las responsabilidades de la vista. Las props suministran información a las tarjetas y useState administra los cambios interactivos.",
      ],
      [
        "Frontend y publicación",
        "React y Vite forman la base del proyecto, con Bootstrap para la presentación. El código se mantiene en GitHub y el proyecto utiliza Vercel para su despliegue.",
      ],
    ],
    tags: ["React", "Vite", "JavaScript", "Bootstrap"],
    note: "Proyecto académico. La portada utiliza una representación gráfica de sus funciones; el código original está disponible en GitHub.",
    link: "https://github.com/gpereyradev/appEscuela",
    linkText: "VER CÓDIGO EN GITHUB",
    id: "app-escuela",
    categories: ["web"],
    label: "FRONTEND / REACT",
    summary:
      "Directorio de alumnos con React y Vite. Tarjetas reutilizables, estado de matrícula y un contador interactivo muestran el uso de componentes, props y useState.",
    cardTags: ["React", "Vite", "JavaScript", "Bootstrap"],
  },
  {
    eyebrow: "11 / UX/UI + FRONTEND",
    title: "Portfolio personal",
    intro:
      "Un portfolio que reúne software, diseño UX/UI y videojuegos en una misma identidad. La dirección visual toma recursos del cómic: tipografía contundente, contraste, viñetas, tramas y acentos de color.",
    details: [
      [
        "Diseño de la experiencia",
        "Una portada con identidad propia presenta mi perfil y lleva directamente al trabajo. Los proyectos se organizan por disciplina y se pueden buscar por nombre o tecnología; cada caso desarrolla su contexto y alcance.",
      ],
      [
        "Construcción en React",
        "La aplicación utiliza React y Vite, con componentes para proyectos, habilidades, credenciales, contacto y demos. Los datos se mantienen en archivos independientes y los hooks controlan animaciones y diálogos.",
      ],
      [
        "Sistema visual e iconografía",
        "Colores de alto contraste, tipografía local y una combinación de logotipos tecnológicos e iconos SVG dan continuidad a las secciones. El diseño adapta sus composiciones a escritorio y móvil.",
      ],
      [
        "Interacción y accesibilidad",
        "Navegación con teclado, diálogos nativos, estados de formulario y soporte de movimiento reducido. ParkSense y Crimson Runner permiten explorar la lógica de estados y la programación de juegos dentro del propio portfolio.",
      ],
    ],
    tags: ["React", "Vite", "Diseño UI", "CSS", "JavaScript"],
    note: "Proyecto personal en evolución. Las ilustraciones de los proyectos son composiciones gráficas; los documentos de las credenciales se conservan como en el repositorio.",
    id: "portfolio",
    categories: ["ux", "web"],
    label: "UX/UI / EXPERIENCIA EDITORIAL",
    summary:
      "Mi identidad profesional convertida en una experiencia React. Diseño editorial, componentes reutilizables, proyectos filtrables y prototipos interactivos con una estética de cómic.",
    cardTags: ["React", "Vite", "UX/UI", "JavaScript"],
  },
  {
    id: "runner",
    categories: ["game"],
    label: "GAME DEV / EXPERIMENTO INTERACTIVO",
    summary:
      "Un runner de reflejos con colisiones, partículas y dificultad progresiva. Pruébalo aquí.",
    cardTags: ["Canvas", "JavaScript", "Game loop"],
    title: "Crimson Runner",
    href: "#arcade",
    intro:
      "Un prototipo original de reflejos, con colisiones, partículas y dificultad progresiva.",
  },
];

export const projects = catalog.map(project => ({
  ...project,
  ...caseStudies[project.id],
}));
