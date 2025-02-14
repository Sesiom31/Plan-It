import Header from "../components/layout/Header";
import Menu from "../components/layout/Menu";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="">
      <div className="flex h-dvh max-h-[75rem] flex-col">
        <Header />

        <div className="h-[calc(100%-4rem)]">
          <main className="h-[calc(100%-4rem)] border-y border-orange-500">
            <Outlet />
          </main>

          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Layout;
