import { CgMenu } from "react-icons/cg";
import Header from "../components/layout/Header";
import LogoV from "../../public/ui/LogoV";
import MenuAside from "../components/layout/MenuAside";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-full w-full">
      <div className="grid h-dvh max-h-[1200px] grid-cols-12 grid-rows-12">
        <div className="col-span-2 col-start-1 row-span-1 row-start-1 self-center justify-self-center bg-white">
          <LogoV className="size-16" />
        </div>

        <div className="col-span-2 col-start-1 row-span-1 row-start-2 self-center justify-self-center bg-white">
          <CgMenu className="h-6 w-6 text-orange-500" />
        </div>

        <MenuAside />
        <Header />

        <main className="col-span-10 col-start-3 row-span-11 row-start-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
