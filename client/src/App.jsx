import "./styles/inputs.css";
import "./styles/transitions.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "./router";

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="h-auto w-full bg-main font-Toroka">
      <div className="mx-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
