import { useState } from 'react';
import { ProfileConfig } from '../types/config';
import ThemeToggle from './ThemeToggle';

interface SidebarProps {
    profile: ProfileConfig;
}

/**
 * Sidebar component que muestra información del perfil del usuario
 * @param {SidebarProps} props - Configuración del perfil
 */
const Sidebar = ({ profile }: SidebarProps) => {
    const [isActive, setIsActive] = useState(false);

    /**
     * Toggle de visibilidad de información adicional del sidebar
     */
    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    return (
        <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={profile.USER.avatar} alt={profile.USER.name} width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title={profile.USER.name}>
                        {profile.USER.name}
                    </h1>
                    <p className="title">{profile.USER.role}</p>
                </div>
                <ThemeToggle />
                <button className="info_more-btn" data-sidebar-btn onClick={toggleSidebar}>
                    <span>{profile.HEADER.label}</span>
                    <ion-icon name="chevron-down"></ion-icon>
                </button>
            </div>

            <div className="sidebar-info_more">
                <div className="separator"></div>
                <ul className="contacts-list">
                    {profile.INFO.map((info, index) => (
                        <li className="contact-item" key={index}>
                            <div className="icon-box">
                                <ion-icon name={info.icon}></ion-icon>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">{info.label}</p>
                                <a href="#" className="contact-link">
                                    {info.value}
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="separator"></div>

                <ul className="social-list">
                    {profile.SOCIAL.map((social, index) => (
                        <li className="social-item" key={index}>
                            <a href={social.url} className="social-link" target="_blank" rel="noopener noreferrer">
                                <ion-icon name={social.icon}></ion-icon>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
