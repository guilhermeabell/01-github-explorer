import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

// api.github/users/vulgoguix

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/guilhermeabel99'
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
      fetch('https://api.github.com/users/vulgoguix')
      .then( response => response.json())
      .then( data => console.log(data))
  }, [repositories])
  
  return ( 
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}




