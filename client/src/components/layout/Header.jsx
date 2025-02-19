import { MdLogout, MdSearch } from "react-icons/md";

import LogoV from "../../../public/ui/LogoV";

function Header() {
  return (
    <header className="absolute left-0 top-0 h-auto w-full bg-azul-principal">
      <div className="flex h-16 items-center justify-between px-2">
        <div className="">
          <LogoV className="size-16" fill="#ffffff" />
        </div>
        <label
          htmlFor="search"
          className="ml-1 flex h-8 max-w-52 rounded-md border border-azul-terciario bg-azul-secundario focus-within:border-[#ffffff]"
        >
          <input
            type="search"
            name="search"
            id="search"
            className="flex h-full w-[calc(100%-1.5rem)] items-center rounded-md border-none bg-transparent px-2 text-[#ffffff] outline-azul-principal focus:border-none focus:outline-none"
            title="Buscar..."
            autoComplete="off"
          />
          <span className="flex items-center justify-center">
            <MdSearch className="h-6 w-6 text-[#ffffff]" />
          </span>
        </label>
        <h2 className="text-[#ffffff]">Elsa</h2>
        <button type="button" title="Cerrar sesión">
          <MdLogout className="h-5 w-5 text-[#ffffff]" />
        </button>
      </div>
    </header>
  );
}

export default Header;
