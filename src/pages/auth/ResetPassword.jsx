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
    <main className="grow flex items-center justify-center px-4 min-h-screen bg-[conic-gradient(at_top_right,var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="max-w-md w-full bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-10 border border-white/10 z-10">
        <h1 className="text-4xl font-black text-center mb-4 tracking-tighter bg-linear-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
          RESETEAR CLAVE
        </h1>
        <p className="text-slate-400 text-center mb-8 text-sm font-medium">
          Ingresa tu nueva contraseña para recuperar el acceso.
        </p>

        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="formulario__grupo">
            <label className="block text-xs font-bold text-slate-400 mb-2 ml-1 uppercase tracking-widest">
              Nueva Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-6 py-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
          </div>

          <div className="formulario__grupo">
            <label className="block text-xs font-bold text-slate-400 mb-2 ml-1 uppercase tracking-widest">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-6 py-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
          </div>

          {error && (
            <p className="text-red-400 text-xs font-bold text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-4 pt-4">
            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black py-4 rounded-2xl transition-all shadow-lg active:scale-[0.98]"
            >
              ACTUALIZAR CONTRASEÑA
            </button>

            <Link
              to="/"
              className="text-xs text-center block text-slate-500 hover:text-blue-400 transition-colors font-medium"
            >
              Volver al inicio de sesión
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ResetPassword;
