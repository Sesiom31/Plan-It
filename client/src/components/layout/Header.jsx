import { MdLogout, MdSearch } from "react-icons/md";

import LogoV from "../../../public/ui/LogoV";

function Header() {
  return (
    <header className="absolute left-0 top-0 h-auto w-full">
      <div className="flex h-16 items-center justify-between px-2">
        <div className="">
          <LogoV className="size-16" />
        </div>
        <label
          htmlFor="search"
          className="ml-1 flex h-8 max-w-52 rounded-md ring-1 ring-gray-400 focus-within:ring-sky-500"
        >
          <input
            type="search"
            name="search"
            id="search"
            className="peer flex h-full w-[calc(100%-1.5rem)] items-center rounded-md border-none px-2 outline-none focus:outline-none"
          />
          <span className="flex items-center justify-center">
            <MdSearch className="h-6 w-6 text-gray-500" />
          </span>
        </label>
        <h2>Elsa</h2>
        <button>
          <MdLogout className="h-6 w-6 text-gray-800" />
        </button>
      </div>
    </header>
  );
}

export default Header;
