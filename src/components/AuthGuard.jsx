import NotFound from "./notfound/NotFound";

const AuthGuard = ({ children }) => {
  const isAuthenticated = localStorage.getItem("user_token");

  if (!isAuthenticated || isAuthenticated === "undefined") {
    return <NotFound />;
  }

  return children;
};

export default AuthGuard;
