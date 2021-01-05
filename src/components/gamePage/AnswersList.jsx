import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {scenario} from "../../store/gameActions";

const AnswersList = ({answers, scenario}) => {

    const renderAnswerCells = answers.map((answer, index) => {
        return (
            <li className="answer__cell" key={answer.answerId}>
                <svg
                    className={`answer-cell ${answer.isSelected ? "selected" : ""} ${answer.isDisabled ? "disabled" : ""} ${answer.isShown ? "correct" : ""}`}
                    width="320" height="56" viewBox="0 0 320 56" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path className="answer-cell__body" tabIndex="-1"
                          onClick={() => {
                              scenario(answer.answerId)
                          }}
                          d="M32.8175 5.31576C34.9762 2.29361 38.4615 0.5 42.1754 0.5H277.825C281.539 0.5 285.024 2.29361 287.183 5.31576L303.386 28L287.183 50.6842C285.024 53.7064 281.539 55.5 277.825 55.5H42.1754C38.4615 55.5 34.9762 53.7064 32.8175 50.6842L16.6145 28L32.8175 5.31576Z"
                          fill="white" stroke="#D0D0D8"/>
                    <path d="M0 28L17 28" stroke="#D0D0D8"/>
                    <path d="M303 28L320 28" stroke="#D0D0D8"/>
                    <g className="answer-cell__text">
                        <text className="answer-cell__letter" textAnchor="end" x="19%"
                              dominantBaseline="central" y="50%"
                              fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="20"
                              fill="#FF8B37" fontWeight="600">{String.fromCharCode(97 + index).toUpperCase()}
                        </text>
                        <text className="answer-cell__main-text" textAnchor="start" x="22%"
                              dominantBaseline="central" y="50%"
                              fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="20"
                              fill="#1C1C21" fontWeight="400">{answer.answerText}
                        </text>
                    </g>
                </svg>
            </li>
        )
    })

    return (
        <ul className="content__answers-list">
            {renderAnswerCells}
        </ul>
    )
};

const mapStateToProps = (state) => {
    return {
        answers: state.question.answers
    }
};

const mapDispatchToProps = (dispatch, {history}) => {
    return {
        scenario: (answerId) => dispatch(scenario(answerId, history))
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(AnswersList);
