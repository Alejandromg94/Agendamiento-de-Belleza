import { useState, useRef } from "react";
import { Link } from "react-router-dom";

// Importa tus imágenes reales
import manicuraImg from "../assets/img/uñas2.jpeg";
import mascarillaImg from "../assets/img/mascarilla.jpeg";
import pestanasImg from "../assets/img/pestañas.jpeg";
import unasImg from "../assets/img/uñas1.jpeg";

const LandingPage = () => {
  const contactoRef = useRef(null);

  // Estados independientes para cada galería
  const [visorSede, setVisorSede] = useState(false);
  const [visorProductos, setVisorProductos] = useState(false);

  const scrollToContacto = () => {
    contactoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Datos de ejemplo para productos
  const productos = [
    {
      id: 1,
      nombre: "Semipermanente Premium",
      precio: "$55.000",
      img: unasImg,
      tag: "Best Seller",
    },
    {
      id: 2,
      nombre: "Extensión de Pestañas",
      precio: "$90.000",
      img: pestanasImg,
      tag: "Mirada",
    },
    {
      id: 3,
      nombre: "Limpieza Facial Profunda",
      precio: "$120.000",
      img: mascarillaImg,
      tag: "Skin Care",
    },
    {
      id: 4,
      nombre: "Diseño de Cejas",
      precio: "$35.000",
      img: pestanasImg,
      tag: "Beauty",
    },
  ];

  return (
    <div className="space-y-40 pb-20 bg-[#050505] font-sans relative overflow-hidden">
      {/* Orbes Globales de Fondo */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute middle-[50%] right-[-10%] w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px]"></div>

      {/* --- SECCIÓN HERO --- */}
      <section className="pt-24 px-6">
        <div className="relative overflow-hidden rounded-[5rem] bg-[#0A0A0A] border border-white/5 p-12 md:p-32 shadow-3xl min-h-[85vh] flex items-center">
          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-3xl font-black italic text-gold-gradient font-display">
                SV
              </span>
              <div className="h-8 w-[1px] bg-white/10"></div>
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-gray-500">
                Elite Beauty Studio
              </span>
            </div>
            <h1 className="text-8xl md:text-[11rem] font-black text-white uppercase tracking-tighter leading-[0.75] mb-12 font-display">
              LUXURY <br />
              <span className="text-gold-gradient italic">CATALOG</span>
            </h1>
            <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed font-medium uppercase tracking-widest text-[10px]">
              Especialistas en la arquitectura de tu mirada y la elegancia de tus manos. Un refugio de exclusividad en Bello, Antioquia.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/agendas"
                className="bg-gold-gradient text-black px-14 py-7 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] hover:scale-105 transition-all gold-shadow"
              >
                Reservar Ahora
              </Link>
              <Link
                to="/admin-panel"
                className="bg-white/5 text-white border border-white/10 px-14 py-7 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white/10 transition-all backdrop-blur-xl"
              >
                Panel Elite
              </Link>
              <button
                type="button"
                onClick={scrollToContacto}
                className="text-gray-500 hover:text-white px-8 py-7 font-black uppercase text-[10px] tracking-[0.3em] transition-all"
              >
                Ubicación
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 h-full w-1/2 hidden lg:block overflow-hidden">
            <img
              src={manicuraImg}
              className="w-full h-full object-cover scale-110 grayscale brightness-50 contrast-125"
              alt="Estética"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]"></div>
          </div>
        </div>
      </section>

      {/* --- 1. GALERÍA DE PRODUCTOS (Nuestros Servicios) --- */}
      <section className="px-8 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent mb-4 block">
              The Art of Perfection
            </span>
            <h2 className="text-6xl md:text-7xl font-black text-white uppercase tracking-tighter italic font-display">
              Nuestra <span className="text-gold-gradient">Colección</span>
            </h2>
          </div>
          <button
            onClick={() => setVisorProductos(true)}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 hover:text-white border-b border-gray-800 hover:border-accent pb-2 transition-all"
          >
            Explorar catálogo completo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {productos.map((prod) => (
            <div key={prod.id} className="group cursor-pointer">
              <div className="relative h-[600px] rounded-[4rem] overflow-hidden mb-10 shadow-3xl border-2 border-white/5 group-hover:border-accent/30 transition-all duration-700">
                <img
                  src={prod.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-90 group-hover:brightness-110"
                  alt={prod.nombre}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-2xl px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.4em] text-accent border border-white/10 shadow-2xl">
                  {prod.tag}
                </div>
                <div className="absolute bottom-10 left-10 right-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <p className="text-white font-display text-2xl font-black uppercase tracking-tighter leading-none mb-2">
                        {prod.nombre}
                    </p>
                    <p className="text-accent font-black text-xs tracking-[0.2em]">{prod.precio}</p>
                </div>
              </div>
              <div className="text-center md:text-left px-4 group-hover:opacity-0 transition-opacity">
                <h4 className="font-black text-2xl uppercase tracking-tighter text-white font-display">
                  {prod.nombre}
                </h4>
                <p className="text-accent font-black italic text-base mt-2 tracking-widest">{prod.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 2. GALERÍA DE LA SEDE (El Espacio) --- */}
      <section className="px-6 py-32 bg-[#0A0A0A] rounded-[6rem] mx-6 shadow-3xl relative overflow-hidden border border-white/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gold-gradient rounded-full blur-[180px] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.7em] text-accent mb-6 block">
              Architectural Design
            </span>
            <h2 className="text-7xl font-black text-white uppercase tracking-tighter italic font-display">
              El <span className="text-gold-gradient">Santuario</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[350px]">
            <div className="md:col-span-5 md:row-span-2 rounded-[4rem] overflow-hidden group border-2 border-white/10 shadow-2xl relative">
              <img
                src={manicuraImg}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-75 group-hover:brightness-100 group-hover:grayscale-0"
                alt="Sede 1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="md:col-span-7 md:row-span-1 rounded-[4rem] overflow-hidden group border-2 border-white/10 shadow-2xl relative">
              <img
                src={mascarillaImg}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-75 group-hover:brightness-100 group-hover:grayscale-0"
                alt="Sede 2"
              />
            </div>
            <div className="md:col-span-3 md:row-span-1 rounded-[4rem] overflow-hidden group border-2 border-white/10 shadow-2xl relative">
              <img
                src={pestanasImg}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-75 group-hover:brightness-100 group-hover:grayscale-0"
                alt="Sede 3"
              />
            </div>
            <div className="md:col-span-4 md:row-span-1 rounded-[4rem] overflow-hidden group border-2 border-white/10 shadow-2xl relative">
              <img
                src={unasImg}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-75 group-hover:brightness-100 group-hover:grayscale-0"
                alt="Sede 4"
              />
            </div>
          </div>

          <div className="text-center mt-20">
            <button
              onClick={() => setVisorSede(true)}
              className="bg-gold-gradient text-black px-16 py-7 rounded-full font-black uppercase text-[10px] tracking-[0.4em] hover:scale-105 transition-all gold-shadow"
            >
              Iniciar Tour de Lujo
            </button>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN UBICACIÓN (MAPA) --- */}
      <section ref={contactoRef} className="px-8 max-w-7xl mx-auto">
        <div className="bg-[#0A0A0A] rounded-[5rem] overflow-hidden border border-white/5 shadow-3xl grid lg:grid-cols-2">
          <div className="p-16 md:p-24 flex flex-col justify-center">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent mb-6 block">
                Exclusive Location
            </span>
            <h3 className="text-6xl font-black text-white uppercase tracking-tighter italic mb-8 font-display">
              Visítanos <span className="text-gray-600">Hoy</span>
            </h3>
            <p className="text-2xl font-bold italic mb-12 text-white/80">
              Bello, Antioquia - <span className="text-accent">Edificio Platinum</span>
            </p>
            <div className="relative group">
                <iframe
                title="Mapa"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.2145214370985!2d-75.69749999999999!3d6.3662778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjEnNTguNiJOIDc1wrA0MSc1MS4wIlc!5e0!3m2!1ses!2sco!4v1777465471145!5m2!1ses!2sco"
                className="w-full h-80 rounded-[3rem] grayscale invert contrast-125 brightness-75 border-none shadow-2xl opacity-70 group-hover:opacity-100 transition-opacity"
                allowFullScreen=""
                ></iframe>
                <div className="absolute inset-0 rounded-[3rem] border border-white/5 pointer-events-none group-hover:border-accent/20 transition-all"></div>
            </div>
          </div>
          <div className="bg-gold-gradient p-16 md:p-24 flex flex-col items-center justify-center text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-black/5"></div>
             <div className="relative z-10">
                <p className="text-black font-black text-5xl uppercase tracking-tighter mb-10 italic font-display leading-[0.9]">
                  ¿Lista para tu <br /> <span className="bg-black text-white px-4 py-1 inline-block mt-2">TRANSFORMACIÓN?</span>
                </p>
                <a
                  href="https://wa.me/573242780446"
                  target="_blank"
                  className="bg-black text-white px-16 py-7 rounded-2xl font-black uppercase text-[10px] tracking-[0.4em] hover:scale-110 transition-all inline-block shadow-2xl"
                >
                  Chat de Prioridad VIP
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-20 border-t border-white/5">
        <p className="text-gray-700 text-[10px] font-black uppercase tracking-[1.5em]">
          SV BEAUTY STUDIO — ELITE EXPERIENCE 2026
        </p>
      </footer>

      {/* MODALES / VISORES */}
      {(visorSede || visorProductos) && (
        <div className="fixed inset-0 bg-black/95 z-[100] p-10 backdrop-blur-3xl flex flex-col items-center overflow-y-auto">
          <header className="w-full max-w-7xl flex justify-between items-center mb-16 pb-8 border-b border-white/10">
            <h4 className="text-gold-gradient font-black text-5xl uppercase italic tracking-tighter font-display">
              {visorSede ? "Premium Sanctuary" : "The Art Gallery"}
            </h4>
            <button
              onClick={() => {
                setVisorSede(false);
                setVisorProductos(false);
              }}
              className="text-white w-16 h-16 rounded-full font-black text-3xl hover:bg-gold-gradient hover:text-black transition-all border border-white/10 flex items-center justify-center"
            >
              ✕
            </button>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-7xl pb-20">
            {[
              manicuraImg,
              mascarillaImg,
              pestanasImg,
              unasImg,
              manicuraImg,
              pestanasImg,
              mascarillaImg,
              unasImg
            ].map((img, i) => (
              <div
                key={i}
                className="h-[500px] rounded-[4rem] overflow-hidden shadow-3xl border border-white/5 group"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  alt="Galería Elite"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
