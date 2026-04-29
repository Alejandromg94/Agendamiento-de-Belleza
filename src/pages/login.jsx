import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../assets/img/logo.jpg";

const showAlert = ({ title, text, icon, color, navigate, url }) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonColor: color || "#C5A059",
    timer: icon === "success" ? 2000 : undefined,
    timerProgressBar: icon === "success",
    background: "#0F0F0F",
    color: "#FFFFFF",
    iconColor: "#C5A059",
    customClass: {
      popup: "rounded-[2rem] border border-white/10",
    },
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
      
      // Lógica de redirección por Rol
      let url = "/";
      if (usuarioEncontrado.rol === "Administrador") {
        url = "/admin-panel";
      } else if (usuarioEncontrado.rol === "Profesional") {
        url = "/professional-panel";
      } else if (usuarioEncontrado.rol === "Cliente") {
        url = "/customer-portal";
      }

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
        color: "#EF4444",
      });
    }
  };

  return (
    <main className="grow flex items-center justify-center px-4 min-h-screen bg-[#050505] relative overflow-hidden font-sans">
      {/* ORBES DECORATIVOS */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px]"></div>

      {/* TARJETA LOGIN */}
      <div className="max-w-md w-full bg-[#0A0A0A] backdrop-blur-3xl rounded-[3rem] p-10 border border-white/5 z-10 shadow-2xl">
        {/* 2. CONTENEDOR DEL LOGO */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-32 h-32 mb-8 p-1.5 bg-gold-gradient rounded-[2.5rem] gold-shadow flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gold-gradient opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
            <div className="w-full h-full bg-[#0A0A0A] rounded-[2.3rem] flex items-center justify-center overflow-hidden p-4 relative z-10">
              <img
                src={logo}
                alt="Logo Beauty-flow"
                className="w-full h-full object-contain brightness-110"
              />
            </div>
          </div>

          <h1 className="text-3xl font-black text-center tracking-tighter text-white uppercase italic leading-none font-display">
            SV BEAUTY <br />
            <span className="text-gold-gradient not-italic text-xl tracking-widest font-sans">
              STUDIO
            </span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="formulario__grupo">
            <label className="block text-[11px] font-black text-gray-500 mb-2 ml-1 uppercase tracking-[0.2em]">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="correo"
              value={datos.correo}
              onChange={handleInputChange}
              placeholder="tu@correo.com"
              required
              className="w-full px-6 py-5 bg-[#121212] border border-white/5 rounded-2xl text-white font-medium placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
            />
          </div>

          <div className="formulario__grupo">
            <label className="block text-[11px] font-black text-gray-500 mb-2 ml-1 uppercase tracking-[0.2em]">
              Contraseña
            </label>
            <input
              type="password"
              name="contrasena"
              value={datos.contrasena}
              onChange={handleInputChange}
              placeholder="••••••••"
              required
              className="w-full px-6 py-5 bg-[#121212] border border-white/5 rounded-2xl text-white font-medium placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
            />
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <button
              type="submit"
              className="w-full bg-gold-gradient text-black font-black py-5 rounded-2xl transition-all gold-shadow active:scale-[0.98] uppercase tracking-[0.2em] text-xs"
            >
              Iniciar Sesión
            </button>

            <div className="space-y-4 pt-4">
              <Link
                to="/register"
                className="w-full block text-center text-gray-400 hover:text-white font-bold py-2 transition-all uppercase text-[10px] tracking-widest"
              >
                ¿No tienes cuenta?{" "}
                <span className="text-accent ml-2">Regístrate</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
