import LogoH from "../assets/logos/LogoH";

function Loading() {
  return (
    <div className="pulse-loading relative flex min-h-dvh flex-col items-center justify-center bg-gradient-to-tr from-main to-secondary text-white">
      <LogoH
        fill="#ffffff"
        className="pulse h-36"
        classNameText="text-5xl font-bold tracking-wide"
      />
    </div>
  );
}

export default Loading;
