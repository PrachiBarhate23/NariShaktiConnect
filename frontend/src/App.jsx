import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Import pages
import FindHelp from "./pages/FindHelp";
import Resources from "./pages/Resources";
import SafetyTips from "./pages/SafetyTips";
import ReportIncident from "./pages/ReportIncident";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Welcome to NariShaktiConnect</h1>} />
        <Route path="/find-help" element={<FindHelp />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/safety-tips" element={<SafetyTips />} />
        <Route path="/report-incident" element={<ReportIncident />} />
      </Routes>
    </Router>
  );
}

export default App;
