import LoginAuthButton from "../../ui/LoginAuthButton";
import LogoH from "../../../public/ui/LogoH";

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-[4.5rem] bg-azul-principal lg:h-16">
      <div className="flex h-full w-full items-center justify-between px-4 sm:pr-6">
        <div className="flex h-full items-center">
          <LogoH
            fill="#ffffff"
            className="aspect-auto h-16 w-full"
            classNameText="text-[4.5rem] font-semibold"
          />
        </div>
        <nav className="flex h-full items-center">
          <LoginAuthButton />
        </nav>
      </div>
    </header>
  );
}

export default Header;
