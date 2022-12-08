import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LeftContent from './Components/OverLay/LeftContent'
import "./index.css" 

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <LeftContent active={true} headerText={'BoxFolio'} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Overlay />
  </React.StrictMode>
)
