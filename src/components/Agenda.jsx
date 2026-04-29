import { useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Agenda = () => {
  // Inicializar estado con datos del localStorage
  const [citas, setCitas] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("citas")) || [];
    } catch (error) {
      console.error("Error al cargar citas:", error);
      return [];
    }
  });
  const location = useLocation();
  const [citaFormData, setCitaFormData] = useState({
    cliente: "",
    servicio: location.state?.servicio || "",
    fecha: "",
    profesional: "",
  });

  // Cargar lista de profesionales desde usuarios
  const profesionales = JSON.parse(localStorage.getItem("usuarios")) || [];
  const soloPros = profesionales.filter(
    (u) => u.rol === "Profesional" && u.activo,
  );

  // Ya no necesitamos useEffect para cargar citas

  const saveToStorage = (data) => {
    try {
      localStorage.setItem("citas", JSON.stringify(data));
      setCitas(data);
    } catch (error) {
      console.error("Error al guardar citas:", error);
      Swal.fire("Error", "No se pudo guardar la cita", "error");
    }
  };

  const handleCitaSubmit = (e) => {
    e.preventDefault();
    if (
      !citaFormData.cliente ||
      !citaFormData.servicio ||
      !citaFormData.fecha ||
      !citaFormData.profesional
    ) {
      return Swal.fire(
        "Error",
        "Completa todos los campos (incluyendo el profesional)",
        "error",
      );
    }

    const nuevaLista = [...citas, { ...citaFormData, id: Date.now() }];
    saveToStorage(nuevaLista);

    // Limpiar formulario
    setCitaFormData({ cliente: "", servicio: "", fecha: "", profesional: "" });

    Swal.fire({
      title: "Cita Agendada",
      text: "Se ha registrado el servicio con éxito",
      icon: "success",
      confirmButtonColor: "#C5A059",
    });
  };

  const eliminarCita = (index) => {
    Swal.fire({
      title: "¿Cancelar esta cita?",
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cancelar",
      cancelButtonText: "Volver",
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevas = citas.filter((_, i) => i !== index);
        saveToStorage(nuevas);
        Swal.fire("Cancelada", "La cita ha sido eliminada.", "success");
      }
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-10 font-sans">
      {/* TÍTULO DE SECCIÓN */}
      <div className="mb-12">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic flex items-center gap-4 font-display">
          <span className="text-gold-gradient text-5xl">📅</span> Agenda de{" "}
          <span className="text-gold-gradient">Servicios</span>
        </h2>
        <p className="text-[10px] uppercase tracking-[0.5em] text-gray-600 font-black mt-2">
          SV Beauty Studio Elite Optimizer
        </p>
      </div>

      {/* SÚPER FORMULARIO DE AGENDAMIENTO */}
      <section className="mb-16 bg-[#0A0A0A] p-10 rounded-[3.5rem] shadow-3xl border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-gradient opacity-5 rounded-full blur-3xl"></div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-8 relative z-10">
          Programar Nueva Experiencia
        </h3>

        <form
          onSubmit={handleCitaSubmit}
          className="flex flex-wrap gap-8 items-end relative z-10"
        >
          <div className="flex-1 min-w-[240px]">
            <label className="text-[9px] font-black uppercase mb-3 block ml-1 text-gray-500 tracking-widest">
              Nombre de la Cliente
            </label>
            <input
              type="text"
              value={citaFormData.cliente}
              onChange={(e) =>
                setCitaFormData({ ...citaFormData, cliente: e.target.value })
              }
              className="w-full bg-[#121212] border border-white/5 p-5 rounded-2xl focus:border-accent outline-none transition-all text-white font-medium shadow-inner"
              placeholder="Ej. Maria Delgado"
            />
          </div>

          <div className="flex-1 min-w-[240px]">
            <label className="text-[9px] font-black uppercase mb-3 block ml-1 text-gray-500 tracking-widest">
              Servicio VIP
            </label>
            <input
              type="text"
              value={citaFormData.servicio}
              onChange={(e) =>
                setCitaFormData({ ...citaFormData, servicio: e.target.value })
              }
              className="w-full bg-[#121212] border border-white/5 p-5 rounded-2xl focus:border-accent outline-none transition-all text-white font-medium shadow-inner"
              placeholder="Ej. Diseño de Cejas"
            />
          </div>

          <div className="w-72">
            <label className="text-[9px] font-black uppercase mb-3 block ml-1 text-gray-500 tracking-widest">
              Fecha y Hora
            </label>
            <input
              type="datetime-local"
              value={citaFormData.fecha}
              onChange={(e) =>
                setCitaFormData({ ...citaFormData, fecha: e.target.value })
              }
              className="w-full bg-[#121212] border border-white/5 p-5 rounded-2xl focus:border-accent outline-none text-white font-black text-xs shadow-inner"
            />
          </div>

          <div className="w-64">
            <label className="text-[9px] font-black uppercase mb-3 block ml-1 text-accent tracking-widest">
              Profesional Staff
            </label>
            <select
              value={citaFormData.profesional}
              onChange={(e) =>
                setCitaFormData({
                  ...citaFormData,
                  profesional: e.target.value,
                })
              }
              className="w-full bg-[#121212] border border-white/5 p-5 rounded-2xl focus:border-accent outline-none text-white font-black text-xs shadow-inner cursor-pointer"
            >
              <option value="">Seleccionar...</option>
              {soloPros.map((p, idx) => (
                <option key={idx} value={p.nombre}>
                  {p.nombre}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-gold-gradient text-black px-12 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all gold-shadow active:scale-95 border border-transparent"
          >
            Agendar Servicio
          </button>
        </form>
      </section>

      {/* TABLA DE CITAS PENDIENTES */}
      <div className="bg-[#0A0A0A] rounded-[4rem] shadow-3xl border border-white/5 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-black/40 border-b border-white/5">
              <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">
                Servicio y Cliente
              </th>
              <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">
                Programación
              </th>
              <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-center text-gray-500">
                Gestión
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {citas.length > 0 ? (
              citas.map((cita, index) => (
                <tr
                  key={index}
                  className="hover:bg-white/[0.02] transition-all group"
                >
                  <td className="p-8">
                    <div className="font-black text-white uppercase text-base group-hover:text-gold-gradient transition-colors font-display tracking-tight">
                      {cita.servicio}
                    </div>
                    <div className="text-[10px] text-gray-500 font-bold italic tracking-widest mt-1">
                      👤 {cita.cliente}
                    </div>
                  </td>
                  <td className="p-8">
                    <div className="font-mono text-[10px] text-accent bg-accent/5 px-4 py-2 rounded-xl inline-block border border-accent/10 tracking-tighter">
                      {cita.fecha.replace("T", " @ ")}
                    </div>
                  </td>
                  <td className="p-8 text-center">
                    <button
                      onClick={() => eliminarCita(index)}
                      className="bg-red-950/20 text-red-500 px-6 py-2 rounded-xl text-[9px] font-black uppercase hover:bg-red-500 hover:text-white transition-all border border-red-900/20"
                    >
                      Cancelar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-32 text-center">
                  <div className="flex flex-col items-center gap-4 opacity-10">
                    <span className="text-6xl">📅</span>
                    <p className="uppercase font-black text-[10px] tracking-[1em]">
                      Registro de Citas Vacío
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Agenda;
