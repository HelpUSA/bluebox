// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import FabWhatsApp from "./components/FabWhatsApp";

export default function App() {
  return (
    <Router>
      <Header />
      {/* compensa a altura do header fixo (h-16 → 64px) */}
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* rotas futuras:
          <Route path="/servicos/polimento" element={<Polimento />} />
          <Route path="/servicos/higienizacao" element={<Higienizacao />} />
          */}
        </Routes>
      </main>

      <FabWhatsApp />
    </Router>
  );
}
