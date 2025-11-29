import React from 'react'
import ReactDOM from 'react-dom/client'
import './lib/theme-init'  // Inicializar tema ANTES de renderizar
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
