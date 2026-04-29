import { useState } from "react";
import { useNavigate } from "react-router-dom";

// --- IMPORTACIÓN DE IMÁGENES REALES ---
import acrilicasImg from "../assets/img/Acrilicas.jpeg";
import alisadoCortoImg from "../assets/img/Alisado corto.jpeg";
import alisadoLargoImg from "../assets/img/Alisado largo.jpeg";
import baseRubberImg from "../assets/img/Base rubber.jpeg";
import botoxCapilarImg from "../assets/img/Botox capilar.jpeg";
import brasilenoImg from "../assets/img/Brasileño.jpeg";
import cejasHennaImg from "../assets/img/Cejas henna.jpeg";
import corteCabelloImg from "../assets/img/Corte de cabello.jpeg";
import depilacionCeraImg from "../assets/img/Depilación con cera.jpeg";
import depilacionCuchillaImg from "../assets/img/Depilación con cuchilla.jpeg";
import egipcioImg from "../assets/img/Egipcio.jpeg";
import griegoImg from "../assets/img/Griego.jpeg";
import hawaianaImg from "../assets/img/Hawaiana.jpeg";
import humedoImg from "../assets/img/Humedo.jpeg";
import keratinaImg from "../assets/img/Keratina.jpeg";
import laminadoCejasImg from "../assets/img/Laminado de cejas.jpeg";
import lavadoPlanchadoImg from "../assets/img/Lavado con planchado.jpeg";
import manicuraSemiImg from "../assets/img/Manicura semi.jpeg";
import micropigmentacionImg from "../assets/img/Micropigmentacion.jpeg";
import pedicuraSemiImg from "../assets/img/Pedicura semi.jpeg";
import polygelImg from "../assets/img/Polygel.jpeg";
import pressOnImg from "../assets/img/Press on.jpeg";
import terapiaCapilarImg from "../assets/img/Terapia capilar.jpeg";
import tinteImg from "../assets/img/Tinte.jpeg";
import unasAdicionalesImg from "../assets/img/Uñas adicionales.jpeg";

const ServicesPage = () => {
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState("Todos");

  const categorias = ["Todos", "Mirada", "Manos", "Cejas", "Cabello"];

  const servicios = [
    // --- CATEGORÍA: MIRADA ---
    {
      id: 1,
      nombre: "Pestañas Volumen Hawaiano",
      precio: "$65.000",
      img: hawaianaImg,
      categoria: "Mirada",
      desc: "Técnica avanzada para un volumen impactante y natural.",
      duracion: "3 horas",
    },
    {
      id: 2,
      nombre: "Pestañas Volumen Brasileño",
      precio: "$80.000",
      img: brasilenoImg,
      categoria: "Mirada",
      desc: "Efecto tupido y elegante para una mirada cautivadora.",
      duracion: "4 horas",
    },
    {
      id: 3,
      nombre: "Pestañas Volumen Griego",
      precio: "$70.000",
      img: griegoImg,
      categoria: "Mirada",
      desc: "Diseño clásico y sofisticado con gran densidad.",
      duracion: "4 horas",
    },
    {
      id: 4,
      nombre: "Pestañas Egipcio",
      precio: "$80.000",
      img: egipcioImg,
      categoria: "Mirada",
      desc: "Inspirado en la belleza antigua, definición extrema.",
      duracion: "4 horas",
    },
    {
      id: 5,
      nombre: "Pestañas Efecto Húmedo",
      precio: "$90.000",
      img: humedoImg,
      categoria: "Mirada",
      desc: "Tendencia 'wet look' para un brillo constante.",
      duracion: "4 horas",
    },

    // --- CATEGORÍA: MANOS ---
    {
      id: 6,
      nombre: "Manicura Semipermanente",
      precio: "$45.000",
      img: manicuraSemiImg,
      categoria: "Manos",
      desc: "Esmaltado de larga duración con brillo espejo.",
      duracion: "1.5 horas",
    },
    {
      id: 7,
      nombre: "Pedicura Semipermanente",
      precio: "$45.000",
      img: pedicuraSemiImg,
      categoria: "Manos",
      desc: "Cuidado integral de pies con acabado profesional.",
      duracion: "2 horas",
    },
    {
      id: 8,
      nombre: "Base Rubber",
      precio: "$55.000",
      img: baseRubberImg,
      categoria: "Manos",
      desc: "Refuerzo y nivelación para uñas naturales.",
      duracion: "2 horas",
    },
    {
      id: 9,
      nombre: "Uñas Acrílicas",
      precio: "$95.000",
      img: acrilicasImg,
      categoria: "Manos",
      desc: "Extensiones duraderas con diseño personalizado.",
      duracion: "3 horas",
    },
    {
      id: 10,
      nombre: "Polygel Elite",
      precio: "$95.000",
      img: polygelImg,
      categoria: "Manos",
      desc: "Híbrido perfecto entre gel y acrílico.",
      duracion: "2.5 horas",
    },
    {
      id: 11,
      nombre: "Press On Premium",
      precio: "$80.000",
      img: pressOnImg,
      categoria: "Manos",
      desc: "Uñas perfectas al instante con sistema press-on.",
      duracion: "1 hora",
    },
    {
      id: 12,
      nombre: "Uña Adicional",
      precio: "$5.000",
      img: unasAdicionalesImg,
      categoria: "Manos",
      desc: "Reparación o diseño extra por uña.",
      duracion: "20 min",
    },

    // --- CATEGORÍA: CABELLO ---
    {
      id: 13,
      nombre: "Alisado Corto",
      precio: "$150.000",
      img: alisadoCortoImg,
      categoria: "Cabello",
      desc: "Liso impecable y sin frizz para melenas cortas.",
      duracion: "3 horas",
    },
    {
      id: 14,
      nombre: "Alisado Largo",
      precio: "$250.000",
      img: alisadoLargoImg,
      categoria: "Cabello",
      desc: "Tratamiento intensivo para melenas abundantes.",
      duracion: "5 horas",
    },
    {
      id: 15,
      nombre: "Keratina Luxury",
      precio: "$180.000",
      img: keratinaImg,
      categoria: "Cabello",
      desc: "Restauración profunda y brillo radiante.",
      duracion: "4 horas",
    },
    {
      id: 16,
      nombre: "Botox Capilar",
      precio: "$200.000",
      img: botoxCapilarImg,
      categoria: "Cabello",
      desc: "Rejuvenecimiento total de la fibra capilar.",
      duracion: "3 horas",
    },
    {
      id: 17,
      nombre: "Lavado con Planchado",
      precio: "$60.000",
      img: lavadoPlanchadoImg,
      categoria: "Cabello",
      desc: "Lavado profesional y estilizado perfecto.",
      duracion: "1.5 horas",
    },
    {
      id: 18,
      nombre: "Corte de Cabello",
      precio: "$30.000",
      img: corteCabelloImg,
      categoria: "Cabello",
      desc: "Diseño de corte según tu rostro y estilo.",
      duracion: "1 hora",
    },
    {
      id: 19,
      nombre: "Tinte Profesional",
      precio: "$80.000",
      img: tinteImg,
      categoria: "Cabello",
      desc: "Coloración vibrante con protección capilar.",
      duracion: "2.5 horas",
    },
    {
      id: 26,
      nombre: "Terapia Capilar",
      precio: "$80.000",
      img: terapiaCapilarImg,
      categoria: "Cabello",
      desc: "Hidratación profunda y reparación intensiva.",
      duracion: "2 horas",
    },

    // --- CATEGORÍA: CEJAS ---
    {
      id: 20,
      nombre: "Cejas con Henna",
      precio: "$20.000",
      img: cejasHennaImg,
      categoria: "Cejas",
      desc: "Sombreado semipermanente para cejas perfectas.",
      duracion: "45 min",
    },
    {
      id: 21,
      nombre: "Laminado de Cejas",
      precio: "$40.000",
      img: laminadoCejasImg,
      categoria: "Cejas",
      desc: "Diseño y fijación para cejas rebeldes.",
      duracion: "1 hora",
    },
    {
      id: 22,
      nombre: "Micropigmentación",
      precio: "$150.000",
      img: micropigmentacionImg,
      categoria: "Cejas",
      desc: "Maquillaje permanente técnica pelo a pelo.",
      duracion: "3 horas",
    },
    {
      id: 23,
      nombre: "Depilación con Cera",
      precio: "$20.000",
      img: depilacionCeraImg,
      categoria: "Cejas",
      desc: "Limpieza y diseño de cejas con técnica de cera.",
      duracion: "30 min",
    },
    {
      id: 24,
      nombre: "Depilacion con Cuchilla",
      precio: "$12.000",
      img: depilacionCuchillaImg,
      categoria: "Cejas",
      desc: "Eliminación del vello facial con técnica de cuchilla.",
      duracion: "40 min",
    },
    {
      id: 25,
      nombre: "Microblading",
      precio: "$200.000",
      img: micropigmentacionImg,
      categoria: "Cejas",
      desc: "Técnica avanzada pelo a pelo para cejas naturales.",
      duracion: "2 horas",
    },
  ];

  const serviciosFiltrados =
    filtro === "Todos"
      ? servicios
      : servicios.filter((s) => s.categoria === filtro);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-20 font-sans">
      {/* HEADER DE LA PANTALLA */}
      <header className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <span className="text-gold-gradient text-[10px] font-black uppercase tracking-[0.8em] mb-4 block">
            Catálogo de Lujo
          </span>
          <h1 className="text-7xl font-black uppercase italic font-display leading-tight">
            Nuestros <span className="text-gold-gradient">Servicios</span>
          </h1>
        </div>

        {/* FILTROS TIPO CAPSULA */}
        <div className="flex gap-4 bg-white/5 p-2 rounded-3xl border border-white/10 backdrop-blur-xl">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                filtro === cat
                  ? "bg-gold-gradient text-black"
                  : "hover:bg-white/10 text-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* GRILLA DE SERVICIOS */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {serviciosFiltrados.map((s) => (
          <div
            key={s.id}
            className="group relative bg-[#0A0A0A] rounded-[4rem] overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500 shadow-2xl"
          >
            {/* IMAGEN CON OVERLAY */}
            <div className="h-[450px] overflow-hidden relative">
              <img
                src={s.img}
                alt={s.nombre}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-75 group-hover:brightness-100"
              />
              <div className="absolute top-8 left-8">
                <span className="bg-black/60 backdrop-blur-md border border-white/10 text-accent text-[8px] font-black uppercase px-4 py-2 rounded-full tracking-[0.2em]">
                  {s.categoria}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            </div>

            {/* CONTENIDO */}
            <div className="p-10 -mt-20 relative z-10">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="text-3xl font-black uppercase italic font-display leading-none group-hover:text-gold-gradient transition-colors">
                    {s.nombre}
                  </h3>
                  <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest mt-3 italic">
                    Duración: {s.duracion}
                  </p>
                </div>
                <p className="text-gold-gradient font-black text-2xl italic tracking-tighter">
                  {s.precio}
                </p>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {s.desc}
              </p>

              <button
                onClick={() =>
                  navigate("/agendas", { state: { servicio: s.nombre } })
                }
                className="w-full bg-white text-black font-black uppercase text-[10px] py-5 rounded-2xl tracking-[0.3em] hover:bg-gold-gradient transition-all shadow-xl active:scale-95"
              >
                Reservar Cupo
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* BOTÓN VOLVER */}
      <footer className="mt-32 text-center pb-20">
        <button
          onClick={() => navigate("/")}
          className="text-gray-700 hover:text-white text-[10px] font-black uppercase tracking-[0.5em] transition-all border-b border-transparent hover:border-white/20 pb-2"
        >
          Volver al Inicio
        </button>
      </footer>
    </div>
  );
};

export default ServicesPage;
