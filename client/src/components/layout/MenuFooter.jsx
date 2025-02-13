import { NavLink } from "react-router-dom";
import { menus } from "../../data/menusAside";

function MenuFooter() {
  const content = menus.map((menu) => (
    <li
      key={menu.name}
      className="col-span-1 h-full self-center justify-self-center"
    >
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "flex aspect-square h-full flex-col items-center justify-center gap-1 rounded-md border border-orange-500"
            : "flex aspect-square h-full flex-col items-center justify-center gap-1 rounded-md bg-transparent"
        }
        to={menu.path}
      >
        <menu.icon className="h-5 w-5 text-orange-500" />
        <span className="text-center text-xs text-orange-500">{menu.name}</span>
      </NavLink>
    </li>
  ));
  return (
    <aside className="col-span-12 col-start-1 row-span-1 row-start-12 flex items-center border-t border-orange-500">
      <div className="h-full w-full">
        <nav className="h-full p-1">
          <ul className="grid h-full grid-cols-5">{content}</ul>
        </nav>
      </div>
    </aside>
  );
}

export default MenuFooter;
