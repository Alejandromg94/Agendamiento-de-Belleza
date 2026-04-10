import NotFound from "./notfound/NotFound";

const AuthGuard = ({ children }) => {
  // Obtenemos el token
  const isAuthenticated = localStorage.getItem("user_token");

  // Verificamos que el token exista y no sea solo un string vacío o "null"
  if (!isAuthenticated || isAuthenticated === "undefined") {
    // En lugar de redirigir al login, mostramos la página de "No encontrado"
    // Esto es genial para ocultar la existencia de rutas administrativas
    return <NotFound />;
  }

  // Si pasa la validación, renderiza el AdminLayout y el contenido
  return children;
};

export default AuthGuard;
