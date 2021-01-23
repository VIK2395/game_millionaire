import React from 'react';
import { connect } from 'react-redux';
import ScoreCell from './ScoreCell';

const ScoreList = ({ scoreDashboard, score }) => (
  <ul className="score__list">
    {scoreDashboard.map((cellValue) => (
      <ScoreCell
        key={cellValue}
        value={cellValue}
        isActive={cellValue === score}
        isPassed={cellValue < score}
      />
    ))}
  </ul>
);

const mapStateToProps = ({ scoreDashboard, score }) => ({
  scoreDashboard,
  score,
});

export default connect(mapStateToProps)(React.memo(ScoreList));
