import { MdLogout, MdSearch } from "react-icons/md";

function Header() {
  return (
    <header className="col-span-10 col-start-3">
      <div className="flex h-full items-center justify-between">
        <label
          htmlFor="search"
          className="ml-1 flex h-8 rounded-md ring-1 focus-within:ring-sky-500"
        >
          <input
            type="search"
            name="search"
            id="search"
            className="peer flex h-full items-center rounded-md border-none px-2 outline-none focus:outline-none"
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
