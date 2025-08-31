import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import NariShaktiConnect from "./pages/NariShaktiConnect"; 
import OurWork from "./pages/OurWork";
import Resources from "./pages/Resources";
import MyRights from "./pages/MyRightsPage";
import SafetyTips from "./pages/SafetyTips";
import FindHelp from "./pages/FindHelp";
import ReportIncident from "./pages/ReportIncident";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Accessibility from "./pages/Accessibility";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<NariShaktiConnect />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/my-rights" element={<MyRights />} />
        <Route path="/safety-tips" element={<SafetyTips />} />
        <Route path="/find-help" element={<FindHelp />} />
        <Route path="/report-incident" element={<ReportIncident />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/accessibility" element={<Accessibility />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
