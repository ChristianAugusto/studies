
import React, { useState, useEffect } from "react";

/*
state = {
   repositories: []
}
*/

export default props => {
   const [repositories, setRepositories] = useState([]);
   const [newRepository, setNewRepository] = useState("");

   useEffect(() => {
      const getRepos = async () => {
         const response = await fetch("https://api.github.com/users/ChristianAugusto/repos");
         const json = await response.json();
         console.log(json);
         setRepositories(json);
      }
      getRepos();
   }, []);

   useEffect(() => {
      document.title = `You have ${repositories.reduce((counter, repo) => repo.favorite ? ++counter : counter, 0)} favorite(s)`;
   }, [repositories]);

   const addRepository = () => {
      if (newRepository) {
         setRepositories(
            [ 
               ...repositories, 
               { id: repositories.length ? repositories.length : repositories.length + 1, name: newRepository }
            ]
         );
      }
   };

   const addFavorite = id => {
      const newRepositories = repositories.map(repo => {
         return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
      });

      setRepositories(newRepositories);
   };

   const changeInput = (event) => {
      setNewRepository(event.target.value || "");
   }

   return (
      <>
         <ul>
            {repositories.map(repo => (
               <li key={repo.id} className={repo.favorite ? "foo" : ""}>
                  <p>{repo.name}</p>
                  <button onClick={() => addFavorite(repo.id)}>{repo.favorite ? "Unfavorite" : "Favorite"}</button>
                  {repo.favorite && <span>(Favorito)</span>}
               </li>
            ))}
         </ul>
         <button onClick={() => addRepository()}>Add Repository</button>
         <input type="text" value={newRepository} onChange={changeInput} />
      </>
   );
}