import { Link, useOutletContext } from "react-router-dom";

import AddCategory from "./AddCategory";
import CategoriesList from "./CategoriesList";
import { PiCaretLeftBold } from "react-icons/pi";
import { useState } from "react";

function CategoriesTasks() {
  const categories = useOutletContext();
  const [openAddCategory, setOpenAddCategory] = useState(false);

  console.log(categories);

  return (
    <section className="relative h-full w-full">
      <AddCategory
        setOpenAddCategory={setOpenAddCategory}
        openAddCategory={openAddCategory}
      />

      <div className="h-full max-h-full w-full overflow-y-hidden pt-6">
        <Link
          className="mb-4 flex h-8 w-auto items-center gap-2 px-4 text-white"
          to="/tasks"
        >
          <PiCaretLeftBold className="size-5" />
          <p>Regresar a las tareas</p>
        </Link>

        <CategoriesList categories={categories} />

        <div className="absolute bottom-1 left-0 right-0 flex h-20 w-full items-center justify-center px-4">
          <button
            onClick={() => setOpenAddCategory(true)}
            type="button"
            className="h-12 w-full rounded-lg border-none bg-sunsetBold font-bold text-white outline-none"
          >
            Agregar categoría
          </button>
        </div>
      </div>
    </section>
  );
}

export default CategoriesTasks;
