// src/components/GalleryVideos.jsx
// Arquivos esperados em /public:
// - /video01antes.mp4
// - /video001depois.mp4
// - /video03.mp4
// - /video04.mp4
// - /video05.mp4
import React, { useEffect, useRef, useState } from "react";

export default function GalleryVideos() {
  const videos = [
    { src: "/video01antes.mp4", title: "Antes" },
    { src: "/video001depois.mp4", title: "Depois" },
    { src: "/video03.mp4", title: "Lavagem 1" },
    { src: "/video04.mp4", title: "Lavagem 2" },
    { src: "/video05.mp4", title: "Finalização" },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const backdropRef = useRef(null);

  const close = () => setOpenIndex(null);

  // fechar com ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight" && openIndex !== null)
        setOpenIndex((i) => (i + 1) % videos.length);
      if (e.key === "ArrowLeft" && openIndex !== null)
        setOpenIndex((i) => (i - 1 + videos.length) % videos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <div>
      {/* GRID 3 por linha */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((v, i) => (
          <button
            key={v.src}
            onClick={() => setOpenIndex(i)}
            className="group relative rounded-xl overflow-hidden shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`Abrir vídeo: ${v.title}`}
          >
            <video
              className="w-full h-56 object-cover"
              src={v.src}
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
            <span className="absolute bottom-2 left-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
              {v.title}
            </span>
          </button>
        ))}
      </div>

      {/* MODAL */}
      {openIndex !== null && (
        <div
          ref={backdropRef}
          onClick={(e) => {
            if (e.target === backdropRef.current) close();
          }}
          className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={close}
              className="absolute -top-10 right-0 text-white/90 hover:text-white text-lg"
              aria-label="Fechar vídeo"
            >
              ✕
            </button>

            {/* Botões anterior / próximo (setas) */}
            <button
              onClick={() =>
                setOpenIndex((i) => (i - 1 + videos.length) % videos.length)
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-3xl px-3"
              aria-label="Vídeo anterior"
            >
              ‹
            </button>
            <button
              onClick={() => setOpenIndex((i) => (i + 1) % videos.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-3xl px-3"
              aria-label="Próximo vídeo"
            >
              ›
            </button>

            <div className="rounded-xl overflow-hidden shadow-2xl bg-black">
              <video
                key={videos[openIndex].src}
                className="w-full h-[70vh] object-contain bg-black"
                src={videos[openIndex].src}
                controls
                autoPlay
                playsInline
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
