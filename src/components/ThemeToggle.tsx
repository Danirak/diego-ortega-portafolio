import { useState } from 'react';
import { isDaytime } from '../lib/theme-init';

/**
 * ThemeToggle component para cambiar entre tema día y noche
 * Detecta automáticamente el tema según la hora local
 */
const ThemeToggle = () => {
    // Inicializar con el tema correcto desde el principio
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        return !isDaytime();
    };

    const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

    /**
     * Toggle del tema
     */
    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);

        if (newTheme) {
            // Modo oscuro (default)
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            // Modo claro
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={isDarkMode ? 'Cambiar a modo día' : 'Cambiar a modo noche'}
        >
            <ion-icon name={isDarkMode ? 'sunny-outline' : 'moon-outline'}></ion-icon>
        </button>
    );
};

export default ThemeToggle;
