import PropTypes from "prop-types";
import { RiCloseCircleFill } from "react-icons/ri";
import clsx from "clsx";

function AddCategory({ setOpenAddCategory, openAddCategory }) {
  console.log({ openAddCategory });
  return (
    <div
      className={clsx(
        `${openAddCategory ? "" : "invisible"}`,
        "fixed bottom-0 left-0 right-0 top-0 z-50 flex h-full w-full items-end justify-center overflow-y-hidden bg-black/50",
      )}
    >
      <div
        className={clsx(
          "relative flex h-[70%] w-full flex-col gap-4 rounded-xl border-t border-contrast bg-gradient-to-tl from-dividers to-secondary px-4 py-6 pt-12 text-white",
          `${openAddCategory ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"} transition-all duration-200 ease-in-out`,
        )}
      >
        <RiCloseCircleFill
          className="absolute right-5 top-5 size-8 text-gray-400"
          onClick={() => setOpenAddCategory(false)}
        />
        <h2 className="h-12 text-left text-3xl font-bold">Nueva Categoria</h2>

        <form className="h-80 w-full">
          <div className="flex flex-col gap-4">
            <label htmlFor="name">Nombre de la categoría</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre de la categoría"
              className="rounded-md border-2 border-accentSoft bg-white p-2 text-main"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="color">Color de la categoría</label>
            <input
              type="color"
              id="color"
              name="color"
              className="rounded-md border-2 border-accentSoft bg-white p-2 text-main"
            />
          </div>
          <button
            type="submit"
            className="h-12 w-full rounded-lg border-none bg-sunsetBold font-bold text-white outline-none"
          >
            Agregar categoría
          </button>
        </form>
      </div>
    </div>
  );
}

AddCategory.propTypes = {
  setOpenAddCategory: PropTypes.func.isRequired,
  openAddCategory: PropTypes.bool.isRequired,
};

export default AddCategory;
