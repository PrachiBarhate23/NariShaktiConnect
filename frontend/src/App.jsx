import React from "react";
import Navbar from "./components/Navbar";
import FindHelp from "./pages/FindHelp";
import Resources from "./pages/Resources"; // Add this import
import SafetyTips from "./pages/SafetyTips"; // Add this import

function App() {
  return (
    <div>
      {/* Navbar visible on every page */}
      <Navbar />

      {/* Your main content */}
      <FindHelp />
      <Resources />      {/* Add Resources page */}
      <SafetyTips />     {/* Add Safety Tips page */}
    </div>
  );
}

export default App;