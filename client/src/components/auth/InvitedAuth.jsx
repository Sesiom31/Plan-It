import PropTypes from "prop-types";

function InvitedAuth({ optionalClass }) {
  return (
    <button
      className={`flex h-full w-full items-center justify-center bg-gradient-to-bl from-sunsetSoft to-sunsetBold px-4 font-bold text-main ${optionalClass}`}
    >
      Explorar como invitado
    </button>
  );
}

InvitedAuth.propTypes = {
  optionalClass: PropTypes.string,
};

export default InvitedAuth;
