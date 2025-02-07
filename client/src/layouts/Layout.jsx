import Header from "../components/layout/Header";
import MenuAside from "../components/layout/MenuAside";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <section className="h-full w-full">
      <div className="flex bg-red-500">
        <MenuAside />
        <div className="w-full bg-blue-600">
          <Header />
          <main className="h-full w-full bg-green-500">
            <Outlet />
          </main>
        </div>
      </div>
    </section>
  );
}

export default Layout;
