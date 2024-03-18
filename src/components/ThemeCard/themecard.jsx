import './themecard.css';

function ThemeCard({ imageUrl, text }) {
  return (
    <div className="card_container">
      <img src={imageUrl} alt="" />
      <p>{text}</p>
    </div>
  );
}

export default ThemeCard;
