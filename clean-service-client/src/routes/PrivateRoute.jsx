import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  console.log("fast", location)
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] z-20">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

 
  if (!isLoading && !user?.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
