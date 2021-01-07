import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import logoHand from '../../logoHand.svg';
import './EndPage.css';

const EndPage = ({ earned, isInitLoad, isInGame }) => {
  if (isInitLoad) return <Redirect to="/" />;

  if (isInGame) return <Redirect to="/game" />;

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
        <Link to="/" className="End-content__link-button End-link-button">
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
          <Link to="/" className="End-content__link-button End-link-button">
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
  isInGame: state.isInGame,
});

export default connect(mapStateToProps)(EndPage);
