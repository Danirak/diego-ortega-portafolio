import { ResumeConfig } from '../types/config';

interface ResumeProps {
    resume: ResumeConfig;
    isActive: boolean;
}

/**
 * Resume component que muestra educación, experiencia y habilidades
 * @param {ResumeProps} props - Configuración del resume
 */
const Resume = ({ resume, isActive }: ResumeProps) => {
    return (
        <article className={`resume ${isActive ? 'active' : ''}`} data-page="resume">
            <header>
                <h2 className="h2 article-title">{resume.HEADER.label}</h2>
            </header>

            {/* EDUCATION */}
            {resume.EDUCATION.enabled && (
                <section className="timeline">
                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="book-outline"></ion-icon>
                        </div>
                        <h3 className="h3">{resume.EDUCATION.label}</h3>
                    </div>
                    <ol className="timeline-list">
                        {[...resume.EDUCATION.items].reverse().map((item, index) => (
                            <li className="timeline-item" key={index}>
                                <h4 className="h4 timeline-item-title">{item.institution}</h4>
                                <span>{item.period}</span>
                                <p className="timeline-text">{item.description}</p>
                            </li>
                        ))}
                    </ol>
                </section>
            )}

            {/* EXPERIENCE */}
            {resume.EXPERIENCE.enabled && (
                <section className="timeline">
                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="book-outline"></ion-icon>
                        </div>
                        <h3 className="h3">{resume.EXPERIENCE.label}</h3>
                    </div>
                    <ol className="timeline-list">
                        {[...resume.EXPERIENCE.items].reverse().map((item, index) => (
                            <li className="timeline-item" key={index}>
                                <h4 className="h4 timeline-item-title">{item.position}</h4>
                                <span>{item.period}</span>
                                <p className="timeline-text">{item.description}</p>
                            </li>
                        ))}
                    </ol>
                </section>
            )}

            {/* LANGUAGES */}
            {resume.LANGUAGES.enabled && (
                <section className="skill">
                    <h3 className="h3 skills-title">{resume.LANGUAGES.label}</h3>
                    <ul className="skills-list content-card">
                        {resume.LANGUAGES.items.map((item, index) => (
                            <li className="skills-item" key={index}>
                                <div className="title-wrapper">
                                    <h5 className="h5">{item.language}</h5>
                                    {resume.LANGUAGES.display_percentage_values && (
                                        <data value={item.proficiency.replace('%', '')}>{item.proficiency}</data>
                                    )}
                                </div>
                                {resume.LANGUAGES.display_progress_bars && (
                                    <div className="skill-progress-bg">
                                        <div className="skill-progress-fill" style={{ width: item.proficiency }}></div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* SKILLS */}
            {resume.SKILLS.enabled && (
                <section className="skill">
                    <h3 className="h3 skills-title">{resume.SKILLS.label}</h3>
                    <ul className="skills-list content-card">
                        {resume.SKILLS.items.map((item, index) => (
                            <li className="skills-item" key={index}>
                                <div className="title-wrapper">
                                    <h5 className="h5">{item.skill}</h5>
                                    {resume.SKILLS.display_percentage_values && (
                                        <data value={item.proficiency.replace('%', '')}>{item.proficiency}</data>
                                    )}
                                </div>
                                {resume.SKILLS.display_progress_bars && (
                                    <div className="skill-progress-bg">
                                        <div className="skill-progress-fill" style={{ width: item.proficiency }}></div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </article>
    );
};

export default Resume;
