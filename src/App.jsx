import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/login";
import AuthGuard from "./components/AuthGuard";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Register from "./pages/Register";
import Navbar from "./components/Navbar"; // Tu nuevo Navbar

// Componente Layout para agrupar el Navbar con rutas protegidas
const AdminLayout = ({ children }) => {
  // Obtenemos los datos del usuario del localStorage que guardaste en el Login
  const userString = localStorage.getItem("user_token");
  const usuario = userString ? JSON.parse(userString) : null;

  return (
    <AuthGuard>
      <Navbar usuario={usuario} />
      <div className="pt-24">
        {" "}
        {/* Espacio para que el Navbar fixed no tape el contenido */}
        {children}
      </div>
    </AuthGuard>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Rutas Protegidas con Navbar */}
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <LandingPage />
            </AdminLayout>
          }
        />

        {/* Agregamos las rutas que mencionaste en el Navbar */}
        <Route
          path="/servicios"
          element={
            <AdminLayout>
              <div className="text-white text-center">Servicios</div>
            </AdminLayout>
          }
        />
        <Route
          path="/precios"
          element={
            <AdminLayout>
              <div className="text-white text-center">Precios</div>
            </AdminLayout>
          }
        />
        <Route
          path="/agendas"
          element={
            <AdminLayout>
              <div className="text-white text-center">Agendas</div>
            </AdminLayout>
          }
        />

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
