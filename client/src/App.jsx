import "./styles/transitions.css";
import "./styles/inputs.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "./router";

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="h-auto min-h-dvh bg-[#004E8A]">
      <div className="mx-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
