import './theme.css';
import ThemeCard from '../ThemeCard/themecard';

function Theme() {
  return (
    <div className="theme_container">
      <div className="cards">
      <ThemeCard imageUrl="./bluecard.png" text="BLUE THEME" to="/bluehome" />
      <ThemeCard imageUrl="./pinkcard.png" text="PINK THEME" to="/pinkhome" />
      <ThemeCard imageUrl="./darkcard.png" text="DARK THEME" to="/darkhome" />
      </div>
      <span>Choose your fav theme</span>
    </div>
  );
}

export default Theme;
