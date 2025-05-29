import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des utilisateurs", error);
      });
  }, []);

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {listOfUser.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
