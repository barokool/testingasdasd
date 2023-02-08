import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { GoogleButton } from "./components/googleButton";
import axios from "axios";
import { loadGapiInsideDOM } from "gapi-script";

function App() {
  const getBalance = async () => {
    const response = await axios.get(
      `http://13.213.18.10:3333/api/demo-account/get-balance?tournamentId=fa046098-f155-4d1f-ad04-2032e00f08fa`
    );
    console.log(response.data);
    return response.data;
  };

  return (
    <div className="App">
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => getBalance()}>Click</button>
      </div>
    </div>
  );
}

export default App;
