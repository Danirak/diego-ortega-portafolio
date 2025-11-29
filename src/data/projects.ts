import type { ProjectsConfig } from '../types/config';
import { getImageUrl } from '../lib/placeholder-images';

export const projectsConfig: ProjectsConfig = {
    HEADER: {
        label: "Portfolio"
    },
    PROJECTS: [
        {
            title: "Telemetría IoT",
            category: "IoT & Cloud",
            image: getImageUrl('project-1'),
            url: "#"
        },
        {
            title: "GeoIntegrate",
            category: "IoT e Integración",
            image: getImageUrl('project-5'),
            url: "#"
        },
        {
            title: "Sitio Corporativo JMServicios SPA",
            category: "Desarrollo Web",
            image: getImageUrl('jmservicios-web'),
            url: "https://www.jm-servicios.cl"
        },
    ]
};
