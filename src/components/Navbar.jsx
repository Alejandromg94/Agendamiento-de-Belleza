import { Link } from "react-router-dom";

const Navbar = ({ usuario = { nombre: "Invitado", rol: "Cliente" } }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 font-sans">
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-2xl border border-[#A2CFFE]/40 rounded-[2.5rem] px-8 py-3 flex items-center justify-between shadow-[0_15px_40px_rgba(30,58,138,0.12)]">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-linear-to-br from-[#2563EB] to-[#1E3A8A] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <span className="text-white font-black text-xl italic">G</span>
          </div>
          <span className="text-[#1E3A8A] font-black tracking-tighter text-xl hidden md:block uppercase italic">
            Glam<span className="text-[#2563EB] not-italic">Beauty</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/servicios"
            className="text-[11px] font-black text-[#1E3A8A] hover:text-[#2563EB] transition-all uppercase tracking-[0.25em] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#2563EB] hover:after:w-full after:transition-all"
          >
            Servicios
          </Link>
          <Link
            to="/precios"
            className="text-[11px] font-black text-[#1E3A8A] hover:text-[#2563EB] transition-all uppercase tracking-[0.25em] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#2563EB] hover:after:w-full after:transition-all"
          >
            Precios
          </Link>
          <Link
            to="/agendas"
            className="text-[11px] font-black text-[#1E3A8A] hover:text-[#2563EB] transition-all uppercase tracking-[0.25em] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#2563EB] hover:after:w-full after:transition-all"
          >
            Agendas
          </Link>
        </div>

        {/* PERFIL DE USUARIO */}
        <div className="flex items-center gap-4 pl-6 border-l-2 border-[#A2CFFE]/30">
          <div className="text-right hidden sm:block">
            <p className="text-[11px] font-black text-[#1E3A8A] leading-none uppercase">
              {usuario.nombre}
            </p>
            <span className="text-[9px] font-black text-[#2563EB] uppercase tracking-[0.2em] leading-none opacity-80">
              {usuario.rol}
            </span>
          </div>

          {/* AVATAR: Con anillo de luz Azul Cobalto */}
          <div className="w-11 h-11 bg-white border-2 border-[#2563EB]/20 rounded-full flex items-center justify-center overflow-hidden ring-4 ring-[#2563EB]/5 hover:ring-[#2563EB]/20 transition-all cursor-pointer shadow-sm">
            <img
              src={`https://ui-avatars.com/api/?name=${usuario.nombre}&background=2563EB&color=FFFFFF&bold=true`}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
