import { PiCaretDownLight, PiCaretUpLight, PiCheckBold } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";

import { categoriesTask } from "../../data/categoriesTask";

function MenuCategories() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  console.log({ showMenu });
  const changeShowMenu = () => {
    setShowMenu(!showMenu);
  };

  console.log(menuRef.current);
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

  const categories = categoriesTask.map((category) => (
    <li key={category.name} className="w-full">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 px-3"
      >
        <div className="flex items-center justify-start gap-2">
          <PiCheckBold />

          <span>{category.name}</span>
        </div>

        <div>
          <category.icon />
        </div>
      </button>
    </li>
  ));

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
          className={`menu-categories ${showMenu ? "open" : ""} absolute right-4 top-[8.5rem] w-48 rounded-lg border border-azul-principal bg-azul-terciario text-[#ffffff]`}
        >
          <ul className="flex w-full flex-col items-start justify-evenly gap-2 py-4">
            {categories}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuCategories;
