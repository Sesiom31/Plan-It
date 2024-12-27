import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

function PublicRoute() {
  const { isAuthenticated, isLoading, error } = useAuth();

  console.log({ isAuthenticated, isLoading, error });

  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
}

export default PublicRoute;
