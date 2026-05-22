import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

import { useState, useEffect } from "react";

function Home({ name, setname, filteredData }) {

  return (

    <div>

      <h1>User Search App</h1>

      <input
        type="text"
        placeholder="Search by name"
        value={name}
        onChange={(e) =>
          setname(e.target.value)
        }
      />

      {
        filteredData.length === 0
          ? (
              <p>No users found</p>
            )
          : (
              <ul>

                {filteredData.map((user) => (

                  <li key={user.id}>

                    <h3>{user.name}</h3>

                    <Link to={`/user/${user.id}`}>

                      <button>
                        View Details
                      </button>

                    </Link>

                  </li>

                ))}

              </ul>
            )
      }

    </div>

  );

}

function About() {

  return <h1>About Page</h1>;

}

function Contact() {

  return <h1>Contact Page</h1>;

}

function Notfound() {

  return <h1>404 Page Not Found</h1>;

}

function User({ data }) {

  const { id } = useParams();

  const user = data.find(
    (u) => u.id === Number(id)
  );

  return (

    <div>

      <h1>User Details</h1>

      {
        user ? (

          <div>

            <h2>{user.name}</h2>

            <p>Email: {user.email}</p>

            <p>Phone: {user.phone}</p>

            <p>Website: {user.website}</p>

          </div>

        ) : (

          <h2>User Not Found</h2>

        )
      }

    </div>

  );

}

function App() {

  const [name, setname] = useState("");
  const [data, setData] = useState([]);
  const [load,setload]=useState(true);

  useEffect(() => {

    async function fetchData() {

      try {

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const result = await response.json();

        setData(result);

      } catch (error) {

        console.log(error);

      }finally{
        setload(false);
      }

    }

    fetchData();

  }, []);

  const filteredData = data.filter((user) =>
    user.name
      .toLowerCase()
      .includes(name.toLowerCase())
  );

  return (

  load ? (

    <h2>Loading...</h2>

  ) : (

    <BrowserRouter>

      <nav>

        <Link to="/">Home</Link>

        {" | "}

        <Link to="/about">
          About
        </Link>

        {" | "}

        <Link to="/contact">
          Contact
        </Link>

      </nav>

      <Routes>

        <Route
          path="/"
          element={
            <Home
              name={name}
              setname={setname}
              filteredData={filteredData}
            />
          }
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/user/:id"
          element={<User data={data} />}
        />

        <Route
          path="*"
          element={<Notfound />}
        />

      </Routes>

    </BrowserRouter>

  )

);
}

export default App;