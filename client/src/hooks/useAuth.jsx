import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useVerifyAuthQuery } from "../services/api";

export const useAuth = () => {
  const location = useLocation().pathname;
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log(location);

  console.log({ isAuthenticated });

  const { isLoading } = useVerifyAuthQuery(undefined, {
    skip: isAuthenticated,
  });

  return { isAuthenticated, isLoading };
};
