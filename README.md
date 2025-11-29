<div align="center">

# 🚀 Diego Ortega - Portfolio Profesional

[![Live Demo](https://img.shields.io/badge/🌐_Demo-Live-success?style=for-the-badge)](https://danirak.github.io/diego-ortega-portafolio)
[![GitHub Pages](https://img.shields.io/github/deployments/Danirak/diego-ortega-portafolio/github-pages?label=Deploy&style=for-the-badge&logo=github)](https://github.com/Danirak/diego-ortega-portafolio/deployments)

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite&logoColor=white)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)

**Portfolio profesional moderno, totalmente responsive y optimizado.**  
Single Page Application construida con arquitectura component-based y sistema de temas dinámico.

[🌐 Ver Demo](https://danirak.github.io/diego-ortega-portafolio) • [📖 Arquitectura](./ARCHITECTURE.md) • [🐛 Issues](https://github.com/Danirak/diego-ortega-portafolio/issues)

![Portfolio Preview](https://via.placeholder.com/800x400/1e1e2e/cdd6f4?text=Diego+Ortega+Portfolio)

</div>

---

## ✨ Características Principales

<table>
  <tr>
    <td align="center">🎨</td>
    <td><strong>Sistema de Temas Dinámico</strong><br/>Cambio automático día/noche según hora local (6AM-6PM) con persistencia en localStorage</td>
  </tr>
  <tr>
    <td align="center">📱</td>
    <td><strong>Diseño Responsive</strong><br/>Adaptación perfecta a móviles, tablets y escritorio con CSS moderno</td>
  </tr>
  <tr>
    <td align="center">⚡</td>
    <td><strong>Performance Optimizado</strong><br/>Build con Vite, lazy loading, code splitting y assets optimizados</td>
  </tr>
  <tr>
    <td align="center">🔒</td>
    <td><strong>Type-Safe</strong><br/>TypeScript estricto con interfaces completas para toda la configuración</td>
  </tr>
  <tr>
    <td align="center">🎯</td>
    <td><strong>Hash Routing</strong><br/>Navegación sin recarga con URLs semánticas (#about, #resume, #portfolio)</td>
  </tr>
  <tr>
    <td align="center">🖼️</td>
    <td><strong>Gestión de Imágenes Centralizada</strong><br/>Sistema type-safe con JSON registry y funciones helper</td>
  </tr>
  <tr>
    <td align="center">🚀</td>
    <td><strong>CI/CD Automatizado</strong><br/>Deployment automático a GitHub Pages con cada push</td>
  </tr>
  <tr>
    <td align="center">♿</td>
    <td><strong>Accesible</strong><br/>Semántica HTML5 correcta y soporte para navegación por teclado</td>
  </tr>
</table>

## 🛠️ Stack Tecnológico

### Core
```
React 18.2      →  Librería UI moderna con hooks
TypeScript 5.2  →  Type safety y mejor DX
Vite 5.0        →  Build tool ultra-rápido con HMR
```

### Tooling
```
ESLint          →  Linting con reglas TypeScript + React
CSS3            →  Custom properties para theming
GitHub Actions  →  CI/CD automatizado
```

### Librerías Externas (CDN)
```
Ionicons 7.1    →  Sistema de iconos moderno
Poppins Font    →  Tipografía profesional de Google Fonts
```

## 📁 Estructura del Proyecto

```
diego-ortega-cv/
├── 📂 src/
│   ├── 📂 components/       # Componentes React
│   │   ├── About.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Resume.tsx
│   │   ├── Sidebar.tsx
│   │   └── ThemeToggle.tsx
│   ├── 📂 data/            # Configuración de contenido
│   │   ├── about.ts
│   │   ├── navbar.ts
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── resume.ts
│   │   └── index.ts
│   ├── 📂 lib/             # Utilidades
│   │   ├── placeholder-images.json
│   │   ├── placeholder-images.ts
│   │   └── theme-init.ts
│   ├── 📂 types/           # Tipos TypeScript
│   │   ├── config.ts
│   │   └── custom-elements.d.ts
│   ├── 📂 css/             # Estilos globales
│   │   └── style.css
│   ├── App.tsx             # Componente raíz
│   └── main.tsx            # Entry point
├── 📂 public/              # Assets estáticos
│   ├── avatars/
│   ├── icons/
│   ├── projects/
│   └── logo.ico
├── 📂 .github/workflows/   # CI/CD
│   └── pages.yml
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

> 📘 **Documentación completa**: Ver [ARCHITECTURE.md](./ARCHITECTURE.md) para análisis detallado

## 🚀 Inicio Rápido

### Prerrequisitos

```bash
Node.js  ≥ 18.x
npm      ≥ 9.x
```

### Instalación y Desarrollo

```bash
# 1. Clonar repositorio
git clone https://github.com/Danirak/diego-ortega-portafolio.git
cd diego-ortega-portafolio

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

🎉 El sitio estará en **`http://localhost:5173`**

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de producción (salida en `dist/`) |
| `npm run preview` | Preview del build de producción |
| `npm run lint` | Linting con ESLint |

## ⚙️ Personalización

### 1. Configurar tu Información

Edita los archivos en **`src/data/`**:

```typescript
// src/data/profile.ts
export const profileConfig = {
  USER: {
    name: "Tu Nombre",
    role: "Tu Rol",
    avatar: getImageUrl('tu-avatar')
  },
  INFO: [
    { label: "Email", value: "tu@email.com" }
  ],
  // ...
}
```

**Archivos de datos:**
- `profile.ts` → Info del sidebar (nombre, avatar, contacto, redes)
- `about.ts` → Sección About Me (bio, skills, tecnologías)
- `resume.ts` → CV (educación, experiencia, habilidades)
- `projects.ts` → Portfolio de proyectos
- `navbar.ts` → Menú de navegación

### 2. Gestión de Imágenes

Sistema centralizado con type safety:

```typescript
import { getImageUrl } from '../lib/placeholder-images';

// Usar imagen por ID
const myImage = getImageUrl('mi-imagen-id');
```

**Registro de imágenes:**
1. Agregar imagen a `public/` (ej: `public/avatars/mi-foto.jpg`)
2. Registrar en `src/lib/placeholder-images.json`:
   ```json
   {
     "id": "mi-foto",
     "imageUrl": "/avatars/mi-foto.jpg",
     "imageHint": "avatar",
     "description_es": "Mi foto"
   }
   ```
3. Usar con `getImageUrl('mi-foto')`

### 3. Configurar GitHub Pages

1. **Fork** este repositorio
2. Actualizar `base` en **`vite.config.ts`**:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/tu-repo-name/',  // ⚠️ Cambiar esto
   })
   ```
3. Habilitar GitHub Pages:
   - `Settings` → `Pages`
   - Source: **GitHub Actions**
4. **Push** a `main` → Deploy automático ✨

### 4. Personalizar Tema

Editar variables CSS en **`src/css/style.css`**:

```css
/* Tema oscuro (default) */
:root {
  --bg-gradient-onyx: linear-gradient(...);
  --text-color: #ffffff;
  /* ... */
}

/* Tema claro */
[data-theme="light"] {
  --bg-gradient-onyx: linear-gradient(...);
  --text-color: #000000;
  /* ... */
}
```

**Horario de cambio automático:**
- 🌅 6:00 AM - 6:00 PM → Tema claro
- 🌙 6:00 PM - 6:00 AM → Tema oscuro

## 📦 Build de Producción

```bash
npm run build
```

**Output en `dist/`:**
- ✅ Assets minificados con hash (cache busting)
- ✅ Code splitting automático
- ✅ Tree shaking de dependencias
- ✅ CSS inlineado en JS
- ✅ Source maps para debugging

## 🚀 Deployment

### GitHub Pages (Recomendado)

**Automático con GitHub Actions:**

El workflow `.github/workflows/pages.yml` ejecuta:
1. ✓ Checkout del código
2. ✓ Setup Node.js 20
3. ✓ `npm ci` (instalación limpia)
4. ✓ `npm run build`
5. ✓ Deploy a GitHub Pages

**Trigger:** Push a rama `main`

### Otros Hostings

```bash
npm run build
# Subir contenido de dist/ a:
# - Vercel
# - Netlify  
# - Cloudflare Pages
# - Firebase Hosting
```

## 🎯 Arquitectura

### Flujo de Datos

```
index.html
    ↓
main.tsx  →  theme-init.ts (inicializa tema)
    ↓
App.tsx
    ↓
├─ Sidebar    →  profile.ts
├─ Navbar     →  navbar.ts
├─ About      →  about.ts     →  placeholder-images
├─ Resume     →  resume.ts
├─ Projects   →  projects.ts  →  placeholder-images
└─ ThemeToggle →  theme-init.ts
```

### Build Pipeline

```
Push → GitHub Actions → npm ci → tsc (check) → vite build → dist/ → Deploy
```

Ver [ARCHITECTURE.md](./ARCHITECTURE.md) para diagramas Mermaid completos.

## 🤝 Contribuir

¡Contribuciones bienvenidas! Sigue estos pasos:

1. **Fork** el proyecto
2. Crea tu rama: `git checkout -b feature/MiFeature`
3. Commit: `git commit -m 'Add: nueva funcionalidad'`
4. Push: `git push origin feature/MiFeature`
5. Abre un **Pull Request**

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**.  
Ver [LICENSE](./LICENSE) para detalles completos.

## 👤 Autor

<div align="center">

**Diego Andrés Ortega Araya**

Analista de I+D especializado en Full Stack Development

[![Portfolio](https://img.shields.io/badge/Portfolio-danirak.github.io-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](https://danirak.github.io/diego-ortega-portafolio)
[![Email](https://img.shields.io/badge/Email-11.diego.ortega@gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:11.diego.ortega@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-@Danirak-black?style=for-the-badge&logo=github)](https://github.com/Danirak)

</div>

## 🙏 Créditos

- [**React**](https://react.dev/) - Librería UI
- [**TypeScript**](https://www.typescriptlang.org/) - Lenguaje tipado
- [**Vite**](https://vitejs.dev/) - Build tool ultra-rápido
- [**Ionicons**](https://ionic.io/ionicons) - Sistema de iconos
- [**Google Fonts**](https://fonts.google.com/) - Tipografía Poppins

---

<div align="center">

**Hecho con ❤️ y ☕ por Diego Ortega**

⭐ ¿Te gustó? Dale una estrella al repo

[![GitHub stars](https://img.shields.io/github/stars/Danirak/diego-ortega-portafolio?style=social)](https://github.com/Danirak/diego-ortega-portafolio)

</div>
