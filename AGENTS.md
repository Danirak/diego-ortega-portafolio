# Agents Rules

- Cada función nueva debe incluir un bloque de comentarios JSDoc encima
- Todas las variables y funciones deben escribirse en camelCase
- No uses snake_case
- Seguir las convenciones de React y TypeScript

# Estructura del Proyecto

Este proyecto es un portfolio personal construido con:
- **React 18** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **CSS** - Estilos (sin preprocesadores)

## Estructura de directorios

```
src/
├── components/        # Componentes React
│   ├── Sidebar.tsx
│   ├── Navbar.tsx
│   ├── About.tsx
│   ├── Resume.tsx
│   ├── Projects.tsx
│   ├── Blog.tsx
│   └── Contact.tsx
├── data/             # Configuración de datos (TypeScript)
│   ├── profile.ts
│   ├── about.ts
│   ├── navbar.ts
│   ├── resume.ts
│   ├── projects.ts
│   ├── blog.ts
│   ├── contact.ts
│   └── index.ts
├── lib/              # Utilidades y helpers
│   ├── placeholder-images.json
│   ├── placeholder-images.ts
│   └── README.md
├── types/            # Tipos TypeScript
│   ├── config.ts
│   └── custom-elements.d.ts
├── css/              # Estilos
│   └── style.css
├── images/           # Imágenes del proyecto (deprecated)
├── App.tsx           # Componente principal
└── main.tsx          # Entry point

public/               # Assets estáticos servidos directamente
├── avatars/          # Imágenes de avatares
├── icons/            # Iconos SVG
├── posts/            # Imágenes de blog posts
├── projects/         # Imágenes de proyectos
├── images/           # Imágenes comunes (quote, etc)
├── logo.ico          # Favicon
└── logo.svg          # Logo SVG

config/               # Assets originales (deprecated - usar public/)
├── assets/
│   ├── avatars/
│   ├── icons/
│   ├── posts/
│   └── projects/
```

## Sistema de imágenes

El proyecto usa un sistema centralizado de gestión de imágenes en `src/lib/placeholder-images`:

- **JSON**: `placeholder-images.json` - Todas las rutas organizadas por categorías
- **TypeScript**: `placeholder-images.ts` - Funciones helper con type safety

### Uso de imágenes

```typescript
import { placeholderImages } from '../lib/placeholder-images';

// Acceso directo
const avatar = placeholderImages.avatars.myAvatar;
const icon = placeholderImages.icons.mobile;

// O usando helpers
import { getIcon, getAvatar } from '../lib/placeholder-images';
const mobileIcon = getIcon('mobile');
```

Todas las imágenes se sirven desde la carpeta `public/` y se acceden con rutas absolutas.

## Configuración de datos

Para actualizar el contenido del portfolio, edita los archivos en `src/data/`:

- `profile.ts` - Información del sidebar (nombre, foto, contacto, redes sociales)
- `about.ts` - Sección "About me" (presentación, skills, tecnologías)
- `navbar.ts` - Elementos del menú de navegación
- `resume.ts` - Educación, experiencia, habilidades y lenguajes
- `projects.ts` - Portfolio de proyectos
- `blog.ts` - Posts del blog
- `contact.ts` - Formulario y ubicación de contacto

# Commands

## Desarrollo
```bash
npm run dev
```

## Build de producción
```bash
npm run build
```

## Preview del build
```bash
npm run preview
```

## Lint
```bash
npm run lint
```
