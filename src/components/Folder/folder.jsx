import './folder.css';
import { Link } from 'react-router-dom'; 

function Folder({ imageUrl, text, to }) {
  return (
    <Link to={to} className="folders"> {}
      <ul>
        <li>
          <p>{text}</p>
          <img src={imageUrl} alt="" />
        </li>
      </ul>
    </Link>
  );
}

export default Folder;
