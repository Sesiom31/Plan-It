import LoginAuthButton from "../../ui/LoginAuthButton";
import LogoH from "../../assets/logos/LogoH";

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-[4.5rem] bg-gradient-to-r from-oscuro to-contrast sm:px-4 md:h-[4rem]">
      <div className="flex h-full w-full items-center justify-between px-4">
        <div className="flex h-full items-center">
          <LogoH
            fill="#ffffff"
            className="aspect-auto h-14 w-full"
            classNameText="text-[4.5rem] font-bold "
          />
        </div>
        <div className="flex h-full items-center">
          <LoginAuthButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
