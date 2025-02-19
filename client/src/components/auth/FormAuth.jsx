import { Link, useNavigate } from "react-router-dom";

import FieldForm from "../../ui/FieldForm";
import { LiaSpinnerSolid } from "react-icons/lia";
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

  const navigate = useNavigate();

  console.log(isLoading);

  const onSubmit = async (data) => {
    try {
      await fetchAuth(data).unwrap();
      await navigate("/tasks");
    } catch (err) {
      console.log(err);
      if (err.status === "FETCH_ERROR") {
        setError("notConnection", {
          type: "manual",
          message: "No hay conexión con el servidor",
        });
      }

      if (err.data?.message.includes("existe")) {
        setError("email", {
          type: "manual",
          message: "El email ya está en uso",
        });
      }

      if (err.data?.message.includes("Credenciales")) {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full py-10">
      <div className="h-auto">
        <div className="flex flex-col gap-0.5">{content}</div>
        <span className="my-4 block h-8 w-full text-center text-sm font-normal text-red-500">
          {(errors["notUser"] && errors["notUser"].message) ||
            (errors["notConnection"] && errors["notConnection"].message)}
        </span>
      </div>

      <div className="mt-2">
        <div className="h-14 w-full px-1">
          <button
            className={`bg-azul-principal mx-auto h-full w-full max-w-[26rem] rounded-full font-semibold text-[#ffffff] ${isLoading ? "bg-opacity-70" : ""} relative flex items-center justify-center`}
            disabled={isLoading}
            type="submit"
          >
            {" "}
            {nameButton}{" "}
            {isLoading && (
              <LiaSpinnerSolid className="absolute right-8 h-6 w-6 animate-spin text-[#ffffff]" />
            )}
          </button>
        </div>

        <div className="mt-3 text-center">
          <p className="text-gris-text">
            {subtitle}{" "}
            <Link
              className="text-gris-oscuro font-semibold underline"
              to={toLink}
            >
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
