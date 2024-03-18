import './theme.css';
import ThemeCard from '../ThemeCard/themecard';

function Theme() {
  return (
    <div className="theme_container">
      <div className="cards">
      <ThemeCard imageUrl="./bluecard.png" text="BLUE THEME" />
      <ThemeCard imageUrl="./pinkcard.png" text="PINK THEME" />
      <ThemeCard imageUrl="./darkcard.png" text="DARK THEME" />
      </div>
      <span>Choose your fav theme</span>
    </div>
  );
}

export default Theme;
