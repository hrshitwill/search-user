import { useParams } from "react-router-dom";

function User() {

  const { id } = useParams();

  return (

    <div>

      <h1>User Details Page</h1>

      <h2>User ID: {id}</h2>

    </div>

  );

}

export default User;