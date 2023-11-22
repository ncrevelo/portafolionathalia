import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './screens/App.tsx'
import './styles/index.css'
import './i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
