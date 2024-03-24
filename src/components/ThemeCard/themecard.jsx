import { Link } from 'react-router-dom'; 

import './themecard.css';

function ThemeCard({ imageUrl, text, to }) { 
  return (
    <Link to={to} className="card_container"> {}
      <img src={imageUrl} alt="" />
      <p>{text}</p>
    </Link>
  );
}

export default ThemeCard;