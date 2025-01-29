import LogoV from "../../public/ui/LogoV";

function Loading() {
  return (
    <div className="pulse-loading relative flex min-h-dvh flex-col items-center justify-center bg-[#2c2c2c]">
      <LogoV fill="#F57C00F4" width="15rem" height="15rem" className="pulse" />
      <h2 className="h-auto p-1 text-center text-5xl font-bold text-[#F57C00F4]">
        PlanIt
      </h2>
    </div>
  );
}

export default Loading;
