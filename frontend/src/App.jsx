import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/NariShaktiConnect"; 
import OurWork from "./pages/OurWork";
import Resources from "./pages/Resources";
import MyRights from "./pages/MyRightsPage";
import SafetyTips from "./pages/SafetyTips";
import FindHelp from "./pages/FindHelp";
import ReportIncident from "./pages/ReportIncident";
import NariShaktiConnect from "./pages/NariShaktiConnect";

function App() {
  return (
    <Router>
      {/* Navbar visible on every page */}
      <Navbar />

      {/* Routes for pages */}
      <Routes>
        <Route path="/" element={<NariShaktiConnect />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/my-rights" element={<MyRights />} />
        <Route path="/safety-tips" element={<SafetyTips />} />
        <Route path="/find-help" element={<FindHelp />} />
        <Route path="/report-incident" element={<ReportIncident />} />
      </Routes>

      {/* Footer visible on every page */}
      <Footer />
    </Router>
  );
}

export default App;
