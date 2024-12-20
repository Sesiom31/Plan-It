import LandingPage from "./pages/LandingPage";
import LayoutPage from "./pages/LayoutPage";

export const routes = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [{ path: "/", element: <LandingPage /> }],
  },
];
