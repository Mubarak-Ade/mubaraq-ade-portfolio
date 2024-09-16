import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/react"
import AppContext from './components/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext>
    <App />
  </AppContext>
)
