import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../hook/Provider/AuthProvider";
import Loading from "../Pages/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/logIn" />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
