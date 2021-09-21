import "./MainMenu.css";
import LevelSelect from "../LevelSelect/LevelSelect";

const MainMenu = () => {
  return (
    <div className="mainMenu">
      <h1>The Garden of Earthly Delights</h1>
      <LevelSelect />
    </div>
  );
};

export default MainMenu;
