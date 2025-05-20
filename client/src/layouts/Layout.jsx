import Header from "../components/layout/Header";
import Menu from "../components/layout/Menu";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-auto w-full bg-gradient-to-tr from-main to-dividers">
      <div className="h-dvh max-h-dvh w-full">
        <Header />
        <div className="relative h-[calc(100%-4.5rem)]">
          <main className="h-[calc(100%-5rem)] overflow-hidden">
            <Outlet />
          </main>

          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Layout;
