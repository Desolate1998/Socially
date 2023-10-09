import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './Contexts/ThemeContext.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AlertProvider } from './Contexts/AlertContext.tsx';
import { IdentityProvider } from './Contexts/IdentityContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <IdentityProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
      </IdentityProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
