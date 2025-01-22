import PropTypes from "prop-types";

function FieldForm({ input, register, errors }) {
  const existingError = errors[input.name] !== undefined;
  const timeAnimation = 0.35;
  const partTime = Math.round((timeAnimation / input.label.length) * 100) / 100;

  return (
    <div className="relative flex h-auto w-full flex-col justify-center px-2 pb-1 pt-6">
      <input
        id={input.name}
        type={input.type}
        className={`input-auth h-14 w-full rounded-md border-none px-4 outline-none ring-1 placeholder:opacity-0 ${existingError ? "ring-red-500 focus:ring-red-500" : "ring-gray-500 focus:ring-sky-400"} `}
        autoComplete="off"
        {...register(input.name)}
        placeholder={input.placeholder}
      />
      <label
        htmlFor={input.name}
        className="label-float absolute left-2 mb-1 flex h-20 -translate-y-2 items-center pl-2 text-gray-500"
      >
        {input.label.split("").map((char, i) => {
          return (
            <span key={i} style={{ transitionDuration: `${i * partTime}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
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
