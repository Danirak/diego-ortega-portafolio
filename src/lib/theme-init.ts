/**
 * Determina si es horario de día (6:00 AM - 6:00 PM)
 * @returns {boolean} true si es de día, false si es de noche
 */
export const isDaytime = (): boolean => {
    const currentHour = new Date().getHours();
    return currentHour >= 6 && currentHour < 18;
};

/**
 * Inicializa el tema ANTES de que React renderice para evitar parpadeo
 * Esta función debe ejecutarse de forma síncrona en el HTML
 */
export const initTheme = (): void => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        // Si hay preferencia guardada, usarla
        if (savedTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    } else {
        // Si no hay preferencia, usar hora del día
        const shouldBeLightMode = isDaytime();
        if (shouldBeLightMode) {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }
};

// Ejecutar inmediatamente al cargar el módulo
initTheme();
