# Guillermo Pereyra — React Portfolio

Portfolio en español con una identidad editorial inspirada en el cómic. Desarrollado con **React 19, Vite 8 y Lucide React**. Incluye fotografía personal, diez proyectos, 11 credenciales, habilidades con iconos, contacto por correo y dos experiencias interactivas.

## Ejecutar

Instala Node.js **22.12 o superior** (se recomienda Node 24). Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abre la dirección que aparece en la terminal. Para generar la versión de producción:

```bash
npm test
npm run build
npm run preview
```

`dist/` contiene el resultado publicable. No abras el `index.html` directamente con doble clic: utiliza el servidor de Vite.

## Estructura

```text
src/
  App.jsx              Composición de las secciones
  main.jsx             Entrada de React
  components/          Secciones, tarjetas, iconos y diálogos
  data/                Perfil, proyectos, habilidades y certificados
  hooks/               Animaciones y ciclo de vida de diálogos
  lib/                 Formulario, búsqueda y motor Canvas
  styles/              Sistema visual y adaptaciones responsive
public/
  assets/              Fotografía, capturas, logotipos y fuentes locales
  certificados/        Documentos originales y miniaturas
index.html
vite.config.js
package.json
package-lock.json
tests/
.github/workflows/deploy.yml
```

Los filtros, búsqueda, menú móvil, estados del parqueo y formulario utilizan estado de React. El motor de Canvas está aislado en `src/lib/runner.js`; sus eventos, observadores y animación se limpian al desmontarse el componente. No se inyecta el sitio antiguo como HTML ni se conservan scripts que manipulen las secciones de la aplicación.

## Subir a GitHub y publicar

1. Descomprime el ZIP y sube **el contenido de esta carpeta** a tu repositorio. Incluye `src`, `public`, `package.json`, `package-lock.json`, `index.html`, `vite.config.js` y la carpeta `.github`.
2. Utiliza la rama `main`. En GitHub, ve a **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. El workflow incluido instala dependencias, ejecuta las pruebas, compila y publica `dist` automáticamente después de cada push a `main`. También puedes ejecutarlo desde Actions.

Vite utiliza una base relativa (`./`), compatible con repositorios de GitHub Pages y dominios propios. Para Vercel o Netlify, selecciona Vite, usa `npm run build` y el directorio de salida `dist`.

No subas `node_modules` ni archivos `.env`. La carpeta `dist` incluida permite inspeccionar el resultado ya compilado; el workflow la regenera desde el código fuente.

## Contacto por correo

Destinatario: **gpereyradev@gmail.com**. Los enlaces de correo, LinkedIn y GitHub están en `src/data/profile.js`. El formulario envía una petición AJAX a FormSubmit y no abre WhatsApp ni requiere un número de teléfono.

**Activación inicial:** si FormSubmit todavía no ha activado el destinatario, habrá que confirmar el enlace enviado a `gpereyradev@gmail.com` cuando se reciba el primer mensaje. No hacen falta claves privadas en el frontend. El servicio de correo es externo y requiere conexión a Internet.

La confirmación grande solo aparece cuando el proveedor responde con éxito. Ante errores, espera agotada o activación pendiente, se informa del problema y el texto permanece en el formulario. Las pruebas automatizadas usan respuestas simuladas; no envían correos reales ni certifican la entrega final en la bandeja del destinatario.

## Personalizar

- Perfil y enlaces: `src/data/profile.js`.
- Textos y casos de proyecto: `src/data/projects.js`.
- Habilidades: `src/data/skills.js`; asignación de iconos: `src/components/TechIcon.jsx`.
- Credenciales: `src/data/certificates.js` y documentos en `public/certificados`.
- Fotografía: `public/assets/guillermo-pereyra.webp`.
- Colores y ajustes finales: `src/styles/react.css`; estilos de base en la misma carpeta.

FitCoach se presenta como proyecto de empresa **en desarrollo** y enlaza a su repositorio y diseño original en Figma. DoIt identifica mi contribución en utilidades y pruebas dentro del equipo. ParkSense conserva la captura del circuito real y presenta una demo visual independiente del simulador Tinkercad. Las portadas gráficas de las demás aplicaciones se identifican como representaciones ilustrativas.

## Accesibilidad e interacciones

- Navegación con teclado, enlace para saltar a proyectos y diálogos nativos.
- Preferencia de movimiento reducido y animaciones con limpieza al desmontar.
- Etiquetas de formulario, estados de envío y prevención de envíos duplicados.
- Búsqueda combinable con filtros de proyectos; filtros por emisor en certificados.
- Crimson Runner: espacio, flecha arriba o toque para saltar; `P` para pausar. Se pausa al cambiar de pestaña o salir de su sección.
- ParkSense: pulsa cada plaza para ocuparla o liberarla; la barrera se cierra al completar los espacios.

La fotografía y los certificados pertenecen a su titular. Los logotipos identifican a sus respectivas herramientas y marcas. Los iconos de interfaz proceden de Lucide (licencia ISC incluida con el paquete).


## NEXUS AI

Proyecto destacado de gestión empresarial, con capturas reales del panel y acceso aportadas por el autor. Incluye frontend React/TypeScript, API Java/Spring Boot, PostgreSQL y analítica Python/FastAPI con Ridge frente a una referencia semanal. La demo pública requiere una cuenta habilitada y usa datos ficticios.

- Demo: https://nexus-ai-gpereyradev.onrender.com/
- Código: https://github.com/gpereyradev/nexus-ai
- Imágenes: `public/assets/nexus-ai-dashboard.webp` y `public/assets/nexus-ai-login.webp`.

El contador de proyectos se obtiene del catálogo; el filtro IA/datos permite encontrar NEXUS AI por su área.
