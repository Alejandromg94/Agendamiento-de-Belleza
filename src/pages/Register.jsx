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
    <main className="grow flex items-center justify-center px-4 py-10 min-h-screen bg-[#050505] relative overflow-hidden font-sans">
      {/* Orbes de fondo */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl w-full bg-[#0A0A0A] backdrop-blur-3xl rounded-[4rem] p-8 md:p-14 border border-white/5 z-10 my-10 shadow-3xl">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic font-display">
            SV BEAUTY <span className="text-gold-gradient not-italic">STUDIO</span>
          </h1>
          <p className="text-accent font-black text-[10px] uppercase tracking-[0.5em] mt-4 opacity-80">
            Únete a nuestra experiencia de élite
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {/* SECCIÓN 1: IDENTIDAD */}
          <section className="space-y-6">
            <h2 className="text-white text-[11px] font-black uppercase tracking-[0.4em] border-b border-white/10 pb-3 font-display italic">
              Identidad Personal
            </h2>
            <div>
              <label className="block text-[10px] font-black text-gray-500 mb-2 ml-1 uppercase">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={datos.nombre}
                onChange={handleInputChange}
                placeholder="Ej. Sofia"
                required
                className="w-full px-6 py-5 bg-[#121212] border border-white/5 rounded-2xl text-white font-medium placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-gray-500 mb-2 ml-1 uppercase">
                Apellidos
              </label>
              <input
                type="text"
                name="apellido"
                value={datos.apellido}
                onChange={handleInputChange}
                placeholder="Ej. Garcia"
                required
                className="w-full px-6 py-5 bg-[#121212] border border-white/5 rounded-2xl text-white font-medium placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/3">
                <label className="block text-[10px] font-black text-gray-500 mb-2 ml-1 uppercase">
                  Tipo
                </label>
                <select
                  name="tipoDocumento"
                  value={datos.tipoDocumento}
                  onChange={handleInputChange}
                  className="w-full px-4 py-5 bg-[#121212] border border-white/5 rounded-2xl text-white font-medium focus:outline-none focus:ring-1 focus:ring-accent transition-all cursor-pointer"
                >
                  <option value="CC">CC</option>
                  <option value="CE">CE</option>
                </select>
              </div>
              <div className="w-2/3">
                <label className="block text-[10px] font-black text-gray-500 mb-2 ml-1 uppercase">
                  Documento
                </label>
                <input
                  type="number"
                  name="documento"
                  value={datos.documento}
                  onChange={handleInputChange}
                  placeholder="1020..."
                  required
                  className="w-full px-6 py-5 bg-[#121212] border border-white/5 rounded-2xl text-white font-medium placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
            </div>
          </section>

          {/* SECCIÓN 2: PERFIL */}
          <section className="space-y-6">
            <h2 className="text-white text-[11px] font-black uppercase tracking-[0.4em] border-b border-white/10 pb-3 font-display italic">
              Configuración de Perfil
            </h2>
            <div>
              <label className="block text-[10px] font-black text-gray-500 mb-2 ml-1 uppercase">
                Género
              </label>
              <select
                name="sexo"
                value={datos.sexo}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-5 bg-[#121212] border border-white/5 rounded-2xl text-white font-medium focus:outline-none focus:ring-1 focus:ring-accent transition-all cursor-pointer"
              >
                <option value="">Seleccionar...</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-black text-gray-500 mb-2 ml-1 uppercase">
                Tipo de Usuario
              </label>
              <select
                name="tipoUsuario"
                value={datos.tipoUsuario}
                onChange={handleInputChange}
                className="w-full px-6 py-5 bg-[#121212] border border-white/5 rounded-2xl text-gold-gradient font-black italic focus:outline-none focus:ring-1 focus:ring-accent transition-all cursor-pointer"
              >
                <option value="cliente">Cliente</option>
                <option value="profesional">Profesional</option>
              </select>
            </div>
          </section>

          {/* SECCIÓN 3: CONTACTO Y UBICACIÓN */}
          <section className="space-y-6 lg:col-span-1 md:col-span-2">
            <h2 className="text-white text-[11px] font-black uppercase tracking-[0.4em] border-b border-white/10 pb-3 font-display italic">
              Contacto y Ubicación
            </h2>
            <div>
              <label className="block text-[10px] font-black text-gray-500 mb-2 ml-1 uppercase">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="correo"
                value={datos.correo}
                onChange={handleInputChange}
                placeholder="nombre@ejemplo.com"
                required
                className="w-full px-6 py-5 bg-[#121212] border border-white/5 rounded-2xl text-white font-medium placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-gray-500 mb-2 ml-1 uppercase">
                Número Celular
              </label>
              <input
                type="tel"
                name="celular"
                value={datos.celular}
                onChange={handleInputChange}
                placeholder="300 123..."
                required
                className="w-full px-6 py-5 bg-[#121212] border border-white/5 rounded-2xl text-white font-medium placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-gray-500 mb-2 ml-1 uppercase">
                Dirección
              </label>
              <input
                type="text"
                name="direccion"
                value={datos.direccion}
                onChange={handleInputChange}
                placeholder="Calle 10 # 50 - 20"
                required
                className="w-full px-6 py-5 bg-[#121212] border border-white/5 rounded-2xl text-white font-medium placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
              />
            </div>
          </section>

          {/* SECCIÓN 4: SEGURIDAD Y FINALIZAR */}
          <section className="md:col-span-2 lg:col-span-3 bg-white/2 p-10 rounded-[4rem] border border-white/5 mt-6 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-gold-gradient opacity-5 rounded-full blur-3xl"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
              <div>
                <label className="block text-[11px] font-black text-gray-500 mb-2 ml-1 uppercase tracking-widest">
                  Contraseña Nueva
                </label>
                <input
                  type="password"
                  name="contrasena"
                  value={datos.contrasena}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  required
                  className="w-full px-6 py-5 bg-[#121212] border border-white/5 rounded-2xl text-white font-medium focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-black text-gray-500 mb-2 ml-1 uppercase tracking-widest">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  name="confirmarContrasena"
                  value={datos.confirmarContrasena}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  required
                  className="w-full px-6 py-5 bg-[#121212] border border-white/5 rounded-2xl text-white font-medium focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center relative z-10">
              <label className="flex items-center gap-4 cursor-pointer mb-10 group">
                <input
                  type="checkbox"
                  name="terminos"
                  checked={datos.terminos}
                  onChange={handleInputChange}
                  required
                  className="w-6 h-6 rounded-lg border-white/10 bg-[#121212] text-accent focus:ring-0 transition-all cursor-pointer shadow-sm"
                />
                <span className="text-[11px] font-black text-gray-400 uppercase tracking-tighter group-hover:text-white transition-colors">
                  Acepto los términos y condiciones de privacidad.
                </span>
              </label>

              <button
                type="submit"
                className="max-w-md w-full bg-gold-gradient text-black font-black py-6 rounded-2xl transition-all gold-shadow active:scale-[0.98] uppercase tracking-[0.3em] text-xs"
              >
                FINALIZAR REGISTRO
              </button>

              <Link
                to="/login"
                className="mt-8 text-[11px] font-black text-gray-500 hover:text-white uppercase tracking-[0.2em] transition-all"
              >
                ¿Ya tienes cuenta?{" "}
                <span className="text-accent ml-2 font-black">
                  ENTRAR AHORA
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
