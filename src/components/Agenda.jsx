import { useState } from "react";
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
  const [citaFormData, setCitaFormData] = useState({
    cliente: "",
    servicio: "",
    fecha: "",
    profesional: "",
  });

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
      !citaFormData.fecha
    ) {
      return Swal.fire("Error", "Completa todos los campos", "error");
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
      <div className="mb-8">
        <h2 className="text-3xl font-black text-black uppercase tracking-tighter italic flex items-center gap-3">
          <span className="text-[#C5A059]">📅</span> Agenda de Servicios
        </h2>
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mt-1">
          Beauty Studio Optimizer
        </p>
      </div>

      {/* SÚPER FORMULARIO DE AGENDAMIENTO */}
      <section className="mb-12 bg-white p-8 rounded-[2.5rem] shadow-xl border border-[#F7DC6F]/20">
        <h3 className="text-[11px] font-black uppercase tracking-widest text-[#C5A059] mb-6">
          Programar Nueva Cita
        </h3>

        <form
          onSubmit={handleCitaSubmit}
          className="flex flex-wrap gap-6 items-end"
        >
          <div className="flex-1 min-w-[200px]">
            <label className="text-[10px] font-black uppercase mb-2 block ml-1 text-gray-500">
              Nombre del Cliente
            </label>
            <input
              type="text"
              value={citaFormData.cliente}
              onChange={(e) =>
                setCitaFormData({ ...citaFormData, cliente: e.target.value })
              }
              className="w-full bg-gray-50 border border-gray-200 p-4 rounded-2xl focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/5 outline-none transition-all shadow-sm"
              placeholder="Ej. Maria Delgado"
            />
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="text-[10px] font-black uppercase mb-2 block ml-1 text-gray-500">
              Servicio / Tratamiento
            </label>
            <input
              type="text"
              value={citaFormData.servicio}
              onChange={(e) =>
                setCitaFormData({ ...citaFormData, servicio: e.target.value })
              }
              className="w-full bg-gray-50 border border-gray-200 p-4 rounded-2xl focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/5 outline-none transition-all shadow-sm"
              placeholder="Ej. Balayage o Manicura"
            />
          </div>

          <div className="w-64">
            <label className="text-[10px] font-black uppercase mb-2 block ml-1 text-gray-500">
              Fecha y Hora
            </label>
            <input
              type="datetime-local"
              value={citaFormData.fecha}
              onChange={(e) =>
                setCitaFormData({ ...citaFormData, fecha: e.target.value })
              }
              className="w-full bg-gray-50 border border-gray-200 p-4 rounded-2xl focus:border-[#C5A059] outline-none shadow-sm text-sm font-bold"
            />
          </div>

          <button
            type="submit"
            className="bg-black hover:bg-[#C5A059] text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg active:scale-95 border border-transparent"
          >
            Agendar Servicio
          </button>
        </form>
      </section>

      {/* TABLA DE CITAS PENDIENTES */}
      <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest">
                Servicio y Cliente
              </th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest">
                Fecha Programada
              </th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-center">
                Acción
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {citas.length > 0 ? (
              citas.map((cita, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#F7DC6F]/5 transition-all group"
                >
                  <td className="p-6">
                    <div className="font-black text-gray-900 uppercase text-sm group-hover:text-[#C5A059] transition-colors">
                      {cita.servicio}
                    </div>
                    <div className="text-xs text-gray-400 font-bold italic">
                      👤 {cita.cliente}
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="font-mono text-xs text-gray-600 bg-gray-50 px-3 py-1 rounded-lg inline-block border border-gray-100">
                      {cita.fecha.replace("T", " ")}
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <button
                      onClick={() => eliminarCita(index)}
                      className="bg-red-50 text-red-500 px-5 py-2 rounded-xl text-[9px] font-black uppercase hover:bg-red-500 hover:text-white transition-all shadow-sm"
                    >
                      Cancelar Cita
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-24 text-center">
                  <div className="flex flex-col items-center gap-2 opacity-20">
                    <span className="text-5xl">📅</span>
                    <p className="uppercase font-black text-[10px] tracking-[0.5em]">
                      No hay citas agendadas
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
