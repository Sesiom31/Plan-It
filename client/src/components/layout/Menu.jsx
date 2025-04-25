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
            ? "bg-azul-secundario flex h-full w-16 flex-col items-center justify-center gap-1 rounded-md border border-[#ffffff]"
            : "flex h-full w-16 flex-col items-center justify-center gap-1 rounded-md bg-transparent"
        }
        to={menu.path}
      >
        <menu.icon className="h-5 w-5 text-[#ffffff]" />
        <span className="text-center text-xs text-[#ffffff]">{menu.name}</span>
      </NavLink>
    </li>
  ));
  return (
    <div className="absolute bottom-0 left-0 right-0">
      <div className="h-full w-full">
        <nav className="h-full p-1">
          <ul className="item-center flex h-full">{content}</ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
