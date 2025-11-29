import { AboutConfig } from '../types/config';
import { getImageUrl } from '../lib/placeholder-images';

export const aboutConfig: AboutConfig = {
    HEADER: {
        label: "Sobre mí"
    },
    PRESENTATION: {
        description: "Ingeniero Civil en Computación e Informática con trayectoria en I+D para el sector minero e industrial. Especializado en integrar soluciones de IoT, Cloud y Automatización para optimizar procesos productivos.\n\nExperiencia liderando equipos multidisciplinarios y gestionando el ciclo completo de proyectos (PoC → producción). Foco en transformar necesidades operativas en soluciones escalables con ecosistemas Azure, telemetría avanzada y analítica de datos."
    },
    DOING: {
        enabled: true,
        label: "Lo que hago",
        items: [
            {
                title: "IoT & Telemetría",
                icon: getImageUrl('icon-iot'),
                description: "Implementación de soluciones IoT con LoRaWAN y MQTT para monitoreo en tiempo real de procesos industriales y mineros."
            },
            {
                title: "Desarrollo Full Stack",
                icon: getImageUrl('icon-code'),
                description: "Desarrollo de aplicaciones completas: APIs y servicios backend + interfaces frontend + integraciones end-to-end."
            },
            {
                title: "Cloud & DevOps",
                icon: getImageUrl('icon-cloud-devops'),
                description: "Arquitectura y despliegue en Azure (App Services, IoT Hub, Functions) con Docker y CI/CD."
            },
            {
                title: "Análisis de Datos",
                icon: getImageUrl('icon-analytics'),
                description: "Análisis y visualización de datos con Power BI, Grafana y TagoIO, integrando información desde PostgreSQL, Databricks y Data Lake."
            }
        ]
    },
    SKILLS: {
        enabled: true,
        label: "Habilidades Blandas",
        items: [
            {
                title: "Liderazgo Técnico",
                icon: getImageUrl('icon-team'),
                description: "Capacidad para liderar equipos multidisciplinarios y coordinar con stakeholders internos y externos."
            },
            {
                title: "Gestión de Proyectos",
                icon: getImageUrl('icon-project-management'),
                description: "Experiencia en roadmaps, estimación de riesgos y puesta en producción de soluciones tecnológicas."
            },
            {
                title: "Resolución de Problemas",
                icon: getImageUrl('icon-bolt'),
                description: "Enfoque analítico para transformar necesidades operativas en soluciones técnicas escalables."
            },
            {
                title: "Comunicación Efectiva",
                icon: getImageUrl('icon-comment'),
                description: "Habilidad para comunicar ideas técnicas de forma clara a equipos técnicos y no técnicos."
            }
        ]
    },
    TECHNOLOGIES: {
        enabled: true,
        label: "Tecnologías",
        items: [
            { title: "Python", icon: getImageUrl('icon-python') },
            { title: "Azure", icon: getImageUrl('icon-azure') },
            { title: "Grafana", icon: getImageUrl('icon-grafana') },
            { title: "n8n", icon: getImageUrl('icon-n8n') },
            { title: "Git", icon: getImageUrl('icon-git') },
            { title: "LoRaWAN", icon: getImageUrl('icon-lorawan') },
            { title: "PostgreSQL", icon: getImageUrl('icon-postgresql') },
            { title: "Docker", icon: getImageUrl('icon-docker') },
            { title: "Laravel", icon: getImageUrl('icon-laravel') },
            { title: "Databricks", icon: getImageUrl('icon-databricks') },
            { title: "React", icon: getImageUrl('icon-react') },
            { title: "Power BI", icon: getImageUrl('icon-powerbi') },
        ]
    }
};
