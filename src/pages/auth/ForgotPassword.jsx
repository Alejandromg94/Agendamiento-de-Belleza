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
    <main className="grow flex items-center justify-center px-4 min-h-screen bg-[#050505] relative overflow-hidden font-sans">
      {/* Orbes Decorativos */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-md w-full bg-[#0A0A0A] backdrop-blur-3xl rounded-[4rem] p-12 border border-white/5 z-10 shadow-3xl">
        {/* Título */}
        <h1 className="text-4xl font-black text-center mb-6 tracking-tighter text-white uppercase italic font-display">
          Recuperar <span className="text-gold-gradient not-italic">Acceso</span>
        </h1>

        <p className="text-gray-500 text-center mb-12 text-[10px] font-black uppercase tracking-[0.4em] leading-relaxed">
          Introduce tu email y te enviaremos <br /> un enlace de élite para tu cuenta.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-[10px] font-black text-gray-600 mb-3 ml-1 uppercase tracking-widest">
              Correo Electrónico
            </label>
            <input
              type="email"
              placeholder="nombre@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-8 py-5 bg-[#121212] border border-white/5 rounded-2xl text-white font-medium focus:outline-none focus:ring-1 focus:ring-accent transition-all placeholder:text-gray-800"
            />
          </div>

          {message && (
            <div className="bg-gold-gradient/10 border border-accent/20 text-accent text-[10px] font-black p-5 rounded-2xl text-center uppercase tracking-widest">
              {message}
            </div>
          )}

          {error && (
            <div className="bg-red-950/20 border border-red-900/20 text-red-500 text-[10px] font-black p-5 rounded-2xl text-center uppercase tracking-widest">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-6 pt-4">
            <button
              type="submit"
              className="w-full bg-gold-gradient text-black font-black py-6 rounded-2xl transition-all gold-shadow active:scale-[0.98] uppercase tracking-[0.4em] text-[11px]"
            >
              Enviar Instrucciones
            </button>

            <Link
              to="/login"
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

export default ForgotPassword;
