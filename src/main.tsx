import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from 'styles/GlobalStyles'
import App from './App'
import { AtomProvider } from './contexts/AtomContext'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <AtomProvider>
      <App />
    </AtomProvider>
  </StrictMode>,
)
