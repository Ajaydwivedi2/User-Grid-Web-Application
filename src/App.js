import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]); // State to store the fetched users
  const [loading, setLoading] = useState(false); // State to track loading state

  const getUsers = async () => {
    setLoading(true); // Set loading state to true before making the API call
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1"); // Make the API call to fetch users
      setUsers(response.data.data); // Update the users state with the fetched data
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false); // Set loading state to false after the API call is complete
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand"> Censusster</div>{" "}
        {/* Brand name displayed in the navbar */}
        <button className="btn-get-users" onClick={getUsers}>
          Get Users
        </button>
      </nav>
      <div className="user-grid">
        {loading ? ( // If loading state is true, display the loader
          <div className="loader">Loading...</div>
        ) : (
          users.map((user) => (
            <div className="user-card" key={user.id}>
              {/* Display user avatar */}
              <img
                src={user.avatar}
                alt={user.first_name}
                className="avatar"
              />{" "}
              <div className="user-details">
                {/* Display user name */}
                <p>
                  {user.first_name} {user.last_name}
                </p>{" "}
                <p>{user.email}</p> {/* Display user email */}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
