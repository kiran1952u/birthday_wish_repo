import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wish from "./components/wish"; // Import your Wish component
import SurprisePage from "./components/SurprisePage"; // Import the new page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wish />} />
        <Route path="/surprise" element={<SurprisePage />} />
      </Routes>
    </Router>
  );
}

export default App;