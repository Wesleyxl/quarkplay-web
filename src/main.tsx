import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from 'styles/GlobalStyles'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
