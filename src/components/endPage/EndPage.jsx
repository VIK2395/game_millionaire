import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import logoHand from '../../assets/logoHand.svg';
import './EndPage.css';
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

  const handleClick = () => {
    setIsInGameStart(true);
    setIsInGameEnd(false);
  };

  return (
    <div className="End-wrapper">
      <div className="End-content End-content_portrait">
        <div className="End-content__portrait-block">
          <img
            className="End-content__logo End-logo"
            draggable="false"
            width="198"
            height="156"
            src={logoHand}
            alt="logo_hand"
          />
          <p className="End-content__text">
            <span className="End-content__text-span">Total score:</span>
            <br />
            {`$${earned.toLocaleString('en-US')} earned`}
          </p>
        </div>
        <Link to="/" className="End-content__link-button End-link-button" onClick={handleClick}>
          Try again
        </Link>
      </div>
      <div className="End-content End-content_landscape">
        <img
          className="End-content__logo End-logo"
          draggable="false"
          width="198"
          height="156"
          src={logoHand}
          alt="logo_hand"
        />
        <div className="End-content__landscape-block">
          <p className="End-content__text">
            <span className="End-content__text-span">Total score:</span>
            <br />
            {`$${earned.toLocaleString('en-US')} earned`}
          </p>
          <Link to="/" className="End-content__link-button End-link-button" onClick={handleClick}>
            Try again
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  earned: state.earned,
  isInitLoad: state.isInitLoad,
  isInGameStart: state.isInGameStart,
  isInGame: state.isInGame,
});

const mapDispatchToProps = (dispatch) => ({
  setIsInGameStart: (to) => dispatch(setIsInGameStart(to)),
  setIsInGameEnd: (to) => dispatch(setIsInGameEnd(to)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EndPage);
