import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProviderContext } from './context/Theme/ThemeContext'
import { Toaster } from 'sonner'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProviderContext>
    <Toaster
        toastOptions={{
          style: {
            fontSize: '1.8rem',
            fontWeight: 500,
            fontFamily: 'Montserrat, sans-serif'
          }
        }}
        position='bottom-right'
        closeButton
        duration={3000}
        richColors
        />
      <App />
    </ThemeProviderContext>
  </React.StrictMode>
)
