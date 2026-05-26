import {
  useState
} from "react";

import axios from "axios";

function Login() {

  const [form, setForm] =
    useState({

      email: "",
      password: ""

    });

  async function login() {

    const response =
      await axios.post(

        "http://localhost:3000/api/auth/login",

        form

      );

    localStorage.setItem(
      "token",
      response.data.token
    );

    alert(
      response.data.message
    );

  }

  return (

    <div>

      <h1>Login</h1>

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value
          })
        }
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value
          })
        }
      />

      <button onClick={login}>
        Login
      </button>

    </div>

  );

}

export default Login;