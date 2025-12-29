import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import OurWorkPage from './pages/OurWorkPage';
import RefSheetsPage from './pages/services/RefSheetsPage';
import DrawingsPage from './pages/services/DrawingsPage';
import IconsPage from './pages/services/IconsPage';
import StickersPage from './pages/services/StickersPage';
import FAQPage from './pages/FAQPage';
import PridePage from './pages/PridePage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/services/refsheets" element={<RefSheetsPage />} />
          <Route path="/services/drawings" element={<DrawingsPage />} />
          <Route path="/services/icons" element={<IconsPage />} />
          <Route path="/services/stickers" element={<StickersPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/pride" element={<PridePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

