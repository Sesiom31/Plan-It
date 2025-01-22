import "./styles/transitions.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "./router";

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="h-auto min-h-screen bg-[#F5F9FF]">
      <div className="mx-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
