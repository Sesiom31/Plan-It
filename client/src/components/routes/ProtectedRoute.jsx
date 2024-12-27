import { useAuth } from "../../hooks/useAuth";

function ProtectedRoute() {
  const { isAuthenticated, isLoading, error } = useAuth();

  return <div></div>;
}

export default ProtectedRoute;
