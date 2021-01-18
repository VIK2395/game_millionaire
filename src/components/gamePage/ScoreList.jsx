import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ScoreCell from './ScoreCell';

const ScoreList = ({ scoreDashboard, score }) => {
  const formInitialLocalState = () =>
    scoreDashboard.map((scoreValue, index) => {
      if (index === scoreDashboard.length - 1) {
        return { value: scoreValue, isActive: true, isPassed: false };
      }
      return { value: scoreValue, isActive: false, isPassed: false };
    });

  const [localState, setLocalState] = useState(() => formInitialLocalState());

  /*  console.log('score: ', score);
  console.log('scoreDashboard: ', scoreDashboard);
  console.log('localScore: ', localState); */

  useEffect(() => {
    const updatedLocalState = localState.map((item) => {
      if (item.value < score) {
        return {
          ...item,
          isActive: false,
          isPassed: true,
        };
      }
      if (item.value === score) {
        return {
          ...item,
          isActive: true,
          isPassed: false,
        };
      }
      return {
        ...item,
        isActive: false,
        isPassed: false,
      };
    });
    setLocalState(updatedLocalState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  return (
    <ul className="score__list">
      {localState.map((score) => (
        <ScoreCell key={score.value} score={score} />
      ))}
    </ul>
  );
};

const mapStateToProps = ({ scoreDashboard, score }) => ({
  scoreDashboard,
  score,
});

export default connect(mapStateToProps)(ScoreList);
