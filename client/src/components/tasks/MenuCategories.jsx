import { PiCaretDownLight, PiCaretUpLight } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";

import CategoryTask from "../../ui/CategoryTask";
import { categoriesTask } from "../../data/categoriesTask";

function MenuCategories() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const changeShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-between">
      <div className="w-40 max-w-[50%]">
        <h2>Categoria :</h2>
      </div>

      <div className="w-40 max-w-[50%]">
        <button
          ref={menuRef}
          type="button"
          className="flex w-full items-center justify-end gap-2 py-1"
          onClick={changeShowMenu}
        >
          <h2>Todas</h2>
          <div className="flex items-center">
            {showMenu ? (
              <PiCaretUpLight className="font-bold" />
            ) : (
              <PiCaretDownLight className="font-bold" />
            )}
          </div>
        </button>
        <div
          className={`menu-categories ${showMenu ? "open" : ""} absolute right-4 w-48 rounded-lg bg-azul-terciario text-[#ffffff]`}
          style={{ top: menuRef.current?.getBoundingClientRect()?.top + 40 }}
        >
          <ul className="flex w-full flex-col items-start justify-evenly gap-2 py-4">
            {categoriesTask.map((category) => (
              <CategoryTask key={category.name} category={category} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuCategories;
