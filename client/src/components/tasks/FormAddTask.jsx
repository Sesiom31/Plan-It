import { AiOutlineCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";

function FormAddTask({ onChangeShowForm, showForm }) {
  return (
    <div
      className={`form-add-hidden absolute bottom-0 left-0 right-0 top-0 z-50 min-h-screen w-full bg-[#1c1c1c] bg-opacity-60 ${showForm && "form-add-visible"}`}
    >
      <div
        className={`add-task ${showForm && "open-add-task"} relative mt-16 h-auto w-full rounded-md bg-[#ffffff] px-1 py-10 text-gris-oscuro`}
      >
        <div className="absolute right-4 top-4">
          <button
            className="h-auto w-auto"
            onClick={() => onChangeShowForm(false)}
          >
            <AiOutlineCloseCircle className="h-8 w-8 text-gris-text" />
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-center text-3xl font-semibold">Tarea nueva</h2>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 p-1 px-3">
            <label htmlFor="add-task" className="pl-2 text-sm text-gris-text">
              Tarea
            </label>
            <input
              type="text"
              name="add-task"
              id="add-task"
              className="h-12 rounded-lg border-none px-4 outline-none ring-1 ring-gris-text focus:outline-none focus:ring-sky-500"
              placeholder="Agregar tarea"
              autoFocus
            />
          </div>
          <div className="flex flex-col gap-1 p-1 px-3">
            <label htmlFor="detalles" className="pl-2 text-sm text-gris-text">
              Detalles
            </label>

            <textarea
              name="detalles"
              id="detalles"
              className="min-h-[4.5rem] rounded-lg border-none p-4 outline-none ring-1 ring-gris-text focus:outline-none focus:ring-sky-500"
              placeholder="Agregar detalles"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

FormAddTask.propTypes = {
  onChangeShowForm: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
};

export default FormAddTask;
