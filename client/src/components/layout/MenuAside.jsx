import { NavLink } from "react-router-dom";
import { menus } from "../../data/menusAside";

function MenuAside() {
  const content = menus.map((menu) => (
    <li key={menu.name} className="">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "flex h-16 flex-col items-center justify-center gap-1 rounded-md border border-orange-500"
            : "flex h-16 flex-col items-center justify-center gap-1 rounded-md bg-transparent p-2"
        }
        to={menu.path}
      >
        <menu.icon className="h-5 w-5 text-orange-500" />
        <span className="text-center text-xs text-orange-500">{menu.name}</span>
      </NavLink>
    </li>
  ));
  return (
    <aside className="col-span-2 col-start-1 row-span-10 row-start-3 bg-white">
      <div className="h-full">
        <nav className="h-full">
          <ul className="flex h-full flex-col justify-start gap-1 p-1">
            {content}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default MenuAside;
