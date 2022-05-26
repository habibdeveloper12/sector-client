import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import auth from "../firebase.init";



import useAdmin from "./useAdmin";

function RequireAdmin({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user)
  let location = useLocation();
  if (loading || adminLoading) {
    return <Loading></Loading>
  }
  if (error) {
    toast(error.message)
  }

  if (!user || !admin) {

    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
export default RequireAdmin;