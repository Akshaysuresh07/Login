import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <BrowserRouter>  
 <GoogleOAuthProvider clientId="954394503866-2b78550ve1dsvj6ns45ml3fl88330d1h.apps.googleusercontent.com"><App /></GoogleOAuthProvider>
  
</BrowserRouter>
  </React.StrictMode>,
)
