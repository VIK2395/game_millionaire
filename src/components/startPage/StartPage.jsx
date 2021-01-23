import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import logoHand from '../../assets/logoHand.svg';
import style from './StartPage.module.css';
import {
  setIsInitLoad,
  resetGameData,
  setIsInGame,
  setIsInGameEnd,
  setIsInGameStart,
} from '../../redux/gameActions';

import ErrorMessage from '../common/errorMessage/ErrorMessage';

const StartPage = ({
  isInGame,
  isInGameEnd,
  loadError,
  setIsInitLoad,
  resetGameData,
  setIsInGame,
  setIsInGameEnd,
  setIsInGameStart,
}) => {
  useEffect(() => {
    setIsInitLoad(false);
  }, [setIsInitLoad]); // runs only first time

  const onStartClicked = () => {
    resetGameData();
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
            Хто хоче стати
            <br />
            мільйонером?
          </p>
        </div>
        <Link
          to="/game"
          className={`${style['content__link-button']} ${style['link-button']}`}
          onClick={onStartClicked}
        >
          Старт
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
            Хто хоче стати
            <br />
            мільйонером?
          </p>
          <Link
            to="/game"
            className={`${style['content__link-button']} ${style['link-button']}`}
            onClick={onStartClicked}
          >
            Старт
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isInGame: state.redirect.isInGame,
  isInGameEnd: state.redirect.isInGameEnd,
  loadError: state.loadError,
});

export default connect(mapStateToProps, {
  setIsInitLoad,
  resetGameData,
  setIsInGame,
  setIsInGameEnd,
  setIsInGameStart,
})(StartPage);
