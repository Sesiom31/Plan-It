import LogoV from "../../../public/ui/LogoV";

function MenuAside() {
  return (
    <aside className="h-dvh w-[3.5rem] bg-orange-500">
      <div className="flex h-full max-h-[80rem] min-h-[30rem] flex-col items-center justify-between px-4">
        <figure>
          <LogoV fill="white" className="h-12 w-12" />
        </figure>
      </div>
    </aside>
  );
}

export default MenuAside;
