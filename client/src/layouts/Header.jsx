import { CloudIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="h-20 bg-white bg-opacity-75">
      <section className="flex h-full w-full items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <CloudIcon className="h-6 w-6 font-bold text-sky-500" />
          <h2 className="text-2xl font-bold text-gray-700">PlanIt</h2>
        </div>
        <div>
          <button className="rounded-lg border-none bg-emerald-500 px-4 py-1.5 text-base font-bold text-white outline-none hover:bg-emerald-600">
            Iniciar sesión
          </button>
        </div>
      </section>
    </header>
  );
}

export default Header;
