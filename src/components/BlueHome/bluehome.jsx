import Folder from '../Folder/folder';
import './bluehome.css';

function BlueHome() {
  return (
    <div className="bluehome_container">
      <div className="header">
        <h1>hello <br></br>(seu nome).</h1>
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
    </div>
  );
}

export default BlueHome;
