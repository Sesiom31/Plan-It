import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

function ProtectedRoute() {
  const { isAuthenticated, isLoading, error } = useAuth();

  console.log({ isAuthenticated, isLoading, error });

  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
