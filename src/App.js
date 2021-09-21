import "./App.css";
import Game from "./Components/Game/Game";
import MainMenu from "./Components/MainMenu/MainMenu";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainMenu />
          </Route>
          <Route path="/game/left">
            <Game panel="left" />
          </Route>
          <Route path="/game/right">
            <Game panel="right" />
          </Route>
          <Route path="/game/center">
            <Game panel="center" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
