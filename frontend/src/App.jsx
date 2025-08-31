import React from "react";
import Navbar from "./components/Navbar";
import ReportIncident from "./pages/ReportIncident"; // if you already made this page

function App() {
  return (
    <div>
      {/* Navbar visible on every page */}
      <Navbar />

      {/* Your main content */}
      <ReportIncident />
    </div>
  );
}

export default App;

