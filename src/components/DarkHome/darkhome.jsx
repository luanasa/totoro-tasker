import Folder from '../Folder/folder';
import './darkhome.css';
import BackArrow from '../BackArrow/backarrow';
import React, { useState, useEffect } from "react";

function DarkHome() {
  document.body.classList.add('dark-home-body');

  const [userName, setUserName] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  // Function to update the current time
  const updateClock = () => {
    const date = new Date();
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    const formattedTime = date.toLocaleString('en-US', options);
    setCurrentTime(formattedTime);
  };

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
    
    // Atualiza o horário inicial
    updateClock();

    // Atualiza o horário a cada minuto
    const interval = setInterval(() => {
      updateClock();
    }, 60000); // 60000 milliseconds = 1 minute

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []); // Executa apenas uma vez quando o componente é montado

  return (
    <div className="home_container">
      <BackArrow url="/"  />
      <div className="header">
        <h1>hello <span>{userName ? userName : "you."}</span></h1>
        <div className="clock">
          <p>{currentTime.split(',')[1]}</p>
          <span>{currentTime.split(',')[0]}</span>
        </div>
        <img src="./darksky.png" alt="Dark Sky" />
      </div>
      <div className="main">
        <div className="year">
          <span>2024</span>
          <img src="./darkthemeimg.png" alt="Coffee and book" />
        </div>
        <Folder imageUrl="./darkfolder.svg" text="to do" to="/TodoList" />
        <Folder imageUrl="./darkfolder.svg" text="planner" to="/darkhome" />
        <Folder imageUrl="./darkfolder.svg" text="water tracker" to="/watertracker" />
      </div>
      <div className="mobile_alert">
        <p>Hey You! <br></br>Go to your desktop to start using the app!</p>
      </div>
    </div>
  );
}

export default DarkHome;
