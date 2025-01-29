import LandingPage from "./pages/LandingPage";
import Loading from "./ui/Loading";
import LoginPage from "./pages/LoginPage";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import PublicRoute from "./components/routes/PublicRoute";
import RegisterPage from "./pages/RegisterPage";
import TasksPage from "./pages/TasksPage";

export const routes = [
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      { path: "/", element: <Navigate to="/home" replace /> },
      { path: "/home", element: <LandingPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/loading", element: <Loading /> },
    ],
  },
  {
    path: "/tasks",
    element: <ProtectedRoute />,
    children: [{ path: "", element: <TasksPage /> }],
  },
];
