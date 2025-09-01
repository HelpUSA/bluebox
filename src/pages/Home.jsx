// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import GalleryVideos from "../components/GalleryVideos";

export default function Home() {
  // vídeos de fundo (pasta /public)
  const bgVideos = ["/videobluebox.webm", "/video08.mov", "/video09.mp4", "/video10.mp4"];
  const [bgIndex, setBgIndex] = useState(0);

  // alterna a cada 8s
  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((i) => (i + 1) % bgVideos.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {/* ============================
          HERO: vídeos de fundo + imagem no canto
      ============================ */}
      <section
        id="home"
        className="relative h-[65vh] md:h-[72vh] flex items-center justify-center text-center text-white bg-black overflow-hidden"
      >
        {/* vídeo de fundo (alternando) */}
        <video
          key={bgVideos[bgIndex]} // força recarregar quando troca
          className="absolute inset-0 w-full h-full object-contain"
          src={bgVideos[bgIndex]}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />

        {/* overlay escuro para contraste */}
        <div className="absolute inset-0 bg-black/35" />

        {/* imagem no canto inferior direito */}
        <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
          <img
            src="/imagem01.png"
            alt="Blue Box"
            className="h-24 w-auto md:h-32 drop-shadow-2xl"
            loading="eager"
          />
        </div>

        {/* textos e CTAs */}
        <div className="relative z-20 px-4">
          <h1 className="text-2xl md:text-4xl font-extrabold">
            Estética Automotiva • João Pessoa - PB
          </h1>
          <p className="mt-3 text-white/90">
            Lavagem • Higienização • Revitalização • Condicionamento • Cera •
            Descontaminação de vidros
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#servicos"
              className="px-5 py-3 bg-white text-[#1e3fa9] rounded-lg font-semibold"
            >
              Ver serviços
            </a>
            <a
              href="https://wa.me/558388948383?text=Quero%20agendar%20um%20servi%C3%A7o%20na%20Blue%20Box"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-black/40 rounded-lg font-semibold border border-white/30"
            >
              Pedir orçamento
            </a>
          </div>
        </div>
      </section>

      {/* ============================
          SEÇÃO DE SERVIÇOS (grid cards)
      ============================ */}
      <section id="servicos" className="bg-[#f5f7fb]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-center text-3xl font-bold">Nossos Serviços</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: "Lavagem Completa", d: "Cuidado externo e interno." },
              { t: "Higienização", d: "Remoção de odores e ácaros." },
              { t: "Revitalização de Pintura", d: "Brilho e correção leve." },
              { t: "Condicionamento de Plásticos", d: "Proteção e acabamento." },
              { t: "Aplicação de Cera", d: "Proteção e brilho rápido." },
              { t: "Descontaminação de Vidros", d: "Visibilidade e segurança." },
            ].map((s) => (
              <div key={s.t} className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold">{s.t}</h3>
                <p className="mt-1 text-slate-600">{s.d}</p>
                <a
                  href={`https://wa.me/558388948383?text=Tenho%20interesse%20em%3A%20${encodeURIComponent(
                    s.t
                  )}`}
                  className="inline-block mt-4 text-[#1e3fa9] font-medium hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar orçamento →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================
          GALERIA DE VÍDEOS (3 por linha + popup)
      ============================ */}
      <section id="galeria" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-center text-3xl font-bold">Galeria de Vídeos</h2>
          <p className="text-center text-slate-600 mt-2">
            Antes e depois, processos e resultados reais da Blue Box.
          </p>

          <div className="mt-8">
            <GalleryVideos />
          </div>
        </div>
      </section>

      {/* ============================
          SEÇÃO HORÁRIOS
      ============================ */}
      <section id="horarios" className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold">Horário de Funcionamento</h2>
          <p className="text-center mt-3">
            Segunda a sábado: 07h às 16h • Domingo: Fechado
          </p>
        </div>
      </section>

      {/* ============================
          SEÇÃO CONTATO
      ============================ */}
      <section id="contato" className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold">Contato</h2>
            <ul className="mt-4 space-y-2">
              <li>
                Avenida Presidente Washington Luís, 713 – Bessa – João Pessoa/PB
              </li>
              <li>
                WhatsApp:{" "}
                <a
                  className="text-[#1e3fa9]"
                  href="https://wa.me/558388948383"
                  target="_blank"
                  rel="noreferrer"
                >
                  +55 83 8894-8383
                </a>
              </li>
              <li>
                Instagram:{" "}
                <a
                  className="text-[#1e3fa9]"
                  href="https://www.instagram.com/blueboxbb/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @blueboxbb
                </a>
              </li>
            </ul>
          </div>
          <iframe
            title="Mapa"
            className="w-full h-64 rounded-xl border"
            loading="lazy"
            src="https://www.google.com/maps?q=Avenida%20Presidente%20Washington%20Lu%C3%ADs%2C%20713%20Bessa%20Jo%C3%A3o%20Pessoa%20PB&output=embed"
          />
        </div>
      </section>
    </div>
  );
}
