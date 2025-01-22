/* import LogoV from "../../../public/ui/LogoV"; */

import RegisterAuthButton from "../../ui/RegisterAuthButton";
import welcome_center from "../../assets/welcome-center.png";
import welcome_left from "../../assets/welcome-left.png";
import welcome_right from "../../assets/welcome-right.png";

function Presentation() {
  return (
    <section className="h-auto w-full">
      <div className="grid min-h-[32rem] grid-cols-7 grid-rows-[repeat(4,auto)] place-items-center py-6 lg:max-h-[40rem]">
        <div className="col-span-7 row-span-1 mx-auto my-4 text-center">
          <h1 className="h-full px-4 py-1 text-4xl font-medium tracking-wider text-gray-800 md:text-5xl lg:text-6xl lg:font-normal">
            Domina tu día con PlanIt
          </h1>
        </div>

        <div className="col-span-7 row-span-1 my-6 self-start text-center lg:col-span-3 lg:col-start-3 lg:row-start-2 lg:mt-12 lg:h-24">
          <h2 className="mx-auto px-4 text-center text-gray-500 md:px-12">
            PlanIt te proporciona una herramienta intuitiva para gestionar tus
            tareas diarias. Desde pequeñas listas hasta grandes proyectos,
            PlanIt te permite mantener el control y enfocarte en lo que
            realmente importa.
          </h2>
        </div>

        <figure className="col-span-7 row-span-1 mx-auto mt-12 aspect-[4/3] lg:hidden">
          <img
            src={welcome_center}
            alt="Imagen central de bienvenida de microsoft"
            className="mx-auto block w-[20rem] bg-transparent lg:hidden"
          />
        </figure>

        <figure className="ml-40 hidden w-64 lg:col-span-2 lg:col-start-1 lg:row-span-3 lg:row-start-2 lg:block lg:self-end">
          <img
            src={welcome_left}
            alt="Imagen izquierda de bienvenida de microsoft"
            className="hidden w-full lg:block"
          />
        </figure>

        <figure className="mr-28 hidden w-48 lg:col-span-2 lg:col-start-6 lg:row-span-3 lg:row-start-2 lg:block lg:self-end">
          <img
            src={welcome_right}
            alt="Imagen derecha de bienvenida de microsoft"
            className="hidden w-full lg:block"
          />
        </figure>
        {/* <figure className="hidden lg:col-span-3 lg:col-start-3 lg:row-span-1 lg:row-start-3 lg:block lg:self-start">
          <LogoV fill="orange" width="10rem" height="10rem" />
        </figure> */}

        <div className="col-span-7 row-span-1 row-start-4 mx-auto my-2 self-start lg:col-span-3 lg:col-start-3 lg:row-span-2 lg:row-start-3 lg:mt-8 lg:self-center">
          <RegisterAuthButton />
        </div>
      </div>
    </section>
  );
}

export default Presentation;
