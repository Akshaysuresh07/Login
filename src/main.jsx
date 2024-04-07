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
 <GoogleOAuthProvider clientId="1046038733074-9j5igj5tkjnvhr8imbdvnku4ppp06c3r.apps.googleusercontent.com"><App /></GoogleOAuthProvider>
  
</BrowserRouter>
  </React.StrictMode>,
)
