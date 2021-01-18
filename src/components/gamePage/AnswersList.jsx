import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { checkAnswer } from '../../redux/gameActions';
import AnswerCell from './AnswerCell';

const AnswersList = ({ answers, checkAnswer }) => (
  <div className="content__answers">
    <ul className="content__answers-list">
      {answers.map((answer, index) => (
        <AnswerCell key={answer.answerId} answer={answer} index={index} checkAnswer={checkAnswer} />
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state) => ({
  answers: state.question.answers,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  checkAnswer: (answerId) => dispatch(checkAnswer(answerId, history)),
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(AnswersList);
