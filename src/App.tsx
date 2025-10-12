import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Analytics from './components/Analytics';
import MuscadineBanner from './components/MuscadineBanner';
import MuscadineHome from './components/MuscadineHome';
import BitcoinPage from './components/BitcoinPage';
import DeFiPage from './components/DeFiPage';
import ContactPage from './components/ContactPage';
import NodePage from './components/NodePage';
import CryptoGuidePage from './components/CryptoGuidePage';
import SolutionsPage from './components/SolutionsPage';
import MuscadineFooter from './components/MuscadineFooter';
import ScrollToTop from './components/ScrollToTop';
import LegalPage from './components/LegalPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import DisclaimerPage from './components/DisclaimerPage';


function App() {
  return (
    <ErrorBoundary>
      <Analytics pageName="defi-dashboard" />
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <MuscadineBanner />
          <main className="flex-1 max-w-6xl mx-auto px-4 pt-20">
            <Routes>
              <Route path="/" element={<MuscadineHome />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/bitcoin" element={<BitcoinPage />} />
              <Route path="/defi" element={<DeFiPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/node" element={<NodePage />} />
              <Route path="/cryptoguide" element={<CryptoGuidePage />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
            </Routes>
          </main>
          <MuscadineFooter />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App; 