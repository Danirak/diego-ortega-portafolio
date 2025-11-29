import data from './placeholder-images.json';

export type ImagePlaceholder = {
    id: string;
    description_es: string;
    description_en: string;
    imageUrl: string;
    imageHint: string;
};

/**
 * Obtiene una imagen por su ID
 * @param {string} id - ID único de la imagen
 * @returns {ImagePlaceholder | undefined} Objeto con información de la imagen
 */
export const getImageById = (id: string): ImagePlaceholder | undefined => {
    return data.find((item) => item.id === id);
};

/**
 * Obtiene la URL de una imagen por su ID
 * @param {string} id - ID único de la imagen
 * @returns {string} URL de la imagen o string vacío si no se encuentra
 */
export const getImageUrl = (id: string): string => {
    const image = getImageById(id);
    if (!image) return '';
    // Agregar el base URL de Vite para que funcione en desarrollo y producción
    const baseUrl = import.meta.env.BASE_URL;
    return baseUrl + image.imageUrl.replace(/^\//, '');
};

/**
 * Obtiene todas las imágenes de un tipo específico
 * @param {string} hint - Categoría de la imagen (icon, avatar, post, project, logo, common, technology)
 * @returns {ImagePlaceholder[]} Array de imágenes del tipo especificado
 */
export const getImagesByHint = (hint: string): ImagePlaceholder[] => {
    return data.filter((item) => item.imageHint === hint);
};

/**
 * Obtiene la descripción de una imagen en el idioma especificado
 * @param {string} id - ID único de la imagen
 * @param {'es' | 'en'} lang - Idioma (es o en)
 * @returns {string} Descripción de la imagen
 */
export const getImageDescription = (id: string, lang: 'es' | 'en' = 'es'): string => {
    const image = getImageById(id);
    if (!image) return '';
    return lang === 'es' ? image.description_es : image.description_en;
};

// Exportar todas las imágenes
export const placeholderImages = data;

export default data;