import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ContextProvider } from './components/Context/Context.tsx'
// import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
 
   <ContextProvider>
    <App />
    </ContextProvider>
   
 
)
