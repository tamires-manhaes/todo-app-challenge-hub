import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './contexts/Theme/index.tsx'
import { myTheme } from './theme/index.ts'
import ToDoProvider from './contexts/ToDo/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <ToDoProvider>
        <App />
      </ToDoProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
