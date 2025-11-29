# Migración de Python/Jinja2 a React/TypeScript

## Resumen

Este proyecto fue migrado exitosamente de una arquitectura basada en Python/Jinja2 a React/TypeScript con Vite.

## Cambios principales

### Arquitectura

**Antes (Python/Jinja2):**
- Script Python (`main.py`) que lee archivos YAML de configuración
- Templates Jinja2 en `src/jinja/` que se renderizan a HTML estático
- Generación de `index.html` mediante Python
- CSS y JS vanilla

**Después (React/TypeScript):**
- Aplicación React con componentes modulares
- Datos de configuración en TypeScript (`src/data/`)
- Vite como bundler y dev server
- TypeScript para type safety
- Single Page Application (SPA)

### Estructura de archivos

#### Archivos eliminados/deprecados:
- `main.py` - Script Python de generación
- `pyproject.toml` / `poetry.toml` - Dependencias Python
- `src/jinja/*.j2` - Templates Jinja2
- `config/*.yml` - Archivos YAML de configuración

#### Archivos nuevos:
- `package.json` - Dependencias Node.js
- `vite.config.ts` - Configuración de Vite
- `tsconfig.json` / `tsconfig.node.json` - Configuración TypeScript
- `src/main.tsx` - Entry point de React
- `src/App.tsx` - Componente principal
- `src/components/*.tsx` - Componentes React
- `src/data/*.ts` - Configuración en TypeScript
- `src/types/*.ts` - Definiciones de tipos

### Componentes

Cada template Jinja2 fue convertido a un componente React:

| Template Jinja2 | Componente React |
|-----------------|------------------|
| `index.j2` | `App.tsx` |
| `sidebar.j2` | `Sidebar.tsx` |
| `navbar.j2` | `Navbar.tsx` |
| `about.j2` | `About.tsx` |
| `resume.j2` | `Resume.tsx` |
| `projects.j2` | `Projects.tsx` |
| `blog.j2` | `Blog.tsx` |
| `contact.j2` | `Contact.tsx` |

### Datos de configuración

Los archivos YAML fueron convertidos a TypeScript:

| YAML | TypeScript |
|------|-----------|
| `config/profile.yml` | `src/data/profile.ts` |
| `config/about.yml` | `src/data/about.ts` |
| `config/navbar.yml` | `src/data/navbar.ts` |
| `config/resume.yml` | `src/data/resume.ts` |
| `config/projects.yml` | `src/data/projects.ts` |
| `config/blog.yml` | `src/data/blog.ts` |
| `config/contact.yml` | `src/data/contact.ts` |

### Funcionalidades JavaScript migradas a React

La lógica de `src/js/script.js` fue migrada a React usando hooks:

1. **Sidebar toggle** → `useState` en `Sidebar.tsx`
2. **Modal de testimonials** → `useState` en `About.tsx`
3. **Filtros de proyectos** → `useState` en `Projects.tsx`
4. **Validación de formulario** → `useState` + `useEffect` en `Contact.tsx`
5. **Navegación entre páginas** → `useState` en `App.tsx`

### Ventajas de la nueva arquitectura

1. **Type Safety**: TypeScript previene errores en tiempo de desarrollo
2. **Componentes reutilizables**: Mejor organización del código
3. **Hot Module Replacement**: Desarrollo más rápido con Vite
4. **Better DX**: Autocompletado y documentación inline
5. **Modern tooling**: ESLint, Prettier, y otras herramientas modernas
6. **Performance**: Bundle optimizado y code splitting automático

### Deployment

El workflow de GitHub Actions fue actualizado para:
- Instalar dependencias con `npm ci`
- Construir con `npm run build`
- Desplegar el directorio `dist/` a GitHub Pages

### Comandos

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Preview build
npm run preview

# Lint
npm run lint
```

## Notas de migración

- Todos los assets estáticos permanecen en `config/assets/`
- El CSS original (`src/css/style.css`) se mantiene sin cambios
- Los iconos siguen usando Ionicons cargados via CDN
- La fuente Google Fonts se carga en el `index.html`

## Compatibilidad

- Node.js ≥ 18
- Navegadores modernos que soporten ES2020
