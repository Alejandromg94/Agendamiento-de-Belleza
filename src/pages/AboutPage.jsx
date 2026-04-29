import { useNavigate } from "react-router-dom";
import cede1 from "../assets/img/cede1.jpeg";

const AboutPage = () => {
  const navigate = useNavigate();

  const stats = [
    { cifra: "5+", etiqueta: "Años de Excelencia" },
    { cifra: "10k+", etiqueta: "Miradas Transformadas" },
    { cifra: "12", etiqueta: "Especialistas Elite" },
    { cifra: "100%", etiqueta: "Garantía de Lujo" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-hidden">
      {/* SECCIÓN 1: EL MANIFIESTO (HERO) */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-gold-gradient text-[10px] font-black uppercase tracking-[1em] mb-6 block">
            The Visionaries
          </span>
          <h1 className="text-7xl md:text-[9rem] font-black uppercase italic font-display leading-[0.8] mb-12 tracking-tighter">
            Elegancia <br />
            <span className="text-gold-gradient">Sin Límites</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-base leading-loose font-medium uppercase tracking-[0.2em]">
            No solo somos un estudio de belleza; somos arquitectos de la imagen.
            En SV Beauty Studio, fusionamos la técnica de alta precisión con un
            entorno de sofisticación absoluta en el corazón de Bello.
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent blur-3xl pointer-events-none"></div>
      </section>

      {/* SECCIÓN 2: QUIENES SOMOS (EL LOCAL) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gold-gradient rounded-[4rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
            <img
              src={cede1}
              alt="Nuestro Estudio"
              className="relative rounded-[4rem] border border-white/10 shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000 object-cover h-[600px] w-full"
            />
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-5xl font-black uppercase italic font-display mb-6">
                El <span className="text-gold-gradient">Santuario</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm mb-6">
                En el corazón de Bello, SV Beauty Studio nace no como un salón
                convencional, sino como un santuario de alta estética donde la
                arquitectura de la mirada y el cuidado personal se elevan a la
                categoría de arte.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Diseñado bajo una estética minimalista, nuestro local en el{" "}
                <b>Edificio Platinum</b> combina texturas industriales con
                iluminación cálida para crear un entorno de relajación absoluta.
                Cada detalle ha sido pensado para que tu transformación ocurra
                en un ambiente de confort VIP.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
              {stats.map((item, i) => (
                <div key={i}>
                  <p className="text-4xl font-black font-display text-gold-gradient mb-1">
                    {item.cifra}
                  </p>
                  <p className="text-[9px] uppercase font-black tracking-widest text-gray-500">
                    {item.etiqueta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: MISIÓN Y VISIÓN */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* TARJETA MISIÓN */}
          <div className="group relative p-12 rounded-[4rem] bg-[#0A0A0A] border border-white/5 hover:border-gold-500/30 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-8xl font-black italic font-display">M</span>
            </div>
            <h3 className="text-3xl font-black uppercase italic font-display text-gold-gradient mb-8">
              Nuestra Misión
            </h3>
            <p className="text-gray-400 leading-loose text-sm md:text-base relative z-10">
              Transformar la confianza de nuestros clientes a través de
              servicios de belleza personalizados y de alta gama. Nos
              comprometemos a utilizar tecnología de vanguardia y productos
              premium para resaltar la autenticidad de cada persona,
              garantizando un estándar de excelencia y bienestar en cada visita.
            </p>
          </div>

          {/* TARJETA VISIÓN */}
          <div className="group relative p-12 rounded-[4rem] bg-[#0A0A0A] border border-white/5 hover:border-gold-500/30 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-8xl font-black italic font-display">V</span>
            </div>
            <h3 className="text-3xl font-black uppercase italic font-display text-gold-gradient mb-8">
              Nuestra Visión
            </h3>
            <p className="text-gray-400 leading-loose text-sm md:text-base relative z-10">
              Consolidarnos para el año 2028 como el referente número uno de
              estética de lujo en Antioquia, expandiendo nuestro concepto de
              'Experiencia Elite' a nuevas sedes. Aspiramos a ser pioneros en
              tendencias de belleza internacional bajo el sello de calidad SV.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: COMPROMISO STAFF */}
      <section className="bg-[#0A0A0A] py-32 rounded-[6rem] mx-6 border border-white/5 shadow-3xl relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
          <h2 className="text-5xl font-black uppercase italic font-display mb-10">
            Compromiso <span className="text-gold-gradient">Staff Elite</span>
          </h2>
          <p className="text-xl italic text-white/80 leading-relaxed mb-16">
            "Nuestro equipo no solo está capacitado, está apasionado. Cada
            especialista en SV ha sido seleccionado por su ojo clínico para el
            detalle y su capacidad de crear experiencias de bienestar total."
          </p>
          <div className="flex flex-wrap justify-center gap-10 opacity-50">
            <span className="text-[10px] font-black tracking-[0.5em] uppercase">
              Organic Nails
            </span>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase">
              Phibrows
            </span>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase">
              Schwarzkopf
            </span>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: CTA FINAL */}
      <section className="py-40 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-10 leading-none">
            Sé parte de la <br />
            <span className="text-gold-gradient">Experiencia SV</span>
          </h3>
          <button
            onClick={() => navigate("/agendas")}
            className="bg-gold-gradient text-black px-16 py-7 rounded-2xl font-black uppercase text-[10px] tracking-[0.4em] hover:scale-110 transition-all shadow-2xl"
          >
            Agenda tu Servicio
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-20 border-t border-white/5">
        <button
          onClick={() => navigate("/")}
          className="text-gray-700 hover:text-white text-[10px] font-black uppercase tracking-[1em] transition-all"
        >
          SV BEAUTY STUDIO 2026
        </button>
      </footer>
    </div>
  );
};

export default AboutPage;
