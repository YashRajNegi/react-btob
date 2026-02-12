import { useState } from 'react'

import './App.css'

function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    alert(`Hello ${name}, your email is ${email}`);
    console.log(name,email);
  }

    return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />

      <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default App
