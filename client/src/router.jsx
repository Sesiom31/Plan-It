import LandingPage from "./pages/LandingPage";
import Layout from "./layouts/Layout";
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
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "/home", element: <LandingPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/loading", element: <Loading /> },
    ],
  },

  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <Navigate to="/tasks" replace /> },
          { path: "tasks", element: <TasksPage /> },
        ],
      },
    ],
  },
];
