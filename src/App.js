import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      {/* <h1>Vamos criar um clone Whatsapp</h1> */}

      <div className="app-body">
        {<Sidebar />}
        {<Chat />}
      </div>
    </div>
  );
}

export default App;
