import "./styles/NotFound.css";
import { Link } from "react-router-dom";
import compuImg from "../../assets/compu.png";
import conoImg from "../../assets/cono.png";

export default function NotFound() {
  return (
    <div className="boxError">
      <div className="iconoError">
        <img src={conoImg} alt="Icono de cono" />
      </div>
      <div className="contTxt">
        <h1>¡Ups! 404 </h1>
        <h2>Parece que la página que buscas no se pudo encontrar.</h2>
        <p>Sigue navegando en nuestra página de inicio</p>

        <ul className="listLinks mt-6">
          <li>
            <Link
              to="/"
              className="inline-block px-10 py-3 bg-blue-700 text-white font-bold rounded-lg shadow-sm hover:bg-blue-800 transition-colors uppercase tracking-wider text-sm border-b-4 border-blue-900 active:border-b-0 active:translate-y-0.5"
            >
              Regresar al Login
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <img src={compuImg} alt="Imagen de mantenimiento" />
      </div>
    </div>
  );
}
