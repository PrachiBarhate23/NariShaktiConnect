import React from "react";
import Navbar from "./components/Navbar";
import ReportIncident from "./pages/ReportIncident";
import Resources from "./pages/Resources"; // Add this import
import SafetyTips from "./pages/SafetyTips"; // Add this import
import Footer from "./components/Footer";
import Landing from "./pages/NariShaktiConnect";
import Accessibility from "./pages/Accessibility";

function App() {
  return (
    <div>
      {/* Navbar visible on every page */}
      <Navbar />

      <Accessibility />
      <Footer />

    </div>
  );
}

export default App;