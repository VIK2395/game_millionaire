import React from 'react';
import { connect } from 'react-redux';
import ScoreCell from './ScoreCell';

const ScoreList = ({ scoreDashboard }) => (
  <ul className="score__list">
    {scoreDashboard.map((score) => (
      <ScoreCell key={score.value} score={score} />
    ))}
  </ul>
);

const mapStateToProps = ({ scoreDashboard }) => ({
  scoreDashboard,
});

export default connect(mapStateToProps)(ScoreList);
