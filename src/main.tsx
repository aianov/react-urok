import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../src/assets/styles/reset.scss'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
