import { LiaUserCircleSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function LoginAuthButton() {
  return (
    <Link to="/login">
      <LiaUserCircleSolid
        className="h-8 w-8 text-white"
        title="Iniciar sesión"
      />
    </Link>
  );
}

export default LoginAuthButton;
