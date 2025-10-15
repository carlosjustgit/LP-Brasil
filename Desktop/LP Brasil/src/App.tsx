import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import BrazilLandingPage from './pages/landing/br/BrazilLandingPage'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/br" element={<BrazilLandingPage />} />
          <Route path="/" element={<Navigate to="/br" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App

