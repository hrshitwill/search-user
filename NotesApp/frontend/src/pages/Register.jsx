import {
  useState
} from "react";

import axios from "axios";

function Register() {

  const [form, setForm] =
    useState({

      name: "",
      email: "",
      password: ""

    });

  async function register() {

    const response =
      await axios.post(

        "http://localhost:3000/api/auth/register",

        form

      );

    alert(response.data.message);

  }

  return (

    <div>

      <h1>Register</h1>

      <input
        placeholder="Name"
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value
          })
        }
      />

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

      <button onClick={register}>
        Register
      </button>

    </div>

  );

}

export default Register;