import React, { useState, useEffect } from "react";
import Folder from '../Folder/folder';
import './bluehome.css';
import BackArrow from '../BackArrow/backarrow';

function BlueHome() {
  document.body.classList.add('blue-home-body');

  const [userName, setUserName] = useState("");

  // Verifica se o nome do usuário já foi armazenado em algum lugar
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName); 
    } else {
      // Se não encontrado, exibe o prompt para o usuário digitar o nome
      const name = prompt("What's your name:");
      if (name !== null) {
        setUserName(name);
        localStorage.setItem("userName", name);
      }
    }
  }, []); // Executa apenas uma vez quando o componente é montado

  return (
    <div className="home_container">
      <BackArrow url="/"  />
      <div className="header">
        <h1>hello <span>{userName ? userName : "you."}</span></h1>
        <div className="clock">
          <p>08:00</p>
          <span>Saturday, 4 March 2023</span>
        </div>
        <img src="./bluesky.png" alt="Blue Sky" />
      </div>
      <div className="main">
        <div className="year">
          <span>2024</span>
          <img src="./bluethemeimg.png" alt="Coffee and book" />
        </div>
        <Folder imageUrl="./folder.svg" text="to do" to="/bluehome" />
        <Folder imageUrl="./folder.svg" text="planner" to="/bluehome" />
        <Folder imageUrl="./folder.svg" text="water tracker" to="/bluehome" />
      </div>
      <div className="mobile_alert">
        <p>Hey You! <br></br>Go to your desktop to start using the app!</p>
      </div>
    </div>
  );
}

export default BlueHome;
