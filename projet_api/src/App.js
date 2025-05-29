import React from "react";
import "./App.css";
import UserList from "./UserList"; // On importe le composant UserList

function App() {
  return (
    <div className="App">
      <h1>Bienvenue dans l'application React</h1>
      <UserList /> {/* On utilise le composant UserList ici */}
    </div>
  );
}

export default App;
