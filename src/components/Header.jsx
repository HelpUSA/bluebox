// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 text-white shadow">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/bluebox.png"
            alt="Blue Box"
            className="h-10 w-auto"
            loading="eager"
          />
          <span className="text-xl font-semibold tracking-tight">
            Blue Box
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-[15px]">
          <a href="#servicos" className="hover:text-blue-300">Serviços</a>
          <a href="#horarios" className="hover:text-blue-300">Horário</a>
          <a href="#contato" className="hover:text-blue-300">Contato</a>
          <a
            href="https://wa.me/558388948383?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento."
            className="bg-white text-[#1e3fa9] px-4 py-2 rounded-lg font-medium hover:opacity-90"
            target="_blank" rel="noreferrer"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
