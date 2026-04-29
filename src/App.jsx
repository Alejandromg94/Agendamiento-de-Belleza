import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/login";
import AuthGuard from "./components/AuthGuard";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import NotFound from "./components/notfound/NotFound";
import Agenda from "./components/Agenda";
import AdminPanel from "./pages/AdminPanel";
import ProfessionalPanel from "./pages/ProfessionalPanel";
import CustomerPortal from "./pages/CustomerPortal";
import ButtonWassap from "./components/ButtonWassap";

// Layout para páginas que SIEMPRE muestran el Navbar (Landing, Servicios, etc.)
const MainLayout = () => {
  const userString = localStorage.getItem("user_token");
  const usuario = userString ? JSON.parse(userString) : { nombre: "Invitado", rol: "Cliente" };

  return (
    <>
      <Navbar usuario={usuario} />
      <div className="pt-24">
        <Outlet />
      </div>
    </>
  );
};

// Layout para páginas protegidas (mantiene AuthGuard)
const AdminLayout = () => {
  const userString = localStorage.getItem("user_token");
  const usuario = userString ? JSON.parse(userString) : null;

  return (
    <AuthGuard>
      <Navbar usuario={usuario} />
      <div className="pt-24">
        <Outlet />
      </div>
    </AuthGuard>
  );
};

function App() {
  const location = useLocation();

  return (
    <>
      <Routes>
        {/* Rutas con Navbar visible (Públicas) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
        </Route>

        {/* Rutas sin Navbar (Auth) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Rutas protegidas */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<LandingPage />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/agendas" element={<Agenda key={location.key} />} />
          <Route path="/agenda" element={<Agenda key={location.key} />} />
          <Route path="/professional-panel" element={<ProfessionalPanel />} />
          <Route path="/customer-portal" element={<CustomerPortal />} />
        </Route>

        {/* Página no encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ButtonWassap />
    </>
  );
}

export default App;
