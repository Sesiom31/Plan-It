import { useSelector } from "react-redux";
import { useVerifyAuthQuery } from "../services/api";

export const useAuth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log({ isAuthenticated });

  const { isLoading } = useVerifyAuthQuery(undefined, {
    skip: isAuthenticated,
  });

  return { isAuthenticated, isLoading };
};
