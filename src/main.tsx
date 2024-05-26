import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='flex flex-col justify-center align-middle gap-2'>
      <h1 className='text-3xl font-bold'>Task Manager</h1>
      <App />
    </div>
  </React.StrictMode>,
)
