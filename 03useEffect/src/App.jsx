import { useEffect,useState } from 'react'

import './App.css'

function App() {
  const [users,setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers(params) {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      const data = await res.json();

      setUsers(data);
    }
    fetchUsers();
  }, [])

  return (
    <div>
      <h1>User list</h1>
      {
        users.map((user)=>(
          <p>{user.name}</p>
        ))
      }
    </div>
  );
}

export default App;
