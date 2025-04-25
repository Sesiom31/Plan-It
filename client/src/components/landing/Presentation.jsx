/* import LogoV from "../../../public/ui/LogoV"; */

import InvitedAuth from "../auth/InvitedAuth";
import RegisterAuthButton from "../../ui/RegisterAuthButton";
import lp_1 from "../../assets/lp.png";

function Presentation() {
  return (
    <section className="h-auto w-full">
      <div className="flex min-h-[32rem] flex-col gap-10 pb-8 pt-4 sm:pt-10 lg:h-[calc(100vh-4rem)] lg:min-h-[36rem] lg:pt-12">
        <h1
          className="h-auto px-8 py-4 text-left font-Toroka text-5xl font-bold leading-tight sm:text-center sm:text-6xl md:text-[4rem] lg:text-7xl"
          role="heading"
        >
          Organiza tu día con{" "}
          <span
            className="bg-gradient-to-tr from-[#35d6dd] to-[#5433fd] bg-clip-text font-bold text-transparent"
            role="heading"
          >
            {" "}
            PlanIt
          </span>
        </h1>

        <div className="mx-auto h-auto w-full max-w-[32rem]">
          <figure className="block h-auto w-full">
            <img
              src={lp_1}
              alt="Imagen central de bienvenida de microsoft"
              className="mx-auto block aspect-auto h-auto w-[75%]"
            />

            <figcaption className="mt-4 text-center text-sm text-gray-400">
              +100 tareas completadas por usuarios esta semana
            </figcaption>
          </figure>
        </div>

        <div className="mx-auto mt-2 flex flex-col gap-8 py-2 sm:flex-row sm:gap-12 md:gap-20 lg:mt-0">
          <div className="h-12 w-64">
            <RegisterAuthButton />
          </div>
          <div className="h-12 w-64">
            <InvitedAuth optionalClass="rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
