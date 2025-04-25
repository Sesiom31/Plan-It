import { LiaSpinnerSolid } from "react-icons/lia";
import PropTypes from "prop-types";
import { useGuestUserMutation } from "../../services/api";
import { useNavigate } from "react-router-dom";

function InvitedAuth({ optionalClass }) {
  const [onGuest, { isLoading }] = useGuestUserMutation();
  const navigate = useNavigate();

  const handleGuest = async () => {
    try {
      await onGuest().unwrap();
      navigate("/tasks");
    } catch (err) {
      console.error("Error al crear invitado:", err);
    }
  };
  return (
    <button
      className={`relative flex h-full w-full items-center justify-center bg-gradient-to-bl from-sunsetSoft to-sunsetBold px-4 font-bold text-main ${optionalClass}`}
      onClick={handleGuest}
      disabled={isLoading}
      type="button"
    >
      Explorar como invitado
      {isLoading && (
        <LiaSpinnerSolid className="absolute right-3 h-4 w-4 animate-spin text-main" />
      )}
    </button>
  );
}

InvitedAuth.propTypes = {
  optionalClass: PropTypes.string,
};

export default InvitedAuth;
