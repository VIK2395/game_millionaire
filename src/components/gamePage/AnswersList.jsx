import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { checkAnswerAndOn } from '../../redux/gameActions';
import AnswerCell from './AnswerCell';

const AnswersList = ({ setIsDisabled, answers, checkAnswerAndOn, isCorrectAnswerShown }) => {
  useEffect(() => {
    setIsDisabled(false);
  }, [answers, setIsDisabled]);

  return (
    <ul className="content__answers-list">
      {answers.map((answer, index) => (
        <AnswerCell
          key={answer.answerId}
          index={index}
          answer={answer}
          isCorrectAndShown={answer.isCorrect && isCorrectAnswerShown}
          setIsDisabled={setIsDisabled}
          checkAnswerAndOn={checkAnswerAndOn}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  answers: state.question.answers,
  isCorrectAnswerShown: state.question.isCorrectAnswerShown,
});

export default connect(mapStateToProps, { checkAnswerAndOn })(React.memo(AnswersList));
