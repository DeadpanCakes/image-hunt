import "./App.css";
import Game from "./Components/Game/Game";
import MainMenu from "./Components/MainMenu/MainMenu";
import { useState } from "react";

function App() {
  const [chosenPanel, setChosenPanel] = useState(null);
  return (
    <div className="App">
      {chosenPanel ? <Game panel={chosenPanel} /> : null}
      {!chosenPanel ? <MainMenu choosePanel={setChosenPanel} /> : null}
    </div>
  );
}

export default App;
