import { useSelector } from "react-redux";
import { useVerifyAuthQuery } from "../services/api";

export const useAuth = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const { isLoading, error } = useVerifyAuthQuery(undefined, {
    skip: isAuthenticated,
  });

  return { isAuthenticated, user, isLoading, error };
};
