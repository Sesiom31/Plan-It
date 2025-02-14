import { NavLink } from "react-router-dom";
import { menus } from "../../data/menusAside";

function Menu() {
  const content = menus.map((menu) => (
    <li
      key={menu.name}
      className="flex h-full flex-1 items-center justify-center"
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
    <div className="h-16">
      <div className="h-full w-full">
        <nav className="h-full p-1">
          <ul className="item-center flex h-full">{content}</ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
