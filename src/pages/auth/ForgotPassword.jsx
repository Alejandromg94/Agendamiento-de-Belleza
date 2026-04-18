import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulación de API
      setMessage("Si el correo existe, recibirás instrucciones en breve.");
      setError("");
    } catch (error) {
      console.error("Error al procesar solicitud:", error);
      setError("Hubo un error al procesar la solicitud.");
      setMessage("");
    }
  };

  return (
    <main className="grow flex items-center justify-center px-4 min-h-screen bg-linear-to-br from-[#E5D3B3] via-[#A2CFFE] to-[#8DAA91] relative overflow-hidden font-sans">
      {/* Orbes Decorativos con Azul Vibrante */}
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-[#2563EB]/15 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-[#1E3A8A]/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="max-w-md w-full bg-white/50 backdrop-blur-2xl rounded-[3rem] shadow-[0_25px_60px_rgba(30,58,138,0.2)] p-10 border border-white/60 z-10">
        {/* Título con Azul Marino y Cobalto */}
        <h1 className="text-4xl font-black text-center mb-4 tracking-tighter text-[#1E3A8A] uppercase italic">
          Recuperar{" "}
          <span className="text-[#2563EB] not-italic text-3xl">Acceso</span>
        </h1>

        <p className="text-[#1E3A8A] text-center mb-10 text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed opacity-90">
          Introduce tu email y te enviaremos <br /> un enlace de recuperación.
        </p>

        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="formulario__grupo">
            {/* Label en Azul Profundo para mayor visibilidad */}
            <label className="block text-[11px] font-black text-[#1E3A8A] mb-2 ml-1 uppercase tracking-[0.2em]">
              Correo Electrónico
            </label>
            <input
              type="email"
              placeholder="nombre@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-4 bg-white/80 border-2 border-[#A2CFFE]/40 rounded-2xl text-[#1E3A8A] font-bold focus:outline-none focus:ring-4 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all placeholder:text-[#6A9AB0]/60 shadow-sm"
            />
          </div>

          {/* Mensajes de Feedback con Azul Marino para lectura clara */}
          {message && (
            <div className="bg-[#8DAA91]/20 border border-[#8DAA91]/40 text-[#1E3A8A] text-[10px] font-black p-4 rounded-2xl text-center uppercase tracking-tighter">
              {message}
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-[10px] font-black p-4 rounded-2xl text-center uppercase tracking-tighter">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-4 pt-2">
            {/* Botón Principal en Azul Cobalto */}
            <button
              type="submit"
              className="w-full bg-[#2563EB] hover:bg-[#1E3A8A] text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-[#2563EB]/30 active:scale-[0.98] uppercase tracking-[0.3em] text-[11px]"
            >
              Enviar Instrucciones
            </button>

            {/* Link de retorno en Azul Marino para que no se pierda */}
            <Link
              to="/login"
              className="text-[11px] text-center block mt-2 text-[#1E3A8A] hover:text-[#2563EB] transition-colors font-black uppercase tracking-[0.2em] border-b border-transparent hover:border-[#2563EB] w-max mx-auto"
            >
              Volver al Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ForgotPassword;
