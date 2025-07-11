// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-center">
      <header className="bg-blue-800 text-white py-6">
        <h1 className="text-4xl font-bold">Blue Box</h1>
        <p className="text-lg mt-1">Estética Automotiva • João Pessoa - PB</p>
      </header>

      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Nossos Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {[
            "Lavagem",
            "Higienização",
            "Revitalização",
            "Condicionamento",
            "Aplicação de cera",
            "Descontaminação de vidros",
          ].map((servico) => (
            <div
              key={servico}
              className="bg-gray-100 shadow rounded p-4 text-lg"
            >
              {servico}
            </div>
          ))}
        </div>
      </section>

      <section className="py-6 text-lg">
        <h2 className="text-2xl font-semibold mb-2">Horário de Funcionamento</h2>
        <p>🕒 Segunda a sábado: 07h às 16h</p>
        <p className="text-red-600 mt-1">❌ Domingo: Fechado</p>
      </section>

      <section className="py-6 text-lg">
        <h2 className="text-2xl font-semibold mb-2">Contato</h2>
        <p>📍 Avenida Presidente Washington Luís, 713, Bessa – João Pessoa - PB</p>
        <p>
          📱 WhatsApp:{" "}
          <a
            href="https://wa.me/558388948383"
            className="text-blue-600 underline"
            target="_blank"
            rel="noreferrer"
          >
            Clique para conversar
          </a>
        </p>
        <p>
          📸 Instagram:{" "}
          <a
            href="https://www.instagram.com/blueboxbb/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noreferrer"
          >
            @blueboxbb
          </a>
        </p>
      </section>

      <footer className="text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Blue Box - Todos os direitos reservados.
      </footer>
    </div>
  );
}
