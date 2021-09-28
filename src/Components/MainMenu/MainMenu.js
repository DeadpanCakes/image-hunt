import "./MainMenu.css";
import { useState } from "react";
import LevelSelect from "../LevelSelect/LevelSelect";
import Popup from "../Popup/Popup";
import Leaderboard from "../Leaderboard/Leaderboard";

const MainMenu = () => {
  const [currPanel, setCurrPanel] = useState("left");
  const [isLeaderboardShowing, setLeaderboardShowing] = useState(false);
  const showLeaderBoard = () => setLeaderboardShowing(true);
  const hideLeaderBoard = () => setLeaderboardShowing(false);
  return (
    <div className="mainMenu">
      <h1>The Garden of Earthly Delights</h1>
      <button onClick={showLeaderBoard}>Leaderboards</button>
      <LevelSelect />
      {isLeaderboardShowing ? (
        <Popup closeFn={hideLeaderBoard}>
          <div className="leaderboardContainer">
            <h1>Leaderboard</h1>
            <div className="panelTabContainer">
              <button
                className="panelTab"
                disabled={currPanel === "left"}
                onClick={() => setCurrPanel("left")}
              >
                Left
              </button>
              <button
                className="panelTab"
                disabled={currPanel === "center"}
                onClick={() => setCurrPanel("center")}
              >
                Center
              </button>
              <button
                className="panelTab"
                disabled={currPanel === "right"}
                onClick={() => setCurrPanel("right")}
              >
                Right
              </button>
            </div>
          </div>
          <Leaderboard panel={currPanel} />
        </Popup>
      ) : null}
    </div>
  );
};

export default MainMenu;
