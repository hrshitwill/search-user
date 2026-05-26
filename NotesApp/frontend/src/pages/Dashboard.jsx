import {
  useEffect,
  useState
} from "react";

import axios from "axios";

function Dashboard() {

  const [message,
    setMessage
  ] = useState("");

  useEffect(() => {

    async function getDashboard() {

      const token =
        localStorage.getItem(
          "token"
        );

      const response =
        await axios.get(

          "http://localhost:3000/api/auth/dashboard",

          {
            headers: {
              token
            }
          }

        );

      setMessage(
        response.data.message
      );

    }

    getDashboard();

  }, []);

  return (

    <h1>{message}</h1>

  );

}

export default Dashboard;