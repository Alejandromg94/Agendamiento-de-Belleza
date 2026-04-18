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
    <div className="space-y-32 pb-20 bg-[#FDFCFB] font-sans relative">
      {/* --- SECCIÓN HERO --- */}
      <section className="pt-16 px-4">
        <div className="relative overflow-hidden rounded-[4rem] bg-white border border-gray-100 p-10 md:p-24 shadow-2xl">
          <div className="max-w-2xl relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl font-black italic text-[#1E3A8A]">
                SV
              </span>
              <div className="h-6 w-[1px] bg-gray-200"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                Beauty Studio
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black text-[#1E3A8A] uppercase tracking-tighter leading-[0.8] mb-8">
              BEAUTY <br />
              <span className="italic text-[#C5A059]">CATALOG</span>
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/agendas"
                className="bg-[#1E3A8A] text-white px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-2xl shadow-blue-200"
              >
                Agendar Cita
              </Link>
              <Link
                to="/admin-panel"
                className="bg-[#C5A059] text-white px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-2xl shadow-yellow-200"
              >
                Panel Admin
              </Link>
              <button
                type="button"
                onClick={scrollToContacto}
                className="bg-white text-[#1E3A8A] border border-[#1E3A8A] px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#F8F8F8] transition-all shadow-sm"
              >
                Contacto
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 h-full w-1/2 hidden md:block opacity-40 lg:opacity-100">
            <img
              src={manicuraImg}
              className="w-full h-full object-cover"
              alt="Estética"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* --- 1. GALERÍA DE PRODUCTOS (Nuestros Servicios) --- */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#C5A059] mb-2 block">
              Professional Results
            </span>
            <h2 className="text-5xl font-black text-[#1E3A8A] uppercase tracking-tighter italic">
              Nuestros <span className="text-black">Productos</span>
            </h2>
          </div>
          <button
            onClick={() => setVisorProductos(true)}
            className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
          >
            Ver catálogo completo
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productos.map((prod) => (
            <div key={prod.id} className="group cursor-pointer">
              <div className="relative h-80 rounded-[2.5rem] overflow-hidden mb-6 shadow-lg border border-gray-100">
                <img
                  src={prod.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={prod.nombre}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-[#1E3A8A]">
                  {prod.tag}
                </div>
              </div>
              <h4 className="font-black text-lg uppercase tracking-tight text-[#1E3A8A]">
                {prod.nombre}
              </h4>
              <p className="text-[#C5A059] font-bold italic">{prod.precio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 2. GALERÍA DE LA SEDE (El Espacio) --- */}
      <section className="px-6 py-24 bg-[#1E3A8A] rounded-[5rem] mx-4 shadow-3xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#C5A059] mb-4 block">
              Premium Experience
            </span>
            <h2 className="text-6xl font-black text-white uppercase tracking-tighter italic">
              Nuestra <span className="text-[#C5A059]">Sede</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
            <div className="md:col-span-4 md:row-span-2 rounded-[3rem] overflow-hidden group border border-white/10">
              <img
                src={manicuraImg}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                alt="Sede 1"
              />
            </div>
            <div className="md:col-span-8 md:row-span-1 rounded-[3rem] overflow-hidden group border border-white/10">
              <img
                src={mascarillaImg}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Sede 2"
              />
            </div>
            <div className="md:col-span-4 md:row-span-1 rounded-[3rem] overflow-hidden group border border-white/10">
              <img
                src={pestanasImg}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                alt="Sede 3"
              />
            </div>
            <div className="md:col-span-4 md:row-span-1 rounded-[3rem] overflow-hidden group border border-white/10">
              <img
                src={unasImg}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                alt="Sede 4"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setVisorSede(true)}
              className="bg-[#C5A059] text-black px-12 py-5 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all"
            >
              Hacer Tour Virtual
            </button>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN UBICACIÓN (MAPA) --- */}
      <section ref={contactoRef} className="px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[4rem] overflow-hidden border border-gray-100 shadow-2xl grid md:grid-cols-2">
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <h3 className="text-5xl font-black text-[#1E3A8A] uppercase tracking-tighter italic mb-6">
              Dónde <span className="text-black">Estamos</span>
            </h3>
            <p className="text-xl font-bold italic mb-8">
              Bello, Antioquia - Edificio Platinum
            </p>
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.442!2d-75.56!3d6.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTknNDguMCJOIDc1wrAzMSczNi4wIlc!5e0!3m2!1ses!2sco!4v1620000000000"
              className="w-full h-64 rounded-3xl grayscale contrast-125 border-none shadow-inner"
              allowFullScreen=""
            ></iframe>
          </div>
          <div className="bg-[#F7DC6F] p-12 flex items-center justify-center text-center">
            <div>
              <p className="text-black font-black text-3xl uppercase tracking-tighter mb-4 italic">
                ¿Lista para tu <br /> transformación?
              </p>
              <a
                href="https://wa.me/573242780446"
                target="_blank"
                className="bg-black text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest"
              >
                Chat Directo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10">
        <p className="text-gray-300 text-[10px] font-black uppercase tracking-[1em]">
          SV Beauty Studio — 2026
        </p>
      </footer>

      {/* MODALES / VISORES (Similares para ambos) */}
      {(visorSede || visorProductos) && (
        <div className="fixed inset-0 bg-black/98 z-[100] p-6 backdrop-blur-xl flex flex-col items-center overflow-y-auto">
          <header className="w-full max-w-7xl flex justify-between items-center mb-10 pb-6 border-b border-white/10">
            <h4 className="text-[#C5A059] font-black text-4xl uppercase italic tracking-tighter">
              {visorSede ? "Premium Space" : "Nuestros Trabajos"}
            </h4>
            <button
              onClick={() => {
                setVisorSede(false);
                setVisorProductos(false);
              }}
              className="text-white w-14 h-14 rounded-full font-black text-2xl hover:bg-white hover:text-black transition-all"
            >
              ✕
            </button>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl">
            {[
              manicuraImg,
              mascarillaImg,
              pestanasImg,
              unasImg,
              manicuraImg,
            ].map((img, i) => (
              <div
                key={i}
                className="h-72 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="Galería"
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
