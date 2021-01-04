import {
    INCREASE_SCORE,
    SET_SCORE_QUESTION,
    SET_ANSWER,
    SET_SELECTED_AND_DISABLED,
    UPDATE_SCORE_DASHBOARD,
    SHOW_CORRECT_ANSWER,
    RESET_SCORE,
    SET_EARNED,
    RESET_EARNED,
    SET_GAME_CONFIG_DATA,
    TOGGLE_IS_LOADED,
    DISABLE_IS_INIT_LOAD,
    SET_IS_IN_GAME,
    SET_IS_IN_GAME_END
} from "./gameActions";


const initState = {
    isInitLoad: true,
    isLoaded: false,
    isInGame: false,//!!!!!!
    isInGameEnd: false,
    score: 500,//null
    earned: 0,//null
    answer: {
        answerId: null,
        answerText: null,
        isCorrect: null
    },
    question: {//null
        questionText: "Just init question. Dude, don't you know what you do?",
        answers: [
            {
                answerId: "sfjhk",
                answerText: "Just init answer_01",
                isCorrect: true
            },
            {
                answerId: "sdjfhkkj",
                answerText: "Just init answer_02",
                isCorrect: false
            },
            {
                answerId: "sduhkuhk",
                answerText: "Just init answer_03",
                isCorrect: false
            },
            {
                answerId: "sdfkhhk",
                answerText: "Just init answer_04",
                isCorrect: false
            }
        ]
    },
    scoreDashboard: [
        {
            value: 1000000
        },
        {
            value: 500000
        },
        {
            value: 250000
        },
        {
            value: 125000
        },
        {
            value: 64000
        },
        {
            value: 32000
        },
        {
            value: 16000
        },
        {
            value: 8000
        },
        {
            value: 4000
        },
        {
            value: 2000
        },
        {
            value: 1000
        },
        {
            value: 500,
            isActive: true,
            isPassed: false
        }
    ],

    gameConfigData: null
}

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_GAME_CONFIG_DATA:
            return {
                ...state,
                gameConfigData: action.payload
            };
        case TOGGLE_IS_LOADED:
            return {
                ...state,
                isLoaded: true
            }
        case INCREASE_SCORE:
            return {
                ...state,
                score: state.scoreDashboard[state.scoreDashboard.findIndex(score => score.value === state.score) - 1].value
            };
        case SET_SCORE_QUESTION:
            return {
                ...state,
                question: state.gameConfigData.find(question => question.questionScore === state.score).question
            };
        case SET_ANSWER:
            return {
                ...state,
                answer: state.question.answers.find(answer => answer.answerId === action.payload)
            };
        case SET_SELECTED_AND_DISABLED:
            return {
                ...state,
                question: {
                    ...state.question,
                    answers: state.question.answers.map(answer => {
                        if (answer.answerId === state.answer.answerId) {
                            return {
                                ...answer,
                                isSelected: true,
                                isDisabled: true
                            }
                        }
                        return {
                            ...answer,
                            isDisabled: true
                        }
                    })
                }
            };
        case SHOW_CORRECT_ANSWER:
            return {
                ...state,
                question: {
                    ...state.question,
                    answers: state.question.answers.map(answer => {
                        if (answer.isCorrect) {
                            return {
                                ...answer,
                                isShown: true
                            }
                        }
                        return answer
                    })
                }
            };
        case SET_EARNED:
            return {
                ...state,
                earned: action.payload
            };
        case UPDATE_SCORE_DASHBOARD:
            return {
                ...state,
                scoreDashboard: state.scoreDashboard.map(score => {
                    if (score.value < state.score) {
                        return {
                            ...score,
                            isActive: false,
                            isPassed: true
                        }
                    }
                    if (score.value === state.score) {
                        return {
                            ...score,
                            isActive: true,
                            isPassed: false
                        }
                    }
                    return {
                        ...score,
                        isActive: false,
                        isPassed: false
                    }
                })
            };
        case RESET_SCORE:
            return {
                ...state,
                score: 500
            };
        case RESET_EARNED:
            return {
                ...state,
                earned: 0
            };
        case DISABLE_IS_INIT_LOAD:
            return {
                ...state,
                isInitLoad: false
            };
        case SET_IS_IN_GAME:
            return {
                ...state,
                isInGame: action.payload
            };
        case SET_IS_IN_GAME_END:
            return {
                ...state,
                isInGameEnd: action.payload
            }
        default:
            return state;
    }
};

export default gameReducer;
