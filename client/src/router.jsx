import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import PublicRoute from "./components/routes/PublicRoute";
import RegisterPage from "./pages/RegisterPage";

//import LayoutPage from "./pages/LayoutPage";

export const routes = [
  {
    path: "/",
    element: <PublicRoute />,

    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
];
