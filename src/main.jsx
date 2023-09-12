import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider} from "@reduxjs/toolkit/query/react"
import {apiSlice} from './api/apiSlice.js'
import {BrowserRouter as Routes} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <Routes>
          <App />
      </Routes>
    </ApiProvider>
  </React.StrictMode>,
)
