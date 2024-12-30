import FieldForm from "../../ui/FieldForm";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function FormAuth({
  inputs,
  nameButton,
  subtitle,
  optionLink,
  toLink,
  schema,
  fetchAuth,
  isLoading,
}) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await fetchAuth(data).unwrap();
    } catch (err) {
      if (err.data.message.includes("existe")) {
        setError("email", {
          type: "manual",
          message: "El email ya está en uso",
        });
      }

      if (err.data.message.includes("Credenciales")) {
        setError("notUser", {
          type: "manual",
          message: "Credenciales incorrectas",
        });
      }
    }
  };

  const content = inputs.map((input) => (
    <FieldForm
      key={input.name}
      input={input}
      register={register}
      errors={errors}
    />
  ));

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-2 flex h-auto flex-col gap-3">
        {content}
        <span className="h-6 w-full text-center text-sm font-bold text-red-500">
          {errors["notUser"] && errors["notUser"].message}
        </span>
      </div>

      <div>
        <div>
          <button
            className={`mt-4 h-12 w-full rounded-md bg-emerald-500 font-bold text-white hover:bg-emerald-600 ${isLoading && "bg-gray-800"}`}
            disabled={isLoading}
          >
            {" "}
            {nameButton}{" "}
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-500">
            {subtitle}{" "}
            <Link className="font-bold text-gray-800 underline" to={toLink}>
              {optionLink}
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

FormAuth.propTypes = {
  inputs: PropTypes.array.isRequired,
  nameButton: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  optionLink: PropTypes.string.isRequired,
  toLink: PropTypes.string.isRequired,
  schema: PropTypes.object.isRequired,
  fetchAuth: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default FormAuth;
