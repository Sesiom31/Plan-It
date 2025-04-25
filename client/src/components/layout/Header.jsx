import { MdClose, MdLogout, MdSearch } from "react-icons/md";
import { clearSearchTerm, setSearchTerm } from "../../features/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

import LogoV from "../../assets/logos/LogoV";

function Header() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username);
  const searchTerm = useSelector((state) => state.filters.searchTerm);

  console.log(searchTerm.length);
  const onChangeSearch = (e) => {
    dispatch(setSearchTerm({ search: e.target.value }));
  };

  const onClearSearch = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <header className="h-[4.5rem] w-full bg-gradient-to-r from-oscuro to-contrast/60 sm:h-[4rem]">
      <div className="grid h-full grid-cols-8">
        <div className="col-span-1 place-self-center pl-1 md:justify-self-start md:pl-6">
          <LogoV className="size-[3.25rem]" fill="#ffffff" />
        </div>
        <div className="col-span-4 h-10 w-full place-self-center px-2 py-1">
          <label
            htmlFor="search"
            className="relative flex h-full w-full min-w-[8rem] max-w-[28rem] overflow-hidden rounded-md bg-main text-white ring-1 ring-gray-400 focus-within:ring-sky-500"
          >
            <MdSearch className="absolute left-1 top-1/2 size-5 -translate-y-1/2 rotate-90 self-center text-white" />
            <input
              id="search"
              type="search"
              value={searchTerm}
              className="h-full w-full rounded-md border-none bg-main px-8 py-0.5 text-sm text-white placeholder:text-sm placeholder:text-gray-500 focus:border-none focus:outline-none"
              placeholder="Buscar..."
              onChange={onChangeSearch}
            />
            {searchTerm.length > 0 && (
              <button
                type="button"
                className="absolute right-1 top-1/2 flex size-5 -translate-y-1/2 rotate-90 items-center justify-center self-center"
                onClick={onClearSearch}
              >
                <MdClose className="size-4 text-white" />
              </button>
            )}
          </label>
        </div>
        <div className="col-span-2 place-self-center text-white">
          <h2>{username}</h2>
        </div>
        <div className="col-span-1 place-self-center md:justify-self-end md:pr-8">
          <MdLogout className="h-6 w-6 text-gray-300" />
        </div>
      </div>
    </header>
  );
}

export default Header;
