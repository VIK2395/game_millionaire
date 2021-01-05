import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StartPage from "./components/startPage/StartPage";
import GamePage from "./components/gamePage/GamePage";
import EndPage from "./components/endPage/EndPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StartPage}/>
                <Route path="/game" component={GamePage}/>
                <Route path="/gameover" component={EndPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
