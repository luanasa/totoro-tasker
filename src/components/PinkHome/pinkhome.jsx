import Folder from '../Folder/folder';
import './pinkhome.css';
import BackArrow from '../BackArrow/backarrow';
import { useEffect, useState } from 'react';

function PinkHome() {
  document.body.classList.add('pink-home-body');

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
    <div className="pinkhome_container">
      <BackArrow url="/" className="pink-arrow" />
      <div className="header">
        <h1>hello <span>{userName ? userName : "you."}</span></h1>
        <div className="clock">
          <p>08:00</p>
          <span>Saturday, 4 March 2023</span>
        </div>
        <img src="./pinksky.png" alt="Pink Sky" />
      </div>
      <div className="main">
        <div className="year">
          <span>2024</span>
          <img src="./pinkthemeimg.png" alt="Coffee and book" />
        </div>
        <Folder imageUrl="./pinkfolder.svg" text="to do" to="/pinkhome" />
        <Folder imageUrl="./pinkfolder.svg" text="planner" to="/pinkhome" />
        <Folder imageUrl="./pinkfolder.svg" text="water tracker" to="/pinkhome" />
      </div>
      <div className="mobile_alert">
        <p>Hey You! <br></br>Go to your desktop to start using the app!</p>
      </div>
    </div>
  );
}

export default PinkHome;
