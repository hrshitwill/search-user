function Home() {
    return (
        <ul>

  {filteredData.map((user) => (

    <li key={user.id}>

      {user.name}

      <Link to={`/user/${user.id}`}>

        <button>
          View Details
        </button>

      </Link>

    </li>

  ))}

</ul>
    );
}export default Home;