import {
  useContext
} from "react";

import {
  AuthContext
} from "../context/AuthContext";

import {
  useNavigate
} from "react-router-dom";

function Login() {

  const {
    login
  } = useContext(
    AuthContext
  );

  const navigate =
    useNavigate();

  function handleLogin() {

    login();

    navigate("/dashboard");

  }

  return (

    <div>

      <h1>Login Page</h1>

      <button
        onClick={handleLogin}
      >
        Login
      </button>

    </div>

  );

}

export default Login;