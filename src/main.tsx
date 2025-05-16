import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import people from '../test/people';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App people={people} />
  </StrictMode>,
)
