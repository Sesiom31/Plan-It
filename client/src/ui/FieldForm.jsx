import PropTypes from "prop-types";

function FieldForm({ input, register, errors }) {
  return (
    <div className="flex h-[6rem] w-full flex-col px-2">
      <label htmlFor={input.name} className="mb-1 pl-2 text-gray-800">
        {input.label}
      </label>
      <input
        id={input.name}
        type={input.type}
        placeholder={input.placeholder}
        className={`h-10 w-full rounded-md border-none px-2 outline-none ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-sky-500 ${errors[input.name] ? "ring-red-500 focus:ring-red-500" : ""}`}
        autoComplete="off"
        {...register(input.name)}
      />
      <span className="mt-1 pl-2 text-xs text-red-500">
        {errors[input.name] && errors[input.name].message}
      </span>
    </div>
  );
}

FieldForm.propTypes = {
  input: PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }),
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default FieldForm;
