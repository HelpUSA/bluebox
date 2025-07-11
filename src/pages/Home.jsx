import React from "react";

export default function Home() {
  return (
    <div className="text-center">
      <header className="bg-blue-900 text-white p-4">
        <h1 className="text-3xl font-bold">Blue Box</h1>
        <p className="text-sm">Lava Jato e Estética Automotiva</p>
      </header>
      <main className="p-4">
        <section className="my-6">
          <h2 className="text-xl font-semibold mb-2">Serviços</h2>
          <ul className="grid grid-cols-2 gap-4">
            <li className="bg-gray-100 p-4 rounded shadow">Lavagem</li>
            <li className="bg-gray-100 p-4 rounded shadow">Higienização</li>
            <li className="bg-gray-100 p-4 rounded shadow">Revitalização</li>
            <li className="bg-gray-100 p-4 rounded shadow">Condicionamento</li>
            <li className="bg-gray-100 p-4 rounded shadow">Cera Protetora</li>
            <li className="bg-gray-100 p-4 rounded shadow">Descontaminação de Vidros</li>
          </ul>
        </section>
        <section className="my-6">
          <h2 className="text-xl font-semibold mb-2">Horário de Funcionamento</h2>
          <p>Segunda a Sábado: 07h às 16h</p>
          <p>Domingo: Fechado</p>
        </section>
        <section className="my-6">
          <h2 className="text-xl font-semibold mb-2">Contato</h2>
          <p>WhatsApp: <a href="https://wa.me/558388948383" className="text-blue-600">Clique aqui</a></p>
          <p>Endereço: Avenida Presidente Washington Luís, 713, Bessa – João Pessoa - PB</p>
        </section>
      </main>
      <footer className="bg-gray-200 p-4 text-sm text-gray-700">
        &copy; {new Date().getFullYear()} Blue Box - Todos os direitos reservados.
      </footer>
    </div>
  );
}