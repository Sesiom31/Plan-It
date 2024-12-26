import { CloudIcon } from "@heroicons/react/24/outline";
import LoginAuthButton from "../ui/LoginAuthButton";

function Header() {
  return (
    <header className="h-20 bg-white bg-opacity-75">
      <section className="flex h-full w-full items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <CloudIcon className="h-6 w-6 font-bold text-sky-500" />
          <h2 className="text-2xl font-bold text-gray-700">PlanIt</h2>
        </div>
        <div className="flex h-full items-center">
          <LoginAuthButton />
        </div>
      </section>
    </header>
  );
}

export default Header;
