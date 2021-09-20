import "./MainMenu.css";
import LevelSelect from "../LevelSelect/LevelSelect";

const MainMenu = (props) => {
  return (
    <div className="mainMenu">
      <h1>Garden of Earthly Delights</h1>
      <LevelSelect choosePanel={props.choosePanel} />
    </div>
  );
};

export default MainMenu;
