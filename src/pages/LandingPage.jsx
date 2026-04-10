import { Link } from "react-router-dom";
import mascarillaImg from "../assets/mascarilla.jpeg";
import pestanasImg from "../assets/pestañas.jpeg";
import unasImg from "../assets/uñas1.jpeg"; // usando uñas1.jpeg ya que uñas.jpeg no existe
import manicuraImg from "../assets/uñas2.jpeg"; // usando uñas2.jpeg ya que manicura.jpeg no existe

const LandingPage = () => {
  const nailsGallery = [
    {
      url: mascarillaImg,
      tag: "Tendencia",
    },
    {
      url: pestanasImg,
      tag: "Elegante",
    },
    {
      url: unasImg,
      tag: "Minimalista",
    },
  ];

  return (
    <div className="space-y-16 pb-20 animate-in fade-in duration-700">
      {/* SECCIÓN HERO */}
      <section className="relative overflow-hidden rounded-[3rem] bg-white/50 border border-[#A2CFFE]/50 p-10 md:p-20 backdrop-blur-2xl shadow-2xl">
        <div className="max-w-2xl relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#1E3A8A] text-[10px] font-black uppercase tracking-[0.4em] mb-6 shadow-sm">
            Nails & Care Professional
          </span>

          <h1 className="text-6xl md:text-8xl font-black text-[#1E3A8A] leading-[0.85] tracking-tighter uppercase mb-8">
            TU ESTILO <br />
            <span className="bg-linear-to-r from-[#2563EB] via-[#6A9AB0] to-[#8DAA91] bg-clip-text text-transparent italic">
              GLAMOUR
            </span>
          </h1>

          <p className="text-[#334155] text-lg md:text-xl mb-10 font-bold max-w-md leading-relaxed">
            Reserva tu cita hoy mismo y luce unas uñas increíbles con nuestros
            profesionales expertos.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/agendas"
              className="px-10 py-5 bg-[#2563EB] hover:bg-[#1E40AF] text-white font-black rounded-2xl transition-all shadow-xl shadow-[#2563EB]/20 active:scale-95 uppercase tracking-widest text-sm"
            >
              Agendar Cita
            </Link>
            <Link
              to="/servicios"
              className="px-10 py-5 bg-white/80 hover:bg-white text-[#1E3A8A] border-2 border-[#A2CFFE] font-black rounded-2xl transition-all backdrop-blur-md uppercase tracking-widest text-sm shadow-sm"
            >
              Ver Servicios
            </Link>
          </div>
        </div>

        {/* Imagen decorativa lateral */}
        <div className="absolute top-0 right-0 h-full w-1/2 opacity-60 lg:opacity-90 pointer-events-none hidden md:block">
          <img
            src={manicuraImg}
            className="w-full h-full object-cover"
            alt="Nails Decoration"
          />
        </div>
      </section>

      {/* GALERÍA DE TENDENCIAS */}
      <section>
        <div className="flex items-center justify-between mb-10 px-4">
          <h2 className="text-4xl font-black text-[#1E3A8A] uppercase tracking-tighter italic">
            Tendencias{" "}
            <span className="text-[#2563EB] not-italic text-2xl ml-2">
              2026
            </span>
          </h2>
          <div className="h-[2px] grow mx-8 bg-linear-to-r from-[#A2CFFE] to-transparent hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nailsGallery.map((item, i) => (
            <div
              key={i}
              className="group relative h-[480px] rounded-[3rem] overflow-hidden border-2 border-white bg-white/30 shadow-2xl transition-all hover:shadow-[#2563EB]/10"
            >
              <img
                src={item.url}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Nails Gallery"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1E3A8A]/90 via-transparent to-transparent opacity-90"></div>

              <div className="absolute bottom-10 left-10 right-10">
                <span className="bg-[#A2CFFE] text-[#1E3A8A] px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest mb-3 inline-block">
                  {item.tag}
                </span>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">
                  Diseño {i + 1}
                </h3>
                <button className="mt-6 w-full py-4 bg-white hover:bg-[#2563EB] text-[#1E3A8A] hover:text-white rounded-2xl transition-all font-black uppercase text-xs tracking-[0.2em] shadow-lg">
                  Reservar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-10 text-center border-t border-[#A2CFFE]/30">
        <p className="text-[#1E3A8A] text-xs font-black uppercase tracking-[0.6em]">
          Beauty-flow Optimizer — Experience y belleza
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
