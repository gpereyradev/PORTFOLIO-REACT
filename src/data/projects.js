export const projects = [
  {
    eyebrow: "01 / PROYECTO DE EMPRESA · EN DESARROLLO",
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
    eyebrow: "02 / ANDROID · PROYECTO EN EQUIPO",
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
    eyebrow: "03 / ELECTRÓNICA · TINKERCAD",
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
    eyebrow: "04 / ANDROID / PERSISTENCIA",
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
    eyebrow: "05 / ANDROID / OPERACIONES CRUD",
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
    eyebrow: "06 / ANDROID / VALIDACIONES",
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
    eyebrow: "07 / FRONTEND / REACT",
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
    eyebrow: "08 / UX/UI + FRONTEND",
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
