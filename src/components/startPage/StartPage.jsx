import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import logoHand from '../../logoHand.svg';
import s from './StartPage.module.css';
import {
  disableIsInitLoad,
  formGameQuestions,
  resetEarned,
  resetScore,
  setIsInGame,
  setIsInGameEnd,
  setScoreQuestion,
  updateScoreDashboard,
} from '../../store/gameActions';

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
                     loadError
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

  if (loadError.name) {
    return (
        <div className={s['error-message']}>
          <p>{loadError.message}</p>
        </div>
    );
  }

  return (
    <div className={s.wrapper}>
      <div className={`${s.content} ${s.content_portrait}`}>
        <div className={s['content__portrait-block']}>
          <img
            className={`${s.content__logo} ${s.logo}`}
            draggable="false"
            width="198"
            height="156"
            src={logoHand}
            alt="logo_hand"
          />
          <p className={s.content__text}>
            Who wants to be
            <br />a millionaire?
          </p>
        </div>
        <Link
          to="/game"
          className={`${s['content__link-button']} ${s['link-button']}`}
          onClick={onStartClicked}
        >
          Start
        </Link>
      </div>
      <div className={`${s.content} ${s.content_landscape}`}>
        <img
          className={`${s.content__logo} ${s.logo}`}
          draggable="false"
          width="198"
          height="156"
          src={logoHand}
          alt="logo_hand"
        />
        <div className={s['content__landscape-block']}>
          <p className={s.content__text}>
            Who wants to be
            <br />a millionaire?
          </p>
          <Link
            to="/game"
            className={`${s['content__link-button']} ${s['link-button']}`}
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
  loadError: state.loadError
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
