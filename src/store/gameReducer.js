import {
  DISABLE_IS_INIT_LOAD,
  FORM_GAME_QUESTIONS,
  INCREASE_SCORE,
  RESET_EARNED,
  RESET_SCORE,
  SET_ANSWER,
  SET_EARNED,
  SET_GAME_CONFIG_DATA,
  SET_IS_IN_GAME,
  SET_IS_IN_GAME_END,
  SET_SCORE_QUESTION,
  SET_SELECTED_AND_DISABLED,
  SHOW_CORRECT_ANSWER,
  TOGGLE_IS_LOADED,
  UPDATE_SCORE_DASHBOARD,
} from "./gameActions"

const initState = {
  isInitLoad: true,
  isLoaded: false,
  isInGame: false,
  isInGameEnd: false,
  score: 500, // null
  earned: 0, // null
  answer: {
    answerId: null,
    answerText: null,
    isCorrect: null,
  },
  question: {
    // null
    questionText: "Just init question. Dude, don't you know what you do?",
    answers: [
      {
        answerId: "sfjhk",
        answerText: "Just init answer_01",
        isCorrect: true,
      },
      {
        answerId: "sdjfhkkj",
        answerText: "Just init answer_02",
        isCorrect: false,
      },
      {
        answerId: "sduhkuhk",
        answerText: "Just init answer_03",
        isCorrect: false,
      },
      {
        answerId: "sdfkhhk",
        answerText: "Just init answer_04",
        isCorrect: false,
      },
    ],
  },
  scoreDashboard: [
    {
      value: 1000000,
    },
    {
      value: 500000,
    },
    {
      value: 250000,
    },
    {
      value: 125000,
    },
    {
      value: 64000,
    },
    {
      value: 32000,
    },
    {
      value: 16000,
    },
    {
      value: 8000,
    },
    {
      value: 4000,
    },
    {
      value: 2000,
    },
    {
      value: 1000,
    },
    {
      value: 500,
      isActive: true,
      isPassed: false,
    },
  ],

  gameQuestions: null,

  gameConfigData: null,
}

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_GAME_CONFIG_DATA:
      return {
        ...state,
        gameConfigData: action.payload,
      }
    case TOGGLE_IS_LOADED:
      return {
        ...state,
        isLoaded: true,
      }
    case FORM_GAME_QUESTIONS:
      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[array[i], array[j]] = [array[j], array[i]]
        }
      }

      return {
        ...state,
        gameQuestions: state.gameConfigData.map((questionPackage) => {
          const randomIndex = Math.floor(
            Math.random() * questionPackage.questions.length
          )
          const question = questionPackage.questions[randomIndex]
          const deepCopyOfQuestion = {
            questionText: question.questionText,
            answers: question.answers.map((answer) => ({
              ...answer,
            })),
          }
          shuffle(deepCopyOfQuestion.answers)
          return {
            questionScore: questionPackage.questionScore,
            question: deepCopyOfQuestion,
          }
        }),
      }
    case INCREASE_SCORE:
      return {
        ...state,
        score:
          state.scoreDashboard[
            state.scoreDashboard.findIndex(
              (score) => score.value === state.score
            ) - 1
          ].value,
      }
    case SET_SCORE_QUESTION:
      return {
        ...state,
        question: state.gameQuestions.find(
          (question) => question.questionScore === state.score
        ).question,
      }
    case SET_ANSWER:
      return {
        ...state,
        answer: state.question.answers.find(
          (answer) => answer.answerId === action.payload
        ),
      }
    case SET_SELECTED_AND_DISABLED:
      return {
        ...state,
        question: {
          ...state.question,
          answers: state.question.answers.map((answer) => {
            if (answer.answerId === state.answer.answerId) {
              return {
                ...answer,
                isSelected: true,
                isDisabled: true,
              }
            }
            return {
              ...answer,
              isDisabled: true,
            }
          }),
        },
      }
    case SHOW_CORRECT_ANSWER:
      return {
        ...state,
        question: {
          ...state.question,
          answers: state.question.answers.map((answer) => {
            if (answer.isCorrect) {
              return {
                ...answer,
                isShown: true,
              }
            }
            return answer
          }),
        },
      }
    case SET_EARNED:
      return {
        ...state,
        earned: action.payload,
      }
    case UPDATE_SCORE_DASHBOARD:
      return {
        ...state,
        scoreDashboard: state.scoreDashboard.map((score) => {
          if (score.value < state.score) {
            return {
              ...score,
              isActive: false,
              isPassed: true,
            }
          }
          if (score.value === state.score) {
            return {
              ...score,
              isActive: true,
              isPassed: false,
            }
          }
          return {
            ...score,
            isActive: false,
            isPassed: false,
          }
        }),
      }
    case RESET_SCORE:
      return {
        ...state,
        score: 500,
      }
    case RESET_EARNED:
      return {
        ...state,
        earned: 0,
      }
    case DISABLE_IS_INIT_LOAD:
      return {
        ...state,
        isInitLoad: false,
      }
    case SET_IS_IN_GAME:
      return {
        ...state,
        isInGame: action.payload,
      }
    case SET_IS_IN_GAME_END:
      return {
        ...state,
        isInGameEnd: action.payload,
      }
    default:
      return state
  }
}

export default gameReducer
