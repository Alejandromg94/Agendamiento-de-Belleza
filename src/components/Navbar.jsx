import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ usuario = { nombre: "Invitado", rol: "Cliente" } }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user_token");
    navigate("/");
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 font-sans">
      <div className="max-w-7xl mx-auto bg-[#0A0A0A]/80 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] px-8 py-3 flex items-center justify-between shadow-2xl">
        <div
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => navigate("/admin")}
        >
          <div className="w-12 h-12 bg-gold-gradient rounded-2xl flex items-center justify-center gold-shadow group-hover:scale-110 transition-transform">
            <span className="text-black font-black text-2xl italic font-display">
              SV
            </span>
          </div>
          <span className="text-white font-black tracking-tighter text-xl hidden md:block uppercase italic font-display">
            BEAUTY<span className="text-gold-gradient not-italic">STUDIO</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-12">
          {["Servicios", "Nosotros", "Agendas"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-[10px] font-black text-gray-400 hover:text-white transition-all uppercase tracking-[0.4em] relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-gradient group-hover:w-full transition-all"></span>
            </Link>
          ))}
          {usuario.rol === "Administrador" && (
            <Link
              to="/admin-panel"
              className="text-[10px] font-black text-accent hover:text-white transition-all uppercase tracking-[0.4em] relative group"
            >
              Admin
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all"></span>
            </Link>
          )}
        </div>

        {/* PERFIL DE USUARIO */}
        <div className="flex items-center gap-6 pl-8 border-l border-white/10">
          {usuario.nombre !== "Invitado" ? (
            <>
              <div className="text-right hidden sm:block">
                <p className="text-[11px] font-black text-white leading-none uppercase tracking-tighter">
                  {usuario.nombre}
                </p>
                <span className="text-[9px] font-black text-gold-gradient uppercase tracking-[0.3em] leading-none mt-1 block">
                  {usuario.rol}
                </span>
              </div>

              <div className="w-12 h-12 p-0.5 bg-gold-gradient rounded-full gold-shadow-sm flex items-center justify-center overflow-hidden hover:scale-105 transition-all cursor-pointer">
                <div className="w-full h-full rounded-full border-2 border-black overflow-hidden">
                  <img
                    src={`https://ui-avatars.com/api/?name=${usuario.nombre}&background=000000&color=D4AF37&bold=true`}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="text-[9px] font-black text-gray-500 hover:text-red-500 transition-all uppercase tracking-[0.3em]"
              >
                Salir
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-gold-gradient text-black px-6 py-3 rounded-xl font-black uppercase text-[9px] tracking-widest hover:scale-105 transition-all shadow-lg"
            >
              Ingresar
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
