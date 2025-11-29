import { NavbarConfig } from '../types/config';

interface NavbarProps {
    navbar: NavbarConfig;
    activePage: string;
    onPageChange: (page: string) => void;
}

/**
 * Navbar component para navegación entre páginas
 * @param {NavbarProps} props - Configuración del navbar y handlers
 */
const Navbar = ({ navbar, activePage, onPageChange }: NavbarProps) => {
    /**
     * Mapeo de labels en español a IDs de página
     */
    const labelToPageId: Record<string, string> = {
        'Sobre mí': 'about',
        'Currículum': 'resume',
        'Portafolio': 'portfolio',
        'About': 'about',
        'Resume': 'resume',
        'Portfolio': 'portfolio'
    };

    /**
     * Maneja el cambio de página activa
     * @param {string} label - Label del botón clickeado
     */
    const handlePageChange = (label: string) => {
        const pageId = labelToPageId[label] || label.toLowerCase();
        onPageChange(pageId);
        window.scrollTo(0, 0);
    };

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navbar.NAVBAR.map((item, index) => {
                    const pageId = labelToPageId[item.label] || item.label.toLowerCase();
                    return (
                        <li className="navbar-item" key={index}>
                            <button
                                className={`navbar-link ${activePage === pageId ? 'active' : ''}`}
                                data-nav-link
                                onClick={() => handlePageChange(item.label)}
                            >
                                {item.label}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
