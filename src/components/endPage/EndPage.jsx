import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import logoHand from '../../assets/logoHand.svg';
import style from './EndPage.module.css';
import { setIsInGameStart, setIsInGameEnd } from '../../redux/gameActions';

const EndPage = ({
  earned,
  isInitLoad,
  isInGameStart,
  isInGame,
  setIsInGameStart,
  setIsInGameEnd,
}) => {
  if (isInitLoad || isInGameStart) return <Redirect to="/" />;

  if (isInGame) return <Redirect to="/game" />;

  const onTryAgainClicked = () => {
    setIsInGameStart(true);
    setIsInGameEnd(false);
  };

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
            <span className={style['content__text-span']}>Загальний рахунок:</span>
            <br />
            {`$${earned.toLocaleString('en-US')} зароблено`}
          </p>
        </div>
        <Link
          to="/"
          className={`${style['content__link-button']} ${style['link-button']}`}
          onClick={onTryAgainClicked}
        >
          Спробувати ще раз
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
            <span className={style['content__text-span']}>Загальний рахунок:</span>
            <br />
            {`$${earned.toLocaleString('en-US')} зароблено`}
          </p>
          <Link
            to="/"
            className={`${style['content__link-button']} ${style['link-button']}`}
            onClick={onTryAgainClicked}
          >
            Спробувати ще раз
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  earned: state.earned,
  isInitLoad: state.redirect.isInitLoad,
  isInGameStart: state.redirect.isInGameStart,
  isInGame: state.redirect.isInGame,
});

export default connect(mapStateToProps, {
  setIsInGameStart,
  setIsInGameEnd,
})(EndPage);
