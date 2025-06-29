import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App_provider from './Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App_provider>
      <App />
    </App_provider>
  </StrictMode>,
)
