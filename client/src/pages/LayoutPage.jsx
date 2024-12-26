import Header from "../layouts/Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

function LayoutPage() {
  const location = useLocation().pathname;
  console.log(location);
  const header =
    location !== "/register" && location !== "/login" ? <Header /> : "";

  console.log(location);
  return (
    <>
      {header}
      <main className="h-auto w-full">
        <Outlet />
      </main>
    </>
  );
}

export default LayoutPage;
