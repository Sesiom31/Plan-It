import { useLogoutUserMutation } from "../../services/api";
import { useNavigate } from "react-router-dom";

function Header() {
  const [logoutUser] = useLogoutUserMutation();
  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      await logoutUser().unwrap();
      await navigate("/home");
    } catch (err) {
      console.err(err);
    }
  };

  return (
    <header className="h-[4.5rem] bg-orange-500">
      <div className="">
        <button
          className="bg-gray-800 p-2 text-white"
          type="button"
          onClick={onLogout}
        >
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
}

export default Header;
