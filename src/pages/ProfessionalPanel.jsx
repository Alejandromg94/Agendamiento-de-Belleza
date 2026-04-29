import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ProfessionalPanel = () => {
  const navigate = useNavigate();

  // Obtenemos el nombre real del usuario logueado
  const userToken = JSON.parse(localStorage.getItem("user_token")) || {};
  const proNombre = userToken.nombre || "Profesional";

  const [misCitas] = useState(() => {
    try {
      const stored = localStorage.getItem("citas");
      const parsed = stored ? JSON.parse(stored) : [];
      const array = Array.isArray(parsed) ? parsed : [];
      return array.filter((c) => c && c.profesional === proNombre);
    } catch (error) {
      console.error("Error al cargar citas:", error);
      return [];
    }
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 md:p-20 font-sans">
      <header className="max-w-6xl mx-auto mb-16 flex justify-between items-end">
        <div>
          <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">
            Staff Elite
          </span>
          <h1 className="text-6xl font-black uppercase italic font-display">
            Hola, <span className="text-gold-gradient">{proNombre}</span>
          </h1>
          <p className="text-gray-500 text-xs mt-4 uppercase tracking-widest font-bold">
            Tienes {misCitas.length} servicios programados hoy
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="text-[10px] font-black uppercase border-b border-white/10 pb-2 hover:text-accent transition-all"
        >
          Salir del Portal
        </button>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* RESUMEN DE ESTADÍSTICAS */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#0A0A0A] p-8 rounded-[3rem] border border-white/5">
            <p className="text-gray-600 text-[9px] font-black uppercase mb-4 tracking-widest">
              Servicio Próximo
            </p>
            <h3 className="text-3xl font-black uppercase font-display leading-none">
              Diseño de Cejas
            </h3>
            <p className="text-accent font-mono text-sm mt-2">
              14:00 @ Maria Delgado
            </p>
          </div>
          <div className="bg-gold-gradient p-8 rounded-[3rem] text-black">
            <p className="font-black text-[9px] uppercase mb-4 tracking-widest opacity-60">
              Balance Semanal
            </p>
            <h3 className="text-4xl font-black">$1.240.000</h3>
          </div>
        </div>

        {/* LISTA DE CITAS DEL PRO */}
        <div className="lg:col-span-2 bg-[#0A0A0A] rounded-[4rem] border border-white/5 overflow-hidden">
          <div className="p-10 border-b border-white/5 flex justify-between items-center">
            <h4 className="font-black uppercase text-xs tracking-widest">
              Hoja de Ruta
            </h4>
            <span className="bg-white/5 px-4 py-2 rounded-full text-[9px] font-black italic uppercase">
              Hoy, 2026
            </span>
          </div>
          <div className="p-4">
            {misCitas.length > 0 ? (
              misCitas.map((cita) => (
                <div
                  key={cita.id}
                  className="flex items-center justify-between p-6 hover:bg-white/[0.02] rounded-3xl transition-all group"
                >
                  <div className="flex gap-6 items-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center font-black text-xs group-hover:bg-accent group-hover:text-black transition-all">
                      {cita.fecha?.includes("T")
                        ? cita.fecha.split("T")[1]
                        : "---"}
                    </div>
                    <div>
                      <p className="font-black text-sm uppercase">
                        {cita.cliente}
                      </p>
                      <p className="text-[10px] text-gray-500 tracking-widest uppercase font-bold">
                        {cita.servicio}
                      </p>
                    </div>
                  </div>
                  <button className="text-[9px] font-black uppercase text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Completar
                  </button>
                </div>
              ))
            ) : (
              <div className="p-20 text-center text-gray-700 text-[10px] font-black uppercase tracking-widest">
                Sin servicios asignados
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalPanel;
