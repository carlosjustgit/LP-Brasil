import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import BrazilLandingPage from './pages/landing/br/BrazilLandingPage'
import PrivacyPage from './pages/legal/PrivacyPage'
import TermsPage from './pages/legal/TermsPage'
import CookiesPage from './pages/legal/CookiesPage'
import LGPDPage from './pages/legal/LGPDPage'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing Pages */}
          <Route path="/br" element={<BrazilLandingPage />} />
          
          {/* Legal Pages */}
          <Route path="/privacidade" element={<PrivacyPage />} />
          <Route path="/termos" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/lgpd" element={<LGPDPage />} />
          
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/br" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App

