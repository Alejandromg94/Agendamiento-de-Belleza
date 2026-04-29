import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProfessionalPanel = () => {
  const navigate = useNavigate();

  // Obtenemos el nombre real del usuario logueado
  const userToken = JSON.parse(localStorage.getItem("user_token")) || {};
  const proNombre = userToken.nombre || "Profesional";

  // Estado para las citas del profesional (Carga inicial síncrona)
  const [misCitas, setMisCitas] = useState(() => {
    try {
      const stored = localStorage.getItem("citas");
      const parsed = stored ? JSON.parse(stored) : [];
      return Array.isArray(parsed)
        ? parsed.filter((c) => c && c.profesional === proNombre)
        : [];
    } catch (error) {
      console.error("Error al inicializar citas:", error);
      return [];
    }
  });

  // Estado para el formulario de agendamiento rápido
  const [formData, setFormData] = useState({
    cliente: "",
    servicio: "Diseño de Cejas",
    fecha: "",
    hora: "",
  });

  // Función para cargar citas filtradas
  const cargarCitas = () => {
    try {
      const stored = localStorage.getItem("citas");
      const parsed = stored ? JSON.parse(stored) : [];
      const filtradas = parsed.filter((c) => c && c.profesional === proNombre);
      setMisCitas(filtradas);
    } catch (error) {
      console.error("Error al cargar citas:", error);
    }
  };

  // Manejador para agendar nueva cita
  const handleAgendar = (e) => {
    e.preventDefault();
    try {
      const stored = localStorage.getItem("citas");
      const todas = stored ? JSON.parse(stored) : [];

      const nuevaCita = {
        id: Date.now(),
        ...formData,
        profesional: proNombre, // Se asigna automáticamente al pro logueado
        estado: "Confirmada",
      };

      const actualizadas = [...todas, nuevaCita];
      localStorage.setItem("citas", JSON.stringify(actualizadas));

      Swal.fire({
        title: "Cita Agendada",
        icon: "success",
        confirmButtonColor: "#C5A059",
        background: "#0A0A0A",
        color: "#fff",
      });

      setFormData({
        cliente: "",
        servicio: "Diseño de Cejas",
        fecha: "",
        hora: "",
      });
      cargarCitas();
    } catch {
      Swal.fire("Error", "No se pudo agendar", "error");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 md:p-20 font-sans">
      <header className="max-w-7xl mx-auto mb-16 flex justify-between items-end">
        <div>
          <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-2 block text-gold-gradient">
            Staff Elite Portal
          </span>
          <h1 className="text-6xl font-black uppercase italic font-display leading-tight">
            Hola, <span className="text-gold-gradient">{proNombre}</span>
          </h1>
          <p className="text-gray-500 text-xs mt-4 uppercase tracking-widest font-bold">
            Tienes {misCitas.length} servicios en tu registro
          </p>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("user_token");
            navigate("/");
          }}
          className="text-[10px] font-black uppercase border-b border-white/10 pb-2 hover:text-red-500 transition-all tracking-[0.2em]"
        >
          Finalizar Turno
        </button>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-8">
          <section className="bg-[#0A0A0A] p-8 rounded-[3rem] border border-white/5 shadow-2xl">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-gold-gradient mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold-gradient rounded-full"></span>
              Agendamiento Rápido
            </h3>
            <form onSubmit={handleAgendar} className="space-y-5">
              <div>
                <label className="text-[9px] uppercase text-gray-500 font-black mb-2 block ml-1">
                  Cliente
                </label>
                <input
                  type="text"
                  required
                  value={formData.cliente}
                  onChange={(e) =>
                    setFormData({ ...formData, cliente: e.target.value })
                  }
                  className="w-full bg-black border border-white/10 p-4 rounded-2xl text-sm focus:border-accent outline-none transition-all"
                  placeholder="Nombre completo"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] uppercase text-gray-500 font-black mb-2 block ml-1">
                    Fecha
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.fecha}
                    onChange={(e) =>
                      setFormData({ ...formData, fecha: e.target.value })
                    }
                    className="w-full bg-black border border-white/10 p-4 rounded-2xl text-xs outline-none"
                  />
                </div>
                <div>
                  <label className="text-[9px] uppercase text-gray-500 font-black mb-2 block ml-1">
                    Hora
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.hora}
                    onChange={(e) =>
                      setFormData({ ...formData, hora: e.target.value })
                    }
                    className="w-full bg-black border border-white/10 p-4 rounded-2xl text-xs outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gold-gradient text-black font-black uppercase text-[10px] py-5 rounded-2xl tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all shadow-lg"
              >
                Agendar Servicio
              </button>
            </form>
          </section>
          <div className="bg-gold-gradient p-8 rounded-[3rem] text-black shadow-xl">
            <p className="font-black text-[9px] uppercase mb-4 tracking-widest opacity-60">
              Rendimiento Estimado
            </p>
            <h3 className="text-4xl font-black italic">$1.240.000</h3>
          </div>
        </div>

        <div className="lg:col-span-8 bg-[#0A0A0A] rounded-[4rem] border border-white/5 overflow-hidden shadow-2xl">
          <div className="p-10 border-b border-white/5 flex justify-between items-center bg-black/20">
            <h4 className="font-black uppercase text-xs tracking-[0.3em]">
              Hoja de Ruta / <span className="text-gray-600">Servicios</span>
            </h4>
            <span className="bg-white/5 px-6 py-2 rounded-full text-[9px] font-black italic uppercase tracking-widest border border-white/5">
              Calendario 2026
            </span>
          </div>

          <div className="p-6 max-h-[600px] overflow-y-auto custom-scrollbar">
            {misCitas.length > 0 ? (
              misCitas.map((cita) => (
                <div
                  key={cita.id}
                  className="flex items-center justify-between p-6 hover:bg-white/[0.03] rounded-[2rem] transition-all group border border-transparent hover:border-white/5 mb-4"
                >
                  <div className="flex gap-8 items-center">
                    <div className="text-center">
                      <p className="text-2xl font-black font-display text-gold-gradient leading-none">
                        {cita.hora || "00:00"}
                      </p>
                      <p className="text-[8px] text-gray-600 uppercase font-black mt-1">
                        {cita.fecha}
                      </p>
                    </div>
                    <div>
                      <p className="font-black text-lg uppercase tracking-tight group-hover:text-gold-gradient transition-colors">
                        {cita.cliente}
                      </p>
                      <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-bold mt-1">
                        {cita.servicio}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[8px] font-black uppercase tracking-widest bg-green-500/10 text-green-500 px-3 py-1 rounded-full border border-green-500/20">
                      Activo
                    </span>
                    <button className="text-[9px] font-black uppercase text-accent bg-white/5 px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all hover:bg-accent hover:text-black">
                      Finalizar
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-32 text-center">
                <p className="text-gray-800 text-[10px] font-black uppercase tracking-[1em]">
                  Sin servicios agendados
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalPanel;
