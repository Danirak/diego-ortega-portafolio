import { useState } from 'react';
import { AboutConfig, ProfileConfig } from '../types/config';
import { getImageUrl } from '../lib/placeholder-images';

interface AboutProps {
    about: AboutConfig;
    profile: ProfileConfig;
    isActive: boolean;
}

/**
 * About component que muestra información sobre el usuario
 * @param {AboutProps} props - Configuración de la sección About
 */
const About = ({ about, profile, isActive }: AboutProps) => {
    const [selectedSkill, setSelectedSkill] = useState<{ title: string; description: string } | null>(null);

    /**
     * Abre el modal con información de una habilidad
     * @param {string} title - Título de la habilidad
     * @param {string} description - Descripción de la habilidad
     */
    const openSkillModal = (title: string, description: string) => {
        setSelectedSkill({ title, description });
    };

    /**
     * Cierra el modal de habilidades
     */
    const closeSkillModal = () => {
        setSelectedSkill(null);
    };

    const paragraphs = about.PRESENTATION.description.split('\n\n');

    return (
        <article className={`about ${isActive ? 'active' : ''}`} data-page="about">
            <header>
                <h2 className="h2 article-title">{about.HEADER.label}</h2>
            </header>

            {/* PRESENTATION */}
            <section className="about-text">
                {paragraphs.map((paragraph, index) => (
                    paragraph.trim() && <p key={index}>{paragraph}</p>
                ))}
            </section>

            {/* DOING */}
            {about.DOING.enabled && (
                <section className="service">
                    <h3 className="h3 service-title">{about.DOING.label}</h3>
                    <ul className="service-list">
                        {about.DOING.items.map((item, index) => (
                            <li className="service-item" key={index}>
                                <div className="service-icon-box">
                                    <img src={item.icon} alt="design icon" width="30" height="30" />
                                </div>
                                <div className="service-content-box">
                                    <h4 className="h4 service-item-title">{item.title}</h4>
                                    <p className="service-item-text">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* SKILLS */}
            {about.SKILLS.enabled && (
                <section className="testimonials">
                    <h3 className="h3 testimonials-title">{about.SKILLS.label}</h3>
                    <ul className="testimonials-list has-scrollbar">
                        {about.SKILLS.items.map((item, index) => (
                            <li className="testimonials-item" key={index}>
                                <div
                                    className="content-card"
                                    data-testimonials-item
                                    onClick={() => openSkillModal(item.title, item.description)}
                                >
                                    <figure className="testimonials-avatar-box">
                                        <img src={item.icon} alt={item.title} width="60" data-testimonials-avatar />
                                    </figure>
                                    <h4 className="h4 testimonials-item-title" data-testimonials-title>
                                        {item.title}
                                    </h4>
                                    <div className="testimonials-text" data-testimonials-text>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* MODAL */}
            {selectedSkill && (
                <div className="modal-container active" data-modal-container>
                    <div className="overlay active" data-overlay onClick={closeSkillModal}></div>
                    <section className="testimonials-modal">
                        <button className="modal-close-btn" data-modal-close-btn onClick={closeSkillModal}>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                        <div className="modal-img-wrapper">
                            <figure className="modal-avatar-box">
                                <img src={profile.USER.avatar} alt={profile.USER.name} width="80" data-modal-img />
                            </figure>
                            <img src={getImageUrl('icon-quote')} alt="quote icon" />
                        </div>
                        <div className="modal-content">
                            <h4 className="h3 modal-title" data-modal-title>
                                {selectedSkill.title}
                            </h4>
                            <div data-modal-text>
                                <p>{selectedSkill.description}</p>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {/* TECHNOLOGIES */}
            {about.TECHNOLOGIES.enabled && (
                <section className="clients">
                    <h3 className="h3 clients-title">{about.TECHNOLOGIES.label}</h3>
                    <ul className="clients-list has-scrollbar">
                        {about.TECHNOLOGIES.items.map((item, index) => (
                            <li className="clients-item" key={index}>
                                <a href="#">
                                    <img src={item.icon} alt={item.title} width="50" height="50" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </article>
    );
};

export default About;
