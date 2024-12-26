import PropTypes from "prop-types";

function FieldForm({ input }) {
  return (
    <div className="flex h-[6rem] w-full flex-col">
      <label htmlFor={input.name} className="mb-1 pl-2 text-gray-800">
        {input.label}
      </label>
      <input
        id={input.name}
        type={input.type}
        placeholder={input.placeholder}
        className="h-10 w-full rounded-md border-none px-2 outline-none ring-1 ring-gray-500 placeholder:text-gray-400 focus:ring-sky-400"
        autoComplete="off"
      />
      <span className="mt-1 pl-2 text-xs text-red-500"></span>
    </div>
  );
}

FieldForm.propTypes = {
  input: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ),
};

export default FieldForm;
