import React from "react";
import Navbar from "./components/Navbar";
import FindHelp from "./pages/FindHelp"; // if you already made this page

function App() {
  return (
    <div>
      {/* Navbar visible on every page */}
      <Navbar />

      {/* Your main content */}
      <FindHelp />
    </div>
  );
}

export default App;

