import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Seo from './components/Seo'
import './index.css'
import { Toaster } from 'react-hot-toast'  // Global toast container

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Seo />
    <App />
    <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
  </React.StrictMode>,
)
