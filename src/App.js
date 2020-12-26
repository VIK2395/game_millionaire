import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import StartPage from "./components/start_page/StartPage";
import GamePage from "./components/game_page/GamePage";
import EndPage from "./components/end_page/EndPage";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/game" component={GamePage} />
          <Route path="/gameover" component={EndPage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
