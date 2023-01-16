import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { currentUser } = useSelector((state: any) => state.user);
  return !currentUser ? <Navigate to={"/login"} /> : children;
};

export default ProtectedRoute;
