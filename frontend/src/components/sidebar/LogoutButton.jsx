import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto logout bl03">
      {!loading ? (
        <>
          <BiLogOut
            className="w-8 h-8 text-amber-400 cursor-pointer p-1"
            onClick={logout}
          />
          <span className=" text-amber-400 ">Logout</span>
        </>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
