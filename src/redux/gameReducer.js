import {
  SET_IS_INIT_LOAD,
  FORM_GAME_QUESTIONS,
  INCREASE_SCORE,
  RESET_EARNED,
  RESET_SCORE,
  SET_ANSWER,
  SET_EARNED,
  SET_GAME_CONFIG_DATA,
  SET_IS_IN_GAME,
  SET_IS_IN_GAME_END,
  SET_IS_IN_GAME_START,
  SET_LOAD_ERROR,
  SET_SCORE_QUESTION,
  SET_SELECTED_AND_DISABLED,
  SHOW_CORRECT_ANSWER,
  SET_IS_LOADED,
  UPDATE_SCORE_DASHBOARD,
} from './actionTypes';

import shuffle from '../utils/shuffle';

const initState = {
  isInitLoad: true,
  isGameConfigDataLoaded: false,
  loadError: {},
  isInGameStart: true,
  isInGame: false,
  isInGameEnd: false,
  score: 500,
  earned: 0,
  answer: {
    answerId: 'string',
    answerText: 'string',
    isCorrect: false,
  },
  question: {
    questionText: "Just init question. Dude, don't you know what you do?",
    answers: [
      {
        answerId: 'sfjhk',
        answerText: 'Just init answer_01',
        isCorrect: true,
        isSelected: false,
        isDisabled: false,
        isShown: false,
      },
      {
        answerId: 'sdjfhkkj',
        answerText: 'Just init answer_02',
        isCorrect: false,
        isSelected: false,
        isDisabled: false,
        // isShown?: false,
      },
      {
        answerId: 'sduhkuhk',
        answerText: 'Just init answer_03',
        isCorrect: false,
        isSelected: false,
        isDisabled: false,
        // isShown: false,
      },
      {
        answerId: 'sdfkhhk',
        answerText: 'Just init answer_04',
        isCorrect: false,
        isSelected: false,
        isDisabled: false,
        // isShown: false,
      },
    ],
  },
  scoreDashboard: [
    {
      value: 1000000,
      isActive: false,
      isPassed: false,
    },
    {
      value: 500000,
      isActive: false,
      isPassed: false,
    },
    {
      value: 250000,
      isActive: false,
      isPassed: false,
    },
    {
      value: 125000,
      isActive: false,
      isPassed: false,
    },
    {
      value: 64000,
      isActive: false,
      isPassed: false,
    },
    {
      value: 32000,
      isActive: false,
      isPassed: false,
    },
    {
      value: 16000,
      isActive: false,
      isPassed: false,
    },
    {
      value: 8000,
      isActive: false,
      isPassed: false,
    },
    {
      value: 4000,
      isActive: false,
      isPassed: false,
    },
    {
      value: 2000,
      isActive: false,
      isPassed: false,
    },
    {
      value: 1000,
      isActive: false,
      isPassed: false,
    },
    {
      value: 500,
      isActive: true,
      isPassed: false,
    },
  ],

  gameQuestions: [],

  gameConfigData: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_GAME_CONFIG_DATA:
      return {
        ...state,
        gameConfigData: action.payload,
      };
    case FORM_GAME_QUESTIONS:
      return {
        ...state,
        gameQuestions: state.gameConfigData.map((questionPackage) => {
          const randomIndex = Math.floor(Math.random() * questionPackage.questions.length);
          const question = questionPackage.questions[randomIndex];
          const deepCopyOfQuestion = {
            questionText: question.questionText,
            answers: question.answers.map((answer) => ({
              ...answer,
            })),
          };
          shuffle(deepCopyOfQuestion.answers);
          return {
            questionScore: questionPackage.questionScore,
            question: deepCopyOfQuestion,
          };
        }),
      };
    case SET_IS_LOADED:
      return {
        ...state,
        isGameConfigDataLoaded: true,
      };
    case INCREASE_SCORE: {
      const scoreIndex = state.scoreDashboard.findIndex((score) => score.value === state.score);
      const nextScoreIndex = scoreIndex - 1;
      const nextScoreValue = state.scoreDashboard[nextScoreIndex].value;
      return {
        ...state,
        score: nextScoreValue,
      };
    }
    case SET_SCORE_QUESTION: {
      const { question } = state.gameQuestions.find(
        (question) => question.questionScore === state.score
      );
      return {
        ...state,
        question,
      };
    }
    case SET_ANSWER: {
      const answer = state.question.answers.find((answer) => answer.answerId === action.payload);
      return {
        ...state,
        answer,
      };
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
              };
            }
            return {
              ...answer,
              isDisabled: true,
            };
          }),
        },
      };
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
              };
            }
            return answer;
          }),
        },
      };
    case SET_EARNED:
      return {
        ...state,
        earned: action.payload,
      };
    case UPDATE_SCORE_DASHBOARD:
      return {
        ...state,
        scoreDashboard: state.scoreDashboard.map((score) => {
          if (score.value < state.score) {
            return {
              ...score,
              isActive: false,
              isPassed: true,
            };
          }
          if (score.value === state.score) {
            return {
              ...score,
              isActive: true,
              isPassed: false,
            };
          }
          return {
            ...score,
            isActive: false,
            isPassed: false,
          };
        }),
      };
    case RESET_SCORE:
      return {
        ...state,
        score: 500,
      };
    case RESET_EARNED:
      return {
        ...state,
        earned: 0,
      };
    case SET_IS_INIT_LOAD:
      return {
        ...state,
        isInitLoad: action.payload,
      };
    case SET_IS_IN_GAME:
      return {
        ...state,
        isInGame: action.payload,
      };
    case SET_IS_IN_GAME_END:
      return {
        ...state,
        isInGameEnd: action.payload,
      };
    case SET_IS_IN_GAME_START:
      return {
        ...state,
        isInGameStart: action.payload,
      };
    case SET_LOAD_ERROR:
      return {
        ...state,
        loadError: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
