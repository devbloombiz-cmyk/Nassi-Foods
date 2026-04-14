import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Seo from './components/Seo'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Seo />
    <App />
  </React.StrictMode>,
)
