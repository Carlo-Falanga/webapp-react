import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Supports weights 100-900
import '@fontsource-variable/inter/wght.css';
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
