import type { ProfileConfig } from '../types/config';
import { getImageUrl } from '../lib/placeholder-images';

export const profileConfig: ProfileConfig = {
    HEADER: {
        label: "Mostrar Contactos"
    },
    USER: {
        role: "Analista de I+D",
        name: "Diego Andrés Ortega Araya",
        username: "diegoortega",
        avatar: getImageUrl('yo-ia')
    },
    INFO: [
        {
            label: "Correo",
            value: "11.diego.ortega@gmail.com",
            icon: "mail-outline"
        },
        {
            label: "Teléfono",
            value: "+56 9 6344 5586",
            icon: "phone-portrait-outline"
        },
        {
            label: "Ubicación",
            value: "Santiago, Chile",
            icon: "location-outline"
        }
    ],
    SOCIAL: [
        {
            icon: "logo-linkedin",
            url: "https://www.linkedin.com/in/diego-ortega-5801b2206"
        },
        {
            icon: "logo-github",
            url: "https://github.com/diegoortega"
        }
    ]
};
