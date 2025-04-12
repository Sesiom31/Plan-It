import { PiPlusCircleFill } from "react-icons/pi";
import PropTypes from "prop-types";

function AddTaskButton({ onChangeShowForm }) {
  return (
    <div className="h-16 w-full px-4">
      <button
        className="flex h-full w-full items-center justify-between rounded-lg border-none bg-azul-principal px-4 text-[#ffffff]"
        onClick={() => onChangeShowForm(true)}
      >
        <span>Agregar tarea</span>
        <div className="flex items-center">
          <PiPlusCircleFill className="h-7 w-7" />
        </div>
      </button>
    </div>
  );
}

AddTaskButton.propTypes = {
  onChangeShowForm: PropTypes.func.isRequired,
};

export default AddTaskButton;
