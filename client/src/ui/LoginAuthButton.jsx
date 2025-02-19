import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function LoginAuthButton() {
  return (
    <Link to="/login">
      <FaUserCircle
        className="text-naranja-suave h-7 w-7"
        title="Iniciar sesión"
      />
    </Link>
  );
}

export default LoginAuthButton;
