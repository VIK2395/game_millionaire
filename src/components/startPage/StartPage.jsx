import React from 'react';
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
  setIsInGame,
  isInGame,
  setIsInGameEnd,
  formGameQuestions,
  loadError,
}) => {
  const onStartClicked = () => {
    disableIsInitLoad();
    formGameQuestions();
    resetScore();
    setScoreQuestion();
    updateScoreDashboard();
    resetEarned();
    setIsInGame(true);
    setIsInGameEnd(false);
  };

  if (isInGame) return <Redirect to="/game" />;

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
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
