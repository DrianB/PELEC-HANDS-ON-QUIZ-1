import { useState, useEffect } from "react";


function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data.slice(0, 5));
        setLoading(false);
      } catch(err) {
        setError("Failed to fetch users");
        setLoading(false);
        console.error(err);
      };
    }

    fetchUsers();
  },[]);

  if (loading) {
    return <p>Loading...</p>;
  };
  if (error) {
    return <p>{Error}</p>;
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{color:"black"}}>User List</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id} 
          style={{
            backgroundColor: "#ffffff",
            border: "3px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}>
            <h2>{user.name}</h2>
            <p>Company: {user.company.name}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;