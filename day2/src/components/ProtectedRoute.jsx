import {
  useContext
} from "react";

import {
  AuthContext
} from "../context/AuthContext";

function ProtectedRoute({
  children
}) {

  const {
    isLoggedIn
  } = useContext(
    AuthContext
  );

  if(!isLoggedIn) {

    return <h1>
      Access Denied
    </h1>;

  }

  return children;

}

export default ProtectedRoute;