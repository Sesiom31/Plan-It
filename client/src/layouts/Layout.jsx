import Header from "../components/layout/Header";
import MenuFooter from "../components/layout/MenuFooter";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-full w-full">
      <div className="grid h-screen max-h-[1000px] grid-cols-12 grid-rows-12">
        <Header />

        <main className="col-span-12 col-start-1 row-span-10 row-start-2">
          <Outlet />
        </main>

        <MenuFooter />
      </div>
    </div>
  );
}

export default Layout;
