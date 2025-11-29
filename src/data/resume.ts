import { ResumeConfig } from '../types/config';

export const resumeConfig: ResumeConfig = {
    HEADER: {
        label: "Currículum"
    },
    EDUCATION: {
        enabled: true,
        label: "Educación",
        items: [
            {
                period: "2015 — 2021",
                institution: "Universidad Católica del Norte",
                description: "Ingeniería Civil en Computación e Informática. Desarrollo de proyecto de título modernizando el sistema de gestión de créditos universitarios con arquitectura web, Laravel y SQL Server."
            }
        ]
    },
    EXPERIENCE: {
        enabled: true,
        label: "Experiencia",
        items: [
            {
                period: "Ene 2019 — Mar 2019",
                position: "Ingeniero en Práctica Profesional — ACT S.A.",
                description: "Desarrollo de módulos de software y ejecución de QA para asegurar estabilidad de entregables. Colaboración en proyectos de desarrollo web y aplicaciones empresariales."
            },
            {
                period: "Ene 2020 — Mar 2020",
                position: "Ingeniero en Práctica Profesional — INGERAS Mining",
                description: "Desarrollo de sistemas de control de compensaciones y gestión de reportes. Mantenimiento evolutivo de plataformas web corporativas para apoyo en decisiones gerenciales."
            },
            {
                period: "Mar 2021 — Dic 2021",
                position: "Ingeniero de Proyectos (Proyecto de Título) — Universidad Católica del Norte",
                description: "Modernización del sistema de gestión de créditos universitarios. Desarrollo Full Stack con Laravel y SQL Server. Implementación de módulos de reportabilidad automatizada para auditorías y control de gestión."
            },
            {
                period: "Jun 2022 — Presente",
                position: "Analista de I+D TI — SQM Industrial S.A.",
                description: "Liderazgo técnico de proyectos de innovación en IoT, Cloud, automatización y analítica. Implementación de telemetría LoRaWAN en pilas de lixiviación y pozas de cosecha; integración de drones autónomos DJI Dock 3 con cámaras térmicas; y desarrollo de pipelines de datos con PostgreSQL, Databricks y Data Lake. Visualización avanzada con Power BI, Grafana y TagoIO. Stack: Azure, Python, Laravel, React, PostgreSQL, Databricks, Data Lake, Power BI, Grafana, TagoIO, Docker, n8n."
            }
        ]
    },
    LANGUAGES: {
        enabled: true,
        display_progress_bars: true,
        display_percentage_values: true,
        label: "Idiomas",
        items: [
            { language: "Inglés", proficiency: "70%" }
        ]
    },
    SKILLS: {
        enabled: true,
        display_progress_bars: true,
        display_percentage_values: true,
        label: "Habilidades Técnicas",
        items: [
            { skill: "Full Stack Development", proficiency: "80%" },
            { skill: "Azure & Cloud", proficiency: "70%" },
            { skill: "IoT & LoRaWAN", proficiency: "90%" },
            { skill: "SQL & Databases", proficiency: "70%" },
            { skill: "React & Frontend", proficiency: "75%" },
            { skill: "Docker & DevOps", proficiency: "80%" },
            { skill: "Power BI & Analytics", proficiency: "60%" },
            { skill: "Project Management", proficiency: "70%" },
            { skill: "Automation & n8n", proficiency: "65%" },
        ]
    }
};
