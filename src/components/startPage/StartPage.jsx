import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import logoHand from '../../assets/logoHand.svg';
import style from './StartPage.module.css';
import {
  disableIsInitLoad,
  formGameQuestions,
  resetEarned,
  resetScore,
  setIsInGame,
  setIsInGameEnd,
  setIsInGameStart,
  setScoreQuestion,
  updateScoreDashboard,
} from '../../redux/gameActions';

import ErrorMessage from '../common/errorMessage/ErrorMessage';

const StartPage = ({
  resetEarned,
  resetScore,
  setScoreQuestion,
  updateScoreDashboard,
  disableIsInitLoad,
  isInGame,
  isInGameEnd,
  setIsInGame,
  setIsInGameEnd,
  setIsInGameStart,
  formGameQuestions,
  loadError,
}) => {
  useEffect(() => {
    disableIsInitLoad();
  }, [disableIsInitLoad]); // runs only first time

  const onStartClicked = () => {
    // dispatch(resetStore())
    formGameQuestions();
    resetScore();
    setScoreQuestion();
    updateScoreDashboard();
    resetEarned();
    // redirect
    setIsInGame(true);
    setIsInGameEnd(false);
    setIsInGameStart(false);
  };

  if (isInGame) return <Redirect to="/game" />;

  if (isInGameEnd) return <Redirect to="/gameover" />;

  if (loadError.name) return <ErrorMessage error={loadError} />;

  return (
    <div className={style.wrapper}>
      <div className={`${style.content} ${style.content_portrait}`}>
        <div className={style['content__portrait-block']}>
          <img
            className={`${style.content__logo} ${style.logo}`}
            draggable="false"
            width="198"
            height="156"
            src={logoHand}
            alt="logo_hand"
          />
          <p className={style.content__text}>
            Who wants to be
            <br />a millionaire?
          </p>
        </div>
        <Link
          to="/game"
          className={`${style['content__link-button']} ${style['link-button']}`}
          onClick={onStartClicked}
        >
          Start
        </Link>
      </div>
      <div className={`${style.content} ${style.content_landscape}`}>
        <img
          className={`${style.content__logo} ${style.logo}`}
          draggable="false"
          width="198"
          height="156"
          src={logoHand}
          alt="logo_hand"
        />
        <div className={style['content__landscape-block']}>
          <p className={style.content__text}>
            Who wants to be
            <br />a millionaire?
          </p>
          <Link
            to="/game"
            className={`${style['content__link-button']} ${style['link-button']}`}
            onClick={onStartClicked}
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isInGame: state.isInGame,
  isInGameEnd: state.isInGameEnd,
  loadError: state.loadError,
});

const mapDispatchToProps = (dispatch) => ({
  disableIsInitLoad: () => dispatch(disableIsInitLoad()),
  formGameQuestions: () => dispatch(formGameQuestions()),
  resetScore: () => dispatch(resetScore()),
  setScoreQuestion: () => dispatch(setScoreQuestion()),
  updateScoreDashboard: () => dispatch(updateScoreDashboard()),
  resetEarned: () => dispatch(resetEarned()),
  setIsInGame: (to) => dispatch(setIsInGame(to)),
  setIsInGameEnd: (to) => dispatch(setIsInGameEnd(to)),
  setIsInGameStart: (to) => dispatch(setIsInGameStart(to)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
