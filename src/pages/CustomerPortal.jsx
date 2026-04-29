import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomerPortal = () => {
  const navigate = useNavigate();

  const userToken = JSON.parse(localStorage.getItem("user_token")) || {};
  const clienteNombre = userToken.nombre || "Cliente";

  const [misCitas] = useState(() => {
    try {
      const stored = localStorage.getItem("citas");
      const todas = stored ? JSON.parse(stored) : [];
      return Array.isArray(todas)
        ? todas.filter((c) => c.cliente === clienteNombre)
        : [];
    } catch (error) {
      console.error("Error al cargar citas:", error);
      return [];
    }
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 md:p-20 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-20 text-center">
          <div className="w-20 h-20 bg-gold-gradient rounded-full mx-auto mb-8 flex items-center justify-center text-black text-2xl font-black">
            MD
          </div>
          <h1 className="text-5xl font-black uppercase italic font-display">
            Mi Espacio <span className="text-gold-gradient">Elite</span>
          </h1>
          <p className="text-gray-500 text-[10px] mt-4 uppercase tracking-[0.5em] font-black italic">
            Bienvenida, {clienteNombre}
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#0A0A0A] p-10 rounded-[4rem] border border-white/5 relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-gradient opacity-5 rounded-full blur-3xl"></div>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-accent mb-10">
              Mis Próximas Citas
            </h3>

            <div className="space-y-8">
              {misCitas.length > 0 ? (
                misCitas.map((cita) => (
                  <div
                    key={cita.id}
                    className="border-l-2 border-accent pl-6 py-2"
                  >
                    <p className="text-2xl font-black uppercase font-display leading-none">
                      {cita.servicio}
                    </p>
                    <p className="text-gray-500 text-xs mt-2 font-bold italic">
                      {cita.fecha.replace("T", " @ ")}
                    </p>
                    <p className="text-[9px] text-accent mt-4 font-black uppercase tracking-widest">
                      Especialista: {cita.profesional || "Por asignar"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 italic text-sm">
                  No tienes citas programadas aún.
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-white/5 p-10 rounded-[4rem] border border-white/10 hover:border-accent transition-all group">
              <h4 className="text-2xl font-black uppercase italic font-display mb-4 group-hover:text-gold-gradient transition-colors">
                ¿Nueva Experiencia?
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed mb-8 uppercase tracking-widest font-medium">
                Reserva tu próximo tratamiento con prioridad VIP y asegura tu
                lugar en nuestra agenda.
              </p>
              <Link
                to="/agendas"
                className="inline-block bg-white text-black px-8 py-4 rounded-2xl font-black text-[9px] uppercase tracking-widest hover:bg-gold-gradient transition-all"
              >
                Nueva Reserva
              </Link>
            </div>

            <div className="bg-black border border-white/5 p-10 rounded-[4rem] flex items-center justify-between">
              <div>
                <p className="text-[9px] font-black uppercase text-gray-500 tracking-tighter">
                  Puntos de Fidelidad
                </p>
                <p className="text-4xl font-black text-gold-gradient">1,250</p>
              </div>
              <span className="text-3xl opacity-20">✨</span>
            </div>
          </div>
        </section>

        <footer className="mt-32 text-center">
          <button
            onClick={() => navigate("/")}
            className="bg-red-950/20 text-red-500 px-10 py-4 rounded-2xl text-[9px] font-black uppercase tracking-[0.3em] hover:bg-red-500 hover:text-white transition-all"
          >
            Cerrar Sesión Segura
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CustomerPortal;
