import Folder from '../Folder/folder';
import './darkhome.css';
import BackArrow from '../BackArrow/backarrow';

function DarkHome() {
  document.body.classList.add('dark-home-body');
  return (
    <div className="home_container">
      <BackArrow url="/"  />
      <div className="header">
        <h1>hello <br></br>(seu nome).</h1>
        <div className="clock">
          <p>08:00</p>
          <span>Saturday, 4 March 2023</span>
        </div>
        <img src="./darksky.png" alt="Dark Sky" />
      </div>
      <div className="main">
        <div className="year">
          <span>2024</span>
          <img src="./darkthemeimg.png" alt="Coffee and book" />
        </div>
        <Folder imageUrl="./darkfolder.svg" text="to do" to="/darkhome" />
        <Folder imageUrl="./darkfolder.svg" text="planner" to="/darkhome" />
        <Folder imageUrl="./darkfolder.svg" text="water tracker" to="/darkhome" />
      </div>
      <div className="mobile_alert">
        <p>Hey You! <br></br>Go to your desktop to start using the app!</p>
      </div>
    </div>
  );
}

export default DarkHome;
