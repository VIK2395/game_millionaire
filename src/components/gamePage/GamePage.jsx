import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './GamePage.css';
import { connect } from 'react-redux';
import ScoreList from './ScoreList';
import AnswersList from './AnswersList';

const GamePage = ({ question, isInitLoad, isInGameEnd, isInGameStart }) => {
  const [isActive, setActiveClass] = useState(false);

  const toggleActiveClass = () => {
    setActiveClass((isActive) => !isActive);
  };

  if (isInitLoad || isInGameStart) return <Redirect to="/" />;

  if (isInGameEnd) return <Redirect to="/gameover" />;

  return (
    <div className="wrapper">
      <header className="header">
        <div
          className={`header__burger burger ${isActive ? 'active' : ''}`}
          onClick={toggleActiveClass}
        >
          <div className="burger__body">
            <span className="burger__central-line" />
          </div>
        </div>
      </header>

      <section className="content">
        <div className="content__question">
          <p>{question.questionText}</p>
        </div>
        <div className="content__answers">
          <AnswersList />
        </div>
      </section>

      <section className={`score ${isActive ? 'active' : ''}`}>
        <ScoreList />
      </section>
    </div>
  );
};

const mapStateToProps = ({ question, isInitLoad, isInGameEnd, isInGameStart }) => ({
  question,
  isInitLoad,
  isInGameEnd,
  isInGameStart,
});

export default connect(mapStateToProps)(GamePage);
