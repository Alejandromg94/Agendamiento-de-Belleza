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
    <div className="flex min-h-screen bg-[#FDFCFB] font-sans">
      {/* SIDEBAR FIJO */}
      <aside className="w-72 bg-black text-white flex flex-col fixed h-full shadow-2xl z-20">
        <div className="p-10 text-center border-b border-[#C5A059]/20">
          <h2 className="text-[#F7DC6F] font-black text-2xl uppercase italic tracking-tighter leading-none">
            Stefania Vanegas
          </h2>
          <p className="text-[10px] tracking-[0.4em] text-gray-500 mt-2 uppercase">
            Beauty Studio
          </p>
        </div>

        <nav className="p-6 mt-8 space-y-4">
          <button
            onClick={() => {
              setActiveTab("usuarios");
              resetUserForm();
            }}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm ${activeTab === "usuarios" ? "bg-[#C5A059] text-white shadow-xl shadow-[#C5A059]/30" : "text-gray-500 hover:bg-white/5"}`}
          >
            <span className="text-lg">👥</span> Gestión de Staff
          </button>

          <button
            onClick={() => {
              setActiveTab("agenda");
              navigate("/agenda");
            }}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm ${activeTab === "agenda" ? "bg-[#C5A059] text-white shadow-xl shadow-[#C5A059]/30" : "text-gray-500 hover:bg-white/5"}`}
          >
            <span className="text-lg">📅</span> Agenda de Citas
          </button>
        </nav>

        <button
          onClick={() => {
            localStorage.removeItem("user_token");
            navigate("/");
          }}
          className="mt-auto m-8 p-4 bg-red-900/10 text-red-500 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all border border-red-900/20"
        >
          Cerrar Sesión
        </button>
      </aside>

      {/* ÁREA DE TRABAJO */}
      <main className="flex-grow ml-72 p-12">
        <div className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black text-black uppercase tracking-tighter italic">
              Administrar Staff
            </h1>
            <div className="w-20 h-1 bg-[#C5A059] mt-2"></div>
          </div>
          <button
            onClick={() => navigate("/admin")}
            className="bg-[#1E3A8A] text-white px-6 py-3 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-2xl shadow-blue-200"
          >
            Ir al Inicio
          </button>
        </div>

        {/* SÚPER FORMULARIO ACTUALIZADO */}
        <section
          className={`mb-12 p-8 rounded-[3rem] shadow-2xl border-2 transition-all ${editandoId !== null ? "bg-[#F7DC6F]/5 border-[#C5A059]" : "bg-white border-transparent"}`}
        >
          <h3 className="text-[10px] font-black uppercase tracking-widest text-[#C5A059] mb-6 flex items-center gap-2">
            {editandoId !== null
              ? "🟡 Editando usuario"
              : "🟢 Registrar nuevo usuario"}
          </h3>

          <form
            onSubmit={handleUserSubmit}
            className="flex flex-wrap gap-6 items-end"
          >
            <div className="flex-1 min-w-[180px]">
              <label className="text-[10px] font-black uppercase mb-2 block ml-1">
                Nombre Completo
              </label>
              <input
                type="text"
                value={userFormData.nombre}
                onChange={(e) =>
                  setUserFormData({ ...userFormData, nombre: e.target.value })
                }
                className="w-full bg-gray-50 border-gray-200 border p-4 rounded-2xl focus:border-[#C5A059] outline-none transition-all shadow-sm"
                required
              />
            </div>

            <div className="flex-1 min-w-[180px]">
              <label className="text-[10px] font-black uppercase mb-2 block ml-1">
                Email
              </label>
              <input
                type="email"
                value={userFormData.correo}
                onChange={(e) =>
                  setUserFormData({ ...userFormData, correo: e.target.value })
                }
                className="w-full bg-gray-50 border-gray-200 border p-4 rounded-2xl focus:border-[#C5A059] outline-none transition-all shadow-sm"
                required
              />
            </div>

            {/* SELECT DE ROL ACTUALIZADO */}
            <div className="w-48">
              <label className="text-[10px] font-black uppercase mb-2 block ml-1 text-[#C5A059]">
                Tipo de Usuario
              </label>
              <select
                value={userFormData.rol}
                onChange={(e) =>
                  setUserFormData({ ...userFormData, rol: e.target.value })
                }
                className="w-full bg-gray-50 border-gray-200 border p-4 rounded-2xl focus:border-[#C5A059] outline-none transition-all shadow-sm font-bold text-xs cursor-pointer"
              >
                <option value="Administrador">Administrador</option>
                <option value="Profesional">Profesional</option>
                <option value="Cliente">Cliente</option>
              </select>
            </div>

            <div className="w-32">
              <label className="text-[10px] font-black uppercase mb-2 block ml-1">
                Clave
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
                className="w-full bg-gray-50 border-gray-200 border p-4 rounded-2xl focus:border-[#C5A059] outline-none shadow-sm"
                required
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-black text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#C5A059] transition-all shadow-lg active:scale-95"
              >
                {editandoId !== null ? "Guardar Cambios" : "Registrar"}
              </button>
              {editandoId !== null && (
                <button
                  onClick={resetUserForm}
                  type="button"
                  className="bg-gray-200 px-6 py-4 rounded-2xl font-black text-[10px] uppercase text-gray-500"
                >
                  X
                </button>
              )}
            </div>
          </form>
        </section>

        {/* TABLA DE PERSONAL */}
        <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest">
                  Estado / Usuario
                </th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest">
                  Rol
                </th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-center">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {usuarios.map((u, i) => (
                <tr
                  key={i}
                  className={`hover:bg-gray-50 transition-all ${!u.activo ? "opacity-40 grayscale" : ""}`}
                >
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleUserStatus(i)}
                        className={`w-10 h-5 rounded-full relative transition-all ${u.activo ? "bg-[#C5A059]" : "bg-gray-300"}`}
                      >
                        <div
                          className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${u.activo ? "left-6" : "left-1"}`}
                        ></div>
                      </button>
                      <div>
                        <div className="font-black text-gray-800 uppercase text-xs tracking-tight">
                          {u.nombre}
                        </div>
                        <div className="text-[10px] text-gray-400 font-medium">
                          {u.correo}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span
                      className={`text-[9px] font-black px-4 py-1.5 rounded-full uppercase border ${
                        u.rol === "Administrador"
                          ? "bg-black text-white"
                          : u.rol === "Profesional"
                            ? "bg-[#F7DC6F]/20 text-[#C5A059] border-[#C5A059]/20"
                            : "bg-gray-100 text-gray-500 border-gray-200"
                      }`}
                    >
                      {u.rol}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => {
                          setEditandoId(i);
                          setUserFormData(u);
                          window.scrollTo(0, 0);
                        }}
                        className="text-blue-400 hover:text-blue-600 font-black text-[10px] uppercase transition-colors"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => eliminar(i)}
                        className="text-red-300 hover:text-red-500 font-black text-[10px] uppercase transition-colors"
                      >
                        Borrar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {usuarios.length === 0 && (
            <div className="p-24 text-center text-gray-300 uppercase font-black text-[10px] tracking-[0.5em]">
              No hay usuarios registrados
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
