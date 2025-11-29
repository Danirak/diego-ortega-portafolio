# Sistema de Gestión de Imágenes

Este directorio contiene el sistema centralizado de gestión de imágenes del proyecto.

## Archivos

### `placeholder-images.json`
Archivo de configuración que contiene todas las imágenes del proyecto en formato array con la siguiente estructura:

```json
[
  {
    "id": "icon-mobile",
    "description_es": "Icono de dispositivo móvil",
    "description_en": "Mobile device icon",
    "imageUrl": "/icons/mobile.svg",
    "imageHint": "icon"
  }
]
```

**Campos:**
- `id` (string): Identificador único de la imagen (kebab-case)
- `description_es` (string): Descripción en español
- `description_en` (string): Descripción en inglés
- `imageUrl` (string): Ruta absoluta desde public/
- `imageHint` (string): Categoría de la imagen (icon, avatar, post, project, logo, common, technology)

### `placeholder-images.ts`
Módulo TypeScript que exporta funciones helper para acceder a las imágenes:

```typescript
import { getImageUrl, getImageById, getImagesByHint } from '../lib/placeholder-images';

// Obtener URL de una imagen
const avatarUrl = getImageUrl('my-avatar');

// Obtener objeto completo de imagen
const image = getImageById('icon-mobile');

// Obtener todas las imágenes de una categoría
const icons = getImagesByHint('icon');
```

## Funciones disponibles

### `getImageUrl(id: string): string`
Retorna la URL de una imagen dado su ID.

```typescript
const url = getImageUrl('icon-mobile'); // "/icons/mobile.svg"
```

### `getImageById(id: string): ImagePlaceholder | undefined`
Retorna el objeto completo de una imagen.

```typescript
const image = getImageById('icon-mobile');
// {
//   id: "icon-mobile",
//   description_es: "Icono de dispositivo móvil",
//   description_en: "Mobile device icon",
//   imageUrl: "/icons/mobile.svg",
//   imageHint: "icon"
// }
```

### `getImagesByHint(hint: string): ImagePlaceholder[]`
Retorna todas las imágenes de una categoría específica.

```typescript
const icons = getImagesByHint('icon');
const avatars = getImagesByHint('avatar');
```

### `getImageDescription(id: string, lang: 'es' | 'en'): string`
Retorna la descripción de una imagen en el idioma especificado.

```typescript
const desc = getImageDescription('icon-mobile', 'es'); // "Icono de dispositivo móvil"
```

## Categorías disponibles (imageHint)

- `icon` - Iconos generales de UI
- `avatar` - Imágenes de avatares
- `post` - Imágenes de posts del blog
- `project` - Imágenes de proyectos
- `logo` - Logos del sitio
- `common` - Imágenes comunes (ej: icon-quote)
- `technology` - Logos de tecnologías

## Uso en archivos de datos

```typescript
import { getImageUrl } from '../lib/placeholder-images';

export const aboutConfig: AboutConfig = {
  DOING: {
    items: [
      {
        title: "Mobile Apps",
        icon: getImageUrl('icon-mobile'),
        description: "..."
      }
    ]
  }
};
```

## Agregar nuevas imágenes

1. Colocar la imagen en la carpeta correspondiente en `public/`
2. Agregar entrada en `placeholder-images.json`:

```json
{
  "id": "nueva-imagen",
  "description_es": "Descripción en español",
  "description_en": "English description",
  "imageUrl": "/ruta/nueva-imagen.png",
  "imageHint": "categoria"
}
```

3. Usar en el código:
```typescript
const url = getImageUrl('nueva-imagen');
```

## Type Safety

El sistema incluye definición de tipos TypeScript:

```typescript
export type ImagePlaceholder = {
  id: string;
  description_es: string;
  description_en: string;
  imageUrl: string;
  imageHint: string;
};
```

## Beneficios del nuevo sistema

1. **Internacionalización**: Descripciones en español e inglés
2. **Type Safety**: TypeScript previene errores
3. **Flexibilidad**: Fácil filtrar por categoría o buscar por ID
4. **Mantenibilidad**: Estructura clara y documentada
5. **Escalabilidad**: Fácil agregar nuevas imágenes y categorías
