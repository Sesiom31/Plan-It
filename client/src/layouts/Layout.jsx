import Header from "../components/layout/Header";
import Menu from "../components/layout/Menu";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-dvh">
      <div className="relative flex h-full max-h-dvh flex-col">
        <Header />

        <main className="my-16 h-full border-y border-orange-500">
          <Outlet />
        </main>

        <Menu />
      </div>
    </div>
  );
}

export default Layout;
