import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const showAlert = ({ title, text, icon, color, navigate, url }) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonColor: color || "#1E3A8A", // Azul Profundo para el botón de alerta
    timer: icon === "success" ? 2000 : undefined,
    timerProgressBar: icon === "success",
    background: "#fff",
    color: "#1E3A8A", // Texto de la alerta en azul
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
      showAlert({
        title: "¡Bienvenida!",
        text: `Hola de nuevo, ${usuarioEncontrado.nombre}`,
        icon: "success",
        navigate: navigate,
        url: "/admin",
      });
    } else {
      showAlert({
        title: "Error de Acceso",
        text: "Correo o contraseña incorrectos",
        icon: "error",
        color: "#2563EB", // Azul Cobalto para el error
      });
    }
  };

  return (
    <main className="grow flex items-center justify-center px-4 min-h-screen bg-linear-to-br from-[#E5D3B3] via-[#A2CFFE] to-[#8DAA91] relative overflow-hidden">
      {/* ORBES DECORATIVOS */}
      <div className="absolute top-[-5%] left-[-5%] w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-96 h-96 bg-[#8DAA91]/20 rounded-full blur-[80px] animate-pulse delay-700"></div>

      {/* TARJETA LOGIN */}
      <div className="max-w-md w-full bg-white/60 backdrop-blur-xl rounded-[3rem] shadow-[0_20px_50px_rgba(30,58,138,0.15)] p-10 border border-white/60 z-10">
        <h1 className="text-4xl font-black text-center mb-10 tracking-tighter text-[#1E3A8A] uppercase italic">
          Beauty-flow{" "}
          <span className="text-[#2563EB] not-italic">Optimizer</span>
        </h1>

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
              className="w-full px-6 py-4 bg-white/80 border border-[#A2CFFE]/30 rounded-2xl text-[#1E3A8A] font-bold placeholder:text-[#6A9AB0]/60 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all shadow-sm"
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
              className="w-full px-6 py-4 bg-white/80 border border-[#A2CFFE]/30 rounded-2xl text-[#1E3A8A] font-bold placeholder:text-[#6A9AB0]/60 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <button
              type="submit"
              className="w-full bg-[#2563EB] hover:bg-[#1E3A8A] text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-[#2563EB]/20 active:scale-[0.98] uppercase tracking-widest text-xs"
            >
              Iniciar Sesión
            </button>

            <div className="space-y-3">
              <Link
                to="/register"
                className="w-full block text-center bg-white/80 hover:bg-white text-[#1E3A8A] font-black py-4 rounded-2xl transition-all shadow-sm active:scale-[0.98] border border-[#A2CFFE] uppercase text-xs tracking-widest"
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
