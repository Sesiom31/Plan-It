import { Navigate, Outlet } from "react-router-dom";

import Loading from "../../ui/Loading";
import { useAuth } from "../../hooks/useAuth";

function PublicRoute() {
  console.log("PUBLIC_ROUTE");
  const { isAuthenticated, isLoading } = useAuth();

  console.log({ isAuthenticated, isLoading });

  if (isLoading) return <Loading />;

  return isAuthenticated ? <Navigate to="/tasks" /> : <Outlet />;
}

export default PublicRoute;
