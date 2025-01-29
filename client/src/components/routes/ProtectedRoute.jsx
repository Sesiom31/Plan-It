import { Navigate, Outlet } from "react-router-dom";

import Loading from "../../ui/Loading";
import { useAuth } from "../../hooks/useAuth";

function ProtectedRoute() {
  console.log("PROTECTED_ROUTE");
  const { isAuthenticated, isLoading } = useAuth();

  console.log({ isAuthenticated, isLoading });

  if (isLoading) return <Loading />;

  return isAuthenticated ? <Outlet /> : <Navigate to="/home" />;
}

export default ProtectedRoute;
