import React from "react";

export default function Home() {
  return (
    <div className="text-center">
      <header className="bg-blue-900 text-white p-6 shadow">
        <h1 className="text-4xl font-bold">Blue Box</h1>
        <p className="text-sm">Estética Automotiva • João Pessoa - PB</p>
      </header>

      <main className="p-6">
        <section className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Nossos Serviços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Lavagem",
              "Higienização",
              "Revitalização",
              "Condicionamento",
              "Aplicação de cera",
              "Descontaminação de vidros"
            ].map((servico, i) => (
              <div key={i} className="bg-gray-100 p-4 rounded shadow">
                {servico}
              </div>
            ))}
          </div>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold mb-2">Horário de Funcionamento</h2>
          <p>🕘 Segunda a sábado: 07h às 16h</p>
          <p>❌ Domingo: Fechado</p>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold mb-2">Contato</h2>
          <p>📍 Avenida Presidente Washington Luís, 713, Bessa – João Pessoa - PB</p>
          <p>
            📱 WhatsApp:{" "}
            <a href="https://wa.me/558388948383" className="text-blue-600 underline">
              Clique para conversar
            </a>
          </p>
          <p>
            📸 Instagram:{" "}
            <a href="https://www.instagram.com/blueboxbb/" className="text-blue-600 underline">
              @blueboxbb
            </a>
          </p>
        </section>
      </main>

      <footer className="bg-gray-200 py-4 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Blue Box - Todos os direitos reservados.
      </footer>
    </div>
  );
}
