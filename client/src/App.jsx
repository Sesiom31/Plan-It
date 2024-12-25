import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "./router";

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="h-auto min-h-screen bg-gradient-to-b from-sky-100 to-blue-100">
      <div className="mx-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
