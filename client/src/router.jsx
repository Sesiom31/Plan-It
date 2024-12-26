import LandingPage from "./pages/LandingPage";
import LayoutPage from "./pages/LayoutPage";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";

export const routes = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/register", element: <RegisterForm /> },
    ],
  },
];
