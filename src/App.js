import "./App.css";
import Photo from "./Components/Photo/Photo";
import targetPool from "./testFns/tmpTarget/leftTmpTarget";
import panelImgs from "./Assets/panels";
import Game from "./Components/Game/Game";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      {
        <Game>
          <Header />
          <Photo
            imgSrc={panelImgs.left}
            imgWidth={1800}
            imgHeight={4300}
            targetPool={targetPool}
          />
        </Game>
      }
    </div>
  );
}

export default App;
