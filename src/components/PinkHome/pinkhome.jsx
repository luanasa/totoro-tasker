import Folder from '../Folder/folder';
import './pinkhome.css';
import BackArrow from '../BackArrow/backarrow';

function PinkHome() {
  return (
    <div className="home_container">
      <BackArrow url="/"  />
      <div className="header">
        <h1>hello <br></br>(seu nome).</h1>
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
    </div>
  );
}

export default PinkHome;
