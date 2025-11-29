import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { portfolioConfig } from './data';
import './css/style.css';

/**
 * App component principal que maneja la navegación y renderiza todos los componentes
 */
function App() {
    const [activePage, setActivePage] = useState('about');

    /**
     * Valida si una página existe
     */
    const isValidPage = (page: string): boolean => {
        const validPages = ['about', 'resume', 'portfolio'];
        return validPages.includes(page.toLowerCase());
    };

    /**
     * Sincroniza la página activa con el hash de la URL
     */
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1); // Remover el '#'
            if (hash && isValidPage(hash)) {
                setActivePage(hash.toLowerCase());
            } else {
                // Si el hash no es válido o está vacío, redirigir a 'about'
                window.location.hash = 'about';
                setActivePage('about');
            }
        };

        // Verificar al cargar
        handleHashChange();

        // Escuchar cambios en el hash
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    /**
     * Maneja el cambio de página activa
     * @param {string} page - Nombre de la página a activar
     */
    const handlePageChange = (page: string) => {
        const pageLower = page.toLowerCase();
        if (isValidPage(pageLower)) {
            setActivePage(pageLower);
            window.location.hash = pageLower;
        }
    };

    return (
        <main>
            <Sidebar profile={portfolioConfig.profile} />
            <div className="main-content">
                <Navbar
                    navbar={portfolioConfig.navbar}
                    activePage={activePage}
                    onPageChange={handlePageChange}
                />
                <About
                    about={portfolioConfig.about}
                    profile={portfolioConfig.profile}
                    isActive={activePage === 'about'}
                />
                <Resume
                    resume={portfolioConfig.resume}
                    isActive={activePage === 'resume'}
                />
                <Projects
                    projects={portfolioConfig.projects}
                    isActive={activePage === 'portfolio'}
                />
            </div>
        </main>
    );
}

export default App;
