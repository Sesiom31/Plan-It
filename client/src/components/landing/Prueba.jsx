import { LiaSpinnerSolid } from "react-icons/lia";
import { useState } from "react";

function Prueba() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    // Simula una acción asíncrona (como una llamada a una API)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="... flex items-center justify-center bg-blue-500"
    >
      {isLoading ? (
        <>
          <LiaSpinnerSolid className="mr-3 h-5 w-5 animate-spin border-none text-red-500" />
          Cargando...
        </>
      ) : (
        "Haz clic"
      )}
    </button>
  );
}

export default Prueba;
