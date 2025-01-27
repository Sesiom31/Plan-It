import PropTypes from "prop-types";

function FieldForm({ input, register, errors }) {
  const existingError = errors[input.name] !== undefined;

  return (
    <div className="relative mx-auto flex h-24 w-full max-w-[26rem] flex-col justify-center p-1">
      <input
        id={input.name}
        type={input.type}
        className={`input-auth peer h-14 w-full rounded-xl border-none bg-white px-4 outline-none ring-1 placeholder:opacity-0 ${existingError ? "ring-red-500 focus:ring-red-500" : "text-gray-800 ring-gray-500 focus:ring-sky-500"} `}
        autoComplete="off"
        {...register(input.name)}
        placeholder={input.placeholder}
      />

      <label
        htmlFor={input.name}
        className={`label-float absolute left-3 mb-1 flex h-6 -translate-y-2 items-center bg-white pl-2 pr-1 text-gray-400 peer-focus:-translate-y-9 peer-focus:text-sm peer-focus:tracking-wider peer-[:not(:placeholder-shown)]:-translate-y-9 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:tracking-wider peer-[:not(:placeholder-shown)]:text-gray-700 ${existingError ? "peer-focus:text-red-500 peer-[:not(:focus)]:text-gray-400 peer-[:not(:placeholder-shown)]:text-red-500" : "peer-focus:text-sky-500 peer-[:not(:placeholder-shown):not(:focus)]:text-gray-600 peer-[:not(:placeholder-shown)]:text-sky-500"} `}
      >
        {input.label}
      </label>

      <span className="mt-1 h-4 pl-2 text-xs text-red-500">
        {existingError && errors[input.name].message}
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
