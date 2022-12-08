import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { useGlobalContext } from './Components/GlobalContext'
import LeftContent from './Components/OverLay/LeftContent'
import "./index.css" 






ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />    
  </React.StrictMode>
)
