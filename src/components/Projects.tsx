import { useState } from 'react';
import { ProjectsConfig } from '../types/config';

interface ProjectsProps {
    projects: ProjectsConfig;
    isActive: boolean;
}

/**
 * Projects component que muestra el portfolio de proyectos
 * @param {ProjectsProps} props - Configuración de proyectos
 */
const Projects = ({ projects, isActive }: ProjectsProps) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    // Obtener categorías únicas
    const categories = Array.from(new Set(projects.PROJECTS.map(p => p.category)));

    /**
     * Filtra proyectos por categoría
     * @param {string} category - Categoría a filtrar
     */
    const handleFilterChange = (category: string) => {
        setSelectedCategory(category.toLowerCase());
        setIsSelectOpen(false);
    };

    /**
     * Toggle del selector de categorías en mobile
     */
    const toggleSelect = () => {
        setIsSelectOpen(!isSelectOpen);
    };

    /**
     * Determina si un proyecto debe mostrarse según el filtro activo
     * @param {string} category - Categoría del proyecto
     * @returns {boolean}
     */
    const shouldShowProject = (category: string) => {
        return selectedCategory === 'all' || selectedCategory === category.toLowerCase();
    };

    return (
        <article className={`portfolio ${isActive ? 'active' : ''}`} data-page="portfolio">
            <header>
                <h2 className="h2 article-title">{projects.HEADER.label}</h2>
            </header>

            <section className="projects">
                {/* Filter buttons for desktop */}
                <ul className="filter-list">
                    <li className="filter-item">
                        <button
                            className={selectedCategory === 'all' ? 'active' : ''}
                            data-filter-btn
                            onClick={() => handleFilterChange('all')}
                        >
                            All
                        </button>
                    </li>
                    {categories.map((category, index) => (
                        <li className="filter-item" key={index}>
                            <button
                                className={selectedCategory === category.toLowerCase() ? 'active' : ''}
                                data-filter-btn
                                onClick={() => handleFilterChange(category)}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Filter select for mobile */}
                <div className="filter-select-box">
                    <button className={`filter-select ${isSelectOpen ? 'active' : ''}`} data-select onClick={toggleSelect}>
                        <div className="select-value" data-selecct-value>
                            {selectedCategory === 'all' ? 'Select category' : selectedCategory}
                        </div>
                        <div className="select-icon">
                            <ion-icon name="chevron-down"></ion-icon>
                        </div>
                    </button>
                    <ul className="select-list">
                        <li className="select-item">
                            <button data-select-item onClick={() => handleFilterChange('all')}>
                                All
                            </button>
                        </li>
                        {categories.map((category, index) => (
                            <li className="select-item" key={index}>
                                <button data-select-item onClick={() => handleFilterChange(category)}>
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Projects list */}
                <ul className="project-list">
                    {projects.PROJECTS.map((item, index) => (
                        <li
                            className={`project-item ${shouldShowProject(item.category) ? 'active' : ''}`}
                            data-filter-item
                            data-category={item.category.toLowerCase()}
                            key={index}
                        >
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>
                                    <img src={item.image} alt={item.title} loading="lazy" />
                                </figure>
                                <h3 className="project-title">{item.title}</h3>
                                <p className="project-category">{item.category}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default Projects;
