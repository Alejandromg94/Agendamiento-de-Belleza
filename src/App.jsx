import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/login";
import AuthGuard from "./components/AuthGuard";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import NotFound from "./components/notfound/NotFound";
import Agenda from "./components/Agenda";
import AdminPanel from "./pages/AdminPanel";
import ButtonWassap from "./components/ButtonWassap";

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
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Rutas protegidas */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<LandingPage />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route
            path="/servicios"
            element={<div className="text-white text-center">Servicios</div>}
          />
          <Route
            path="/precios"
            element={<div className="text-white text-center">Precios</div>}
          />
          <Route path="/agendas" element={<Agenda />} />
        </Route>

        {/* Página no encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ButtonWassap />
    </BrowserRouter>
  );
}

export default App;
