import React, { useEffect, useState } from "react";
import api from "./services/api";

import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState([]);
  
  useEffect(()=>{
    api.get('repositories').then(response =>{setRepositories(response.data);})
  }, []);

  async function handleAddRepository() {
   
    const response = await api.post('repositories',{
      title:'ReactJS',
      url:'git@github.com:...',
      techs:['ReactJS', 'NodeJS']
    });
    
    
    setRepositories([...repositories, response.data]);

  async function handleRemoveRepository(id) {
    
  }
}
  return (
    <div>
      <ul data-testid="repository-list">
       {repositories.map(repositorie => (
          <li key={repositorie.id}>
          {repositorie.title}

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
       ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
