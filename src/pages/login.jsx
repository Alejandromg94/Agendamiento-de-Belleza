import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
// 1. Importa tu logo aquí (ajusta la ruta según tu carpeta)
import logo from "../assets/img/logo.jpg";

const showAlert = ({ title, text, icon, color, navigate, url }) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonColor: color || "#1E3A8A",
    timer: icon === "success" ? 2000 : undefined,
    timerProgressBar: icon === "success",
    background: "#fff",
    color: "#1E3A8A",
  }).then(() => {
    if (navigate && url) {
      navigate(url);
    }
  });
};

const Login = () => {
  const navigate = useNavigate();
  const [datos, setDatos] = useState({ correo: "", contrasena: "" });

  const handleInputChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const consultarLocalStorage = (llave) => {
    const datosGuardados = localStorage.getItem(llave);
    const lista = datosGuardados ? JSON.parse(datosGuardados) : [];
    if (lista.length === 0) {
      const usuarioMaestro = [
        {
          correo: "admin@correo.com",
          contrasena: "123456",
          nombre: "Administrador",
          rol: "Administrador",
        },
      ];
      localStorage.setItem(llave, JSON.stringify(usuarioMaestro));
      return usuarioMaestro;
    }
    return lista;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarios = consultarLocalStorage("usuarios");
    const usuarioEncontrado = usuarios.find(
      (u) => u.correo === datos.correo && u.contrasena === datos.contrasena,
    );

    if (usuarioEncontrado) {
      localStorage.setItem("user_token", JSON.stringify(usuarioEncontrado));
      const url =
        usuarioEncontrado.rol === "Administrador" ? "/admin-panel" : "/admin";
      showAlert({
        title: "¡Bienvenida!",
        text: `Hola de nuevo, ${usuarioEncontrado.nombre}`,
        icon: "success",
        navigate: navigate,
        url: url,
      });
    } else {
      showAlert({
        title: "Error de Acceso",
        text: "Correo o contraseña incorrectos",
        icon: "error",
        color: "#2563EB",
      });
    }
  };

  return (
    <main className="grow flex items-center justify-center px-4 min-h-screen bg-linear-to-br from-[#E5D3B3] via-[#A2CFFE] to-[#8DAA91] relative overflow-hidden font-sans">
      {/* ORBES DECORATIVOS */}
      <div className="absolute top-[-5%] left-[-5%] w-96 h-96 bg-[#2563EB]/15 rounded-full blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-96 h-96 bg-[#1E3A8A]/10 rounded-full blur-[80px] animate-pulse delay-700"></div>

      {/* TARJETA LOGIN */}
      <div className="max-w-md w-full bg-white/50 backdrop-blur-2xl rounded-[3rem] shadow-[0_25px_60px_rgba(30,58,138,0.2)] p-10 border border-white/60 z-10">
        {/* 2. CONTENEDOR DEL LOGO */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 mb-4 p-1 bg-white rounded-2xl shadow-lg shadow-[#2563EB]/10 border border-[#A2CFFE]/30 flex items-center justify-center">
            <img
              src={logo}
              alt="Logo Beauty-flow"
              className="w-full h-full object-contain"
            />
          </div>

          <h1 className="text-3xl font-black text-center tracking-tighter text-[#1E3A8A] uppercase italic leading-none">
            Beauty-flow <br />
            <span className="text-[#2563EB] not-italic text-2xl">
              Optimizer
            </span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="formulario__grupo">
            <label className="block text-[11px] font-black text-[#1E3A8A] mb-2 ml-1 uppercase tracking-[0.2em]">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="correo"
              value={datos.correo}
              onChange={handleInputChange}
              placeholder="tu@correo.com"
              required
              className="w-full px-6 py-4 bg-white/80 border border-[#A2CFFE]/40 rounded-2xl text-[#1E3A8A] font-bold placeholder:text-[#6A9AB0]/60 focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10 focus:border-[#2563EB] transition-all shadow-sm"
            />
          </div>

          <div className="formulario__grupo">
            <label className="block text-[11px] font-black text-[#1E3A8A] mb-2 ml-1 uppercase tracking-[0.2em]">
              Contraseña
            </label>
            <input
              type="password"
              name="contrasena"
              value={datos.contrasena}
              onChange={handleInputChange}
              placeholder="••••••••"
              required
              className="w-full px-6 py-4 bg-white/80 border border-[#A2CFFE]/40 rounded-2xl text-[#1E3A8A] font-bold placeholder:text-[#6A9AB0]/60 focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10 focus:border-[#2563EB] transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <button
              type="submit"
              className="w-full bg-[#2563EB] hover:bg-[#1E3A8A] text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-[#2563EB]/30 active:scale-[0.98] uppercase tracking-[0.2em] text-xs"
            >
              Iniciar Sesión
            </button>

            <div className="space-y-3">
              <Link
                to="/register"
                className="w-full block text-center bg-white/80 hover:bg-white text-[#1E3A8A] font-black py-4 rounded-2xl transition-all shadow-sm active:scale-[0.98] border-2 border-[#A2CFFE]/30 uppercase text-[10px] tracking-widest"
              >
                Crear Cuenta
              </Link>

              <Link
                to="/forgot-password"
                className="text-[10px] text-center block mt-4 text-[#2563EB] hover:text-[#1E3A8A] transition-colors font-black uppercase tracking-widest"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
