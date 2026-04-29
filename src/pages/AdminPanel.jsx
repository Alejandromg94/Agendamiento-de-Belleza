import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("usuarios");
  // Inicializar estado con datos del localStorage
  const [usuarios, setUsuarios] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("usuarios")) || [];
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
      return [];
    }
  });

  // Estados para Edición y Formularios
  const [editandoId, setEditandoId] = useState(null);
  const [userFormData, setUserFormData] = useState({
    nombre: "",
    correo: "",
    rol: "Profesional", // Valor inicial actualizado
    contrasena: "",
    activo: true,
  });

  // Ya no necesitamos useEffect para cargar usuarios

  const save = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Error al guardar datos:", error);
      Swal.fire("Error", "No se pudieron guardar los cambios", "error");
    }
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    let nuevaLista = [...usuarios];

    if (editandoId !== null) {
      nuevaLista[editandoId] = userFormData;
      Swal.fire({
        title: "Perfil Actualizado",
        icon: "success",
        confirmButtonColor: "#C5A059",
      });
    } else {
      nuevaLista.push({ ...userFormData, activo: true });
      Swal.fire({
        title: "Usuario Creado",
        icon: "success",
        confirmButtonColor: "#C5A059",
      });
    }

    setUsuarios(nuevaLista);
    save("usuarios", nuevaLista);
    resetUserForm();
  };

  const resetUserForm = () => {
    setEditandoId(null);
    setUserFormData({
      nombre: "",
      correo: "",
      rol: "Profesional",
      contrasena: "",
      activo: true,
    });
  };

  const toggleUserStatus = (index) => {
    const nueva = usuarios.map((u, i) =>
      i === index ? { ...u, activo: !u.activo } : u,
    );
    setUsuarios(nueva);
    save("usuarios", nueva);
  };

  const eliminar = (index) => {
    Swal.fire({
      title: "¿Eliminar permanentemente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const n = usuarios.filter((_, i) => i !== index);
        setUsuarios(n);
        save("usuarios", n);
      }
    });
  };

  return (
    <div className="flex min-h-screen bg-[#050505] font-sans">
      {/* SIDEBAR FIJO */}
      <aside className="w-80 bg-[#0A0A0A] text-white flex flex-col fixed h-full shadow-2xl z-20 border-r border-white/5">
        <div className="p-12 text-center border-b border-white/5 bg-black/20">
          <h2 className="text-gold-gradient font-black text-3xl uppercase italic tracking-tighter leading-none font-display">
            SV STUDIO
          </h2>
          <p className="text-[10px] tracking-[0.5em] text-gray-600 mt-4 uppercase font-black">
            Administration
          </p>
        </div>

        <nav className="p-8 mt-10 space-y-6">
          <button
            onClick={() => {
              setActiveTab("usuarios");
              resetUserForm();
            }}
            className={`w-full flex items-center gap-5 px-8 py-5 rounded-[2rem] transition-all font-black text-[10px] uppercase tracking-widest ${activeTab === "usuarios" ? "bg-gold-gradient text-black gold-shadow" : "text-gray-500 hover:bg-white/5 hover:text-white"}`}
          >
            <span className="text-lg">👥</span> Gestión Staff
          </button>

          <button
            onClick={() => {
              setActiveTab("agenda");
              navigate("/agenda");
            }}
            className={`w-full flex items-center gap-5 px-8 py-5 rounded-[2rem] transition-all font-black text-[10px] uppercase tracking-widest ${activeTab === "agenda" ? "bg-gold-gradient text-black gold-shadow" : "text-gray-500 hover:bg-white/5 hover:text-white"}`}
          >
            <span className="text-lg">📅</span> Agenda Citas
          </button>
        </nav>

        <button
          onClick={() => {
            localStorage.removeItem("user_token");
            navigate("/");
          }}
          className="mt-auto m-10 p-5 bg-red-950/20 text-red-500 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all border border-red-900/20"
        >
          Finalizar Sesión
        </button>
      </aside>

      {/* ÁREA DE TRABAJO */}
      <main className="flex-grow ml-80 p-16">
        <div className="mb-16 flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-black text-white uppercase tracking-tighter italic font-display">
              Control de <span className="text-gold-gradient">Personal</span>
            </h1>
            <div className="w-24 h-1 bg-gold-gradient mt-4"></div>
          </div>
          <button
            onClick={() => navigate("/")}
            className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white/10 transition-all shadow-2xl"
          >
            Panel Público
          </button>
        </div>

        {/* SÚPER FORMULARIO ACTUALIZADO */}
        <section
          className={`mb-16 p-10 rounded-[4rem] shadow-3xl border transition-all relative overflow-hidden ${editandoId !== null ? "bg-gold-gradient/5 border-accent" : "bg-[#0A0A0A] border-white/5"}`}
        >
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-8 flex items-center gap-3">
            <span className={`w-2 h-2 rounded-full ${editandoId !== null ? "bg-yellow-500 animate-pulse" : "bg-green-500"}`}></span>
            {editandoId !== null
              ? "Modificando Credenciales"
              : "Alta de Nuevo Personal"}
          </h3>

          <form
            onSubmit={handleUserSubmit}
            className="flex flex-wrap gap-8 items-end relative z-10"
          >
            <div className="flex-1 min-w-[220px]">
              <label className="text-[9px] font-black uppercase mb-3 block ml-1 text-gray-500 tracking-widest">
                Nombre Completo
              </label>
              <input
                type="text"
                value={userFormData.nombre}
                onChange={(e) =>
                  setUserFormData({ ...userFormData, nombre: e.target.value })
                }
                className="w-full bg-[#121212] border-white/5 border px-6 py-5 rounded-2xl focus:border-accent outline-none transition-all text-white font-medium"
                required
              />
            </div>

            <div className="flex-1 min-w-[220px]">
              <label className="text-[9px] font-black uppercase mb-3 block ml-1 text-gray-500 tracking-widest">
                Email Corporativo
              </label>
              <input
                type="email"
                value={userFormData.correo}
                onChange={(e) =>
                  setUserFormData({ ...userFormData, correo: e.target.value })
                }
                className="w-full bg-[#121212] border-white/5 border px-6 py-5 rounded-2xl focus:border-accent outline-none transition-all text-white font-medium"
                required
              />
            </div>

            <div className="w-56">
              <label className="text-[9px] font-black uppercase mb-3 block ml-1 text-accent tracking-widest">
                Rango / Rol
              </label>
              <select
                value={userFormData.rol}
                onChange={(e) =>
                  setUserFormData({ ...userFormData, rol: e.target.value })
                }
                className="w-full bg-[#121212] border-white/5 border px-6 py-5 rounded-2xl focus:border-accent outline-none transition-all text-white font-black text-xs cursor-pointer italic"
              >
                <option value="Administrador">Administrador</option>
                <option value="Profesional">Profesional</option>
                <option value="Cliente">Cliente</option>
              </select>
            </div>

            <div className="w-40">
              <label className="text-[9px] font-black uppercase mb-3 block ml-1 text-gray-500 tracking-widest">
                Acceso
              </label>
              <input
                type="text"
                value={userFormData.contrasena}
                onChange={(e) =>
                  setUserFormData({
                    ...userFormData,
                    contrasena: e.target.value,
                  })
                }
                className="w-full bg-[#121212] border-white/5 border px-6 py-5 rounded-2xl focus:border-accent outline-none text-white font-medium"
                required
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-gold-gradient text-black px-12 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all gold-shadow active:scale-95"
              >
                {editandoId !== null ? "Actualizar" : "Vincular"}
              </button>
              {editandoId !== null && (
                <button
                  onClick={resetUserForm}
                  type="button"
                  className="bg-white/5 text-gray-500 px-6 py-5 rounded-2xl font-black text-sm hover:text-white transition-all"
                >
                  ✕
                </button>
              )}
            </div>
          </form>
        </section>

        {/* TABLA DE PERSONAL */}
        <div className="bg-[#0A0A0A] rounded-[4rem] shadow-3xl border border-white/5 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/40 border-b border-white/5">
                <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">
                  Estado / Integrante
                </th>
                <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">
                  Jerarquía
                </th>
                <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-center text-gray-500">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {usuarios.map((u, i) => (
                <tr
                  key={i}
                  className={`hover:bg-white/[0.02] transition-all ${!u.activo ? "opacity-30 grayscale" : ""}`}
                >
                  <td className="p-8">
                    <div className="flex items-center gap-6">
                      <button
                        onClick={() => toggleUserStatus(i)}
                        className={`w-12 h-6 rounded-full relative transition-all border border-white/10 ${u.activo ? "bg-accent" : "bg-gray-900"}`}
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${u.activo ? "left-7" : "left-1"}`}
                        ></div>
                      </button>
                      <div>
                        <div className="font-black text-white uppercase text-sm tracking-tight font-display">
                          {u.nombre}
                        </div>
                        <div className="text-[10px] text-gray-500 font-bold tracking-widest mt-1">
                          {u.correo}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-8">
                    <span
                      className={`text-[8px] font-black px-5 py-2 rounded-full uppercase tracking-widest border ${
                        u.rol === "Administrador"
                          ? "bg-white text-black border-white"
                          : u.rol === "Profesional"
                            ? "bg-accent/10 text-accent border-accent/20"
                            : "bg-gray-900 text-gray-500 border-white/5"
                      }`}
                    >
                      {u.rol}
                    </span>
                  </td>
                  <td className="p-8">
                    <div className="flex justify-center gap-6">
                      <button
                        onClick={() => {
                          setEditandoId(i);
                          setUserFormData(u);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-accent hover:text-white font-black text-[9px] uppercase tracking-widest transition-all"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => eliminar(i)}
                        className="text-red-900/60 hover:text-red-500 font-black text-[9px] uppercase tracking-widest transition-all"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {usuarios.length === 0 && (
            <div className="p-32 text-center text-gray-700 uppercase font-black text-[10px] tracking-[1em]">
              Registro Vacío
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
