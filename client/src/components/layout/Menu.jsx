import { NavLink } from "react-router-dom";
import { menus } from "../../data/menusAside";

function Menu() {
  const content = menus.map((menu) => (
    <li key={menu.to} className="h-full w-full">
      <NavLink
        to={menu.to}
        className={({ isActive }) =>
          `group flex h-full w-full flex-col items-center justify-center gap-2 font-bold ${isActive ? "bg-accentBold text-main" : "text-white hover:bg-accentSoft hover:text-main"}`
        }
      >
        <menu.icon className="size-[1.25rem] transition-all duration-200 group-hover:scale-105" />
        <span className="text-center text-xs">{menu.label}</span>
      </NavLink>
    </li>
  ));
  return (
    <div className="fixed bottom-0 left-0 right-0 h-auto bg-oscuro md:bottom-auto md:right-auto md:top-1/2 md:-translate-y-1/2">
      <div className="h-20 w-full sm:h-16 md:h-[22.5rem] md:w-[4.5rem]">
        <nav className="h-full w-full">
          <ul className="grid h-full w-full grid-cols-5 gap-0.5 md:grid-cols-1 md:grid-rows-5">
            {content}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
