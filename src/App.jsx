import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import StartPage from './components/startPage/StartPage';
import GamePage from './components/gamePage/GamePage';
import EndPage from './components/endPage/EndPage';
import Loader from './components/common/loader/Loader';

function App({ isLoadingGameConfigData }) {
  return (
    <Loader isActive={isLoadingGameConfigData}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/game" component={GamePage} />
          <Route path="/gameover" component={EndPage} />
        </Switch>
      </BrowserRouter>
    </Loader>
  );
}

const mapStateToProps = ({ isLoadingGameConfigData }) => ({
  isLoadingGameConfigData,
});

export default connect(mapStateToProps)(App);
