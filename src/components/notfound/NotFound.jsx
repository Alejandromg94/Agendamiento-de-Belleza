import { Link } from "react-router-dom";
import conoImg from "../../assets/img/cono.png";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6 relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <div className="mb-12 relative inline-block">
          <h1 className="text-[12rem] md:text-[18rem] font-black text-white/5 leading-none tracking-tighter select-none font-display">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gold-gradient text-4xl md:text-6xl font-black uppercase tracking-[0.3em] italic font-display">
              Extraviado
            </span>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight font-display">
            PARECE QUE ESTA{" "}
            <span className="text-gold-gradient">RUTA NO EXISTE</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-black uppercase tracking-[0.5em] max-w-2xl mx-auto leading-relaxed">
            Incluso en la búsqueda de la perfección, <br /> a veces tomamos un
            camino inesperado.
          </p>

          <div className="pt-12">
            <Link
              to="/"
              className="inline-block px-14 py-6 bg-gold-gradient text-black font-black rounded-2xl transition-all gold-shadow hover:scale-105 active:scale-95 uppercase tracking-[0.4em] text-[10px]"
            >
              Volver al Refugio
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 opacity-10 grayscale brightness-50 hidden md:block">
        <img src={conoImg} alt="Icono" className="w-20" />
      </div>
    </div>
  );
}
