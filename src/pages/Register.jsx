import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    documento: "",
    tipoDocumento: "CC",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
    sexo: "",
    direccion: "",
    tipoUsuario: "cliente",
    celular: "",
    terminos: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDatos({
      ...datos,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registro enviado:", datos);
  };

  return (
    <main className="grow flex items-center justify-center px-4 py-10 min-h-screen bg-linear-to-br from-[#E5D3B3] via-[#A2CFFE] to-[#8DAA91] relative overflow-hidden font-sans">
      {/* Orbes de fondo con toque azul */}
      <div className="absolute top-[-5%] left-[-5%] w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-96 h-96 bg-[#8DAA91]/20 rounded-full blur-[80px] animate-pulse delay-700"></div>

      <div className="max-w-6xl w-full bg-white/50 backdrop-blur-2xl rounded-[3rem] shadow-[0_20px_50px_rgba(30,58,138,0.15)] p-8 md:p-14 border border-white/60 z-10 my-10">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-black tracking-tighter text-[#1E3A8A] uppercase italic">
            Beauty-flow{" "}
            <span className="text-[#2563EB] not-italic text-4xl">
              Optimizer
            </span>
          </h1>
          <p className="text-[#1E3A8A] font-black text-[10px] uppercase tracking-[0.4em] mt-3 opacity-80">
            Únete a nuestra experiencia estética
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* SECCIÓN 1: IDENTIDAD */}
          <section className="space-y-5">
            <h2 className="text-[#1E3A8A] text-[11px] font-black uppercase tracking-[0.3em] border-b-2 border-[#A2CFFE]/40 pb-2">
              Identidad Personal
            </h2>
            <div>
              <label className="block text-[10px] font-black text-[#1E3A8A] mb-2 ml-1 uppercase">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={datos.nombre}
                onChange={handleInputChange}
                placeholder="Ej. Carlos"
                required
                className="w-full px-6 py-4 bg-white/80 border border-[#A2CFFE]/30 rounded-2xl text-[#1E3A8A] font-bold placeholder:text-[#6A9AB0]/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all shadow-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-[#1E3A8A] mb-2 ml-1 uppercase">
                Apellidos
              </label>
              <input
                type="text"
                name="apellido"
                value={datos.apellido}
                onChange={handleInputChange}
                placeholder="Ej. Rodriguez"
                required
                className="w-full px-6 py-4 bg-white/80 border border-[#A2CFFE]/30 rounded-2xl text-[#1E3A8A] font-bold placeholder:text-[#6A9AB0]/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all shadow-sm"
              />
            </div>
            <div className="flex gap-3">
              <div className="w-1/3">
                <label className="block text-[10px] font-black text-[#1E3A8A] mb-2 ml-1 uppercase">
                  Tipo
                </label>
                <select
                  name="tipoDocumento"
                  value={datos.tipoDocumento}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/80 border border-[#A2CFFE]/30 rounded-2xl text-[#1E3A8A] font-bold focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all cursor-pointer"
                >
                  <option value="CC">CC</option>
                  <option value="CE">CE</option>
                </select>
              </div>
              <div className="w-2/3">
                <label className="block text-[10px] font-black text-[#1E3A8A] mb-2 ml-1 uppercase">
                  Documento
                </label>
                <input
                  type="number"
                  name="documento"
                  value={datos.documento}
                  onChange={handleInputChange}
                  placeholder="1020..."
                  required
                  className="w-full px-6 py-4 bg-white/80 border border-[#A2CFFE]/30 rounded-2xl text-[#1E3A8A] font-bold placeholder:text-[#6A9AB0]/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all shadow-sm"
                />
              </div>
            </div>
          </section>

          {/* SECCIÓN 2: PERFIL */}
          <section className="space-y-5">
            <h2 className="text-[#1E3A8A] text-[11px] font-black uppercase tracking-[0.3em] border-b-2 border-[#A2CFFE]/40 pb-2">
              Configuración de Perfil
            </h2>
            <div>
              <label className="block text-[10px] font-black text-[#1E3A8A] mb-2 ml-1 uppercase">
                Género
              </label>
              <select
                name="sexo"
                value={datos.sexo}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-4 bg-white/80 border border-[#A2CFFE]/30 rounded-2xl text-[#1E3A8A] font-bold focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all shadow-sm cursor-pointer"
              >
                <option value="">Seleccionar...</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-black text-[#1E3A8A] mb-2 ml-1 uppercase">
                Tipo de Usuario
              </label>
              <select
                name="tipoUsuario"
                value={datos.tipoUsuario}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-white/80 border border-[#A2CFFE]/30 rounded-2xl text-[#2563EB] font-black italic focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all shadow-sm cursor-pointer"
              >
                <option value="cliente">Cliente</option>
                <option value="profesional">Profesional</option>
              </select>
            </div>
          </section>

          {/* SECCIÓN 3: CONTACTO Y UBICACIÓN */}
          <section className="space-y-5 lg:col-span-1 md:col-span-2">
            <h2 className="text-[#1E3A8A] text-[11px] font-black uppercase tracking-[0.3em] border-b-2 border-[#A2CFFE]/40 pb-2">
              Contacto y Ubicación
            </h2>
            <div>
              <label className="block text-[10px] font-black text-[#1E3A8A] mb-2 ml-1 uppercase">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="correo"
                value={datos.correo}
                onChange={handleInputChange}
                placeholder="nombre@ejemplo.com"
                required
                className="w-full px-6 py-4 bg-white/80 border border-[#A2CFFE]/30 rounded-2xl text-[#1E3A8A] font-bold placeholder:text-[#6A9AB0]/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all shadow-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-[#1E3A8A] mb-2 ml-1 uppercase">
                Número Celular
              </label>
              <input
                type="tel"
                name="celular"
                value={datos.celular}
                onChange={handleInputChange}
                placeholder="300 123..."
                required
                className="w-full px-6 py-4 bg-white/80 border border-[#A2CFFE]/30 rounded-2xl text-[#1E3A8A] font-bold placeholder:text-[#6A9AB0]/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all shadow-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-[#1E3A8A] mb-2 ml-1 uppercase">
                Dirección de Residencia
              </label>
              <input
                type="text"
                name="direccion"
                value={datos.direccion}
                onChange={handleInputChange}
                placeholder="Calle 10 # 50 - 20"
                required
                className="w-full px-6 py-4 bg-white/80 border border-[#A2CFFE]/30 rounded-2xl text-[#1E3A8A] font-bold placeholder:text-[#6A9AB0]/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all shadow-sm"
              />
            </div>
          </section>

          {/* SECCIÓN 4: SEGURIDAD Y FINALIZAR */}
          <section className="md:col-span-2 lg:col-span-3 bg-[#A2CFFE]/10 p-8 rounded-[2.5rem] border border-[#2563EB]/10 mt-4 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[11px] font-black text-[#1E3A8A] mb-2 ml-1 uppercase">
                  Contraseña Nueva
                </label>
                <input
                  type="password"
                  name="contrasena"
                  value={datos.contrasena}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  required
                  className="w-full px-6 py-4 bg-white border border-[#2563EB]/20 rounded-2xl text-[#1E3A8A] font-bold focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-black text-[#1E3A8A] mb-2 ml-1 uppercase">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  name="confirmarContrasena"
                  value={datos.confirmarContrasena}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  required
                  className="w-full px-6 py-4 bg-white border border-[#2563EB]/20 rounded-2xl text-[#1E3A8A] font-bold focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center">
              <label className="flex items-center gap-4 cursor-pointer mb-8 group">
                <input
                  type="checkbox"
                  name="terminos"
                  checked={datos.terminos}
                  onChange={handleInputChange}
                  required
                  className="w-6 h-6 rounded-lg border-[#2563EB]/30 bg-white text-[#2563EB] focus:ring-0 transition-all cursor-pointer shadow-sm"
                />
                <span className="text-[11px] font-black text-[#1E3A8A] uppercase tracking-tighter">
                  Acepto los términos y condiciones de privacidad.
                </span>
              </label>

              <button
                type="submit"
                className="max-w-md w-full bg-[#2563EB] hover:bg-[#1E3A8A] text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-[#2563EB]/20 active:scale-[0.98] uppercase tracking-[0.3em] text-xs"
              >
                FINALIZAR REGISTRO
              </button>

              <Link
                to="/login"
                className="mt-6 text-[11px] font-black text-[#1E3A8A] hover:text-[#2563EB] uppercase tracking-[0.2em] transition-all"
              >
                ¿Ya tienes cuenta?{" "}
                <span className="text-[#2563EB] underline ml-1 font-black">
                  Entrar ahora
                </span>
              </Link>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
};

export default Register;
