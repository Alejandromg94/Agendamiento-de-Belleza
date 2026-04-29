import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Las contraseñas no coinciden");
    }
    // Aquí iría tu lógica de envío al backend
    console.log("Nueva clave enviada con token:", token);
  };

  return (
    <main className="grow flex items-center justify-center px-4 min-h-screen bg-[#050505] relative overflow-hidden font-sans">
      {/* Orbes Decorativos */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-md w-full bg-[#0A0A0A] backdrop-blur-3xl rounded-[4rem] p-12 border border-white/5 z-10 shadow-3xl">
        <h1 className="text-4xl font-black text-center mb-6 tracking-tighter text-white uppercase italic font-display">
          RESETEAR <span className="text-gold-gradient not-italic">CLAVE</span>
        </h1>
        <p className="text-gray-500 text-center mb-10 text-[10px] font-black uppercase tracking-[0.4em] leading-relaxed">
          Ingresa tu nueva contraseña para recuperar tu lugar en la élite.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-[10px] font-black text-gray-600 mb-3 ml-1 uppercase tracking-widest">
              Nueva Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-8 py-5 bg-[#121212] border border-white/5 rounded-2xl text-white font-medium focus:outline-none focus:ring-1 focus:ring-accent transition-all placeholder:text-gray-800"
            />
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-600 mb-3 ml-1 uppercase tracking-widest">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-8 py-5 bg-[#121212] border border-white/5 rounded-2xl text-white font-medium focus:outline-none focus:ring-1 focus:ring-accent transition-all placeholder:text-gray-800"
            />
          </div>

          {error && (
            <p className="text-red-500 text-[10px] font-black text-center bg-red-950/20 py-4 rounded-2xl border border-red-900/20 uppercase tracking-widest">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-6 pt-4">
            <button
              type="submit"
              className="w-full bg-gold-gradient text-black font-black py-6 rounded-2xl transition-all gold-shadow active:scale-[0.98] uppercase tracking-[0.4em] text-[11px]"
            >
              ACTUALIZAR CONTRASEÑA
            </button>

            <Link
              to="/"
              className="text-[11px] text-center block mt-2 text-gray-500 hover:text-white transition-all font-black uppercase tracking-[0.3em] w-max mx-auto"
            >
              Volver al Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ResetPassword;
