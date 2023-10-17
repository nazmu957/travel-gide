import Link from "next/link";
import { AuthContext } from "../../contexts/UserContext";
import { useContext } from "react";
import LoginForm from "../LoginForm";


const AdminLogin = () => {

  const { user, logOut } = useContext(AuthContext);
  return (
    <div>
      {user?.uid ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-white shadow-xl">
              <div className="card-body">
                <h2 className="text-center text-black">Dashboard Login</h2>

                <div className="card-actions justify-center py-5">
                  <Link href={"/dashbord/admin"}>
                    <button className="btn btn-sm btn-error">Admin</button>
                  </Link>
                  <Link href={"/dashbord/user"}>
                    <button className="btn btn-sm btn-primary">User</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
        
        <LoginForm />
        </>
      )}
    </div>
  );
};

export default AdminLogin;
