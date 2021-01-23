import firebase from '../firebaseConfig/firebaseConfig';

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
  SET_IS_LOADING_GAME_CONFIG_DATA,
  SET_IS_CORRECT_ANSWER_SHOWN,
} from './actionTypes';

export const setLoadError = (error) => ({
  type: SET_LOAD_ERROR,
  payload: error,
});

export const setIsInGame = (to) => ({
  type: SET_IS_IN_GAME,
  payload: to,
});

export const setIsInGameEnd = (to) => ({
  type: SET_IS_IN_GAME_END,
  payload: to,
});

export const setIsInGameStart = (to) => ({
  type: SET_IS_IN_GAME_START,
  payload: to,
});

export const setIsInitLoad = (to) => ({
  type: SET_IS_INIT_LOAD,
  payload: to,
});

export const setGameConfigData = (data) => ({
  type: SET_GAME_CONFIG_DATA,
  payload: data,
});

export const setIsLoadingGameConfigData = (to) => ({
  type: SET_IS_LOADING_GAME_CONFIG_DATA,
  payload: to,
});

export const fetchGameConfigData = () => (dispatch) => {
  const firestore = firebase.firestore();

  const docRef = firestore.collection('gameConfigData').doc('docConfig');

  docRef
    .get()
    .then((doc) => {
      try {
        if (!doc.exists)
          throw new Error(
            "Oops! No 'docConfig' document in the database 'gameConfigData' collection!"
          );
        if (!doc.data().config)
          throw new Error("Oops! No 'config' field in the 'docConfig' document of the database!");
        return JSON.parse(doc.data().config);
        // return JSON.parse("{ bad json o_O }");
      } catch (error) {
        if (error.name === 'SyntaxError') {
          throw new Error("Oops! Game JSON 'config' badly formated. Please check the file!");
        } else {
          throw error;
        }
      }
    })
    .then((gameConfigData) => {
      dispatch(setGameConfigData(gameConfigData));
    })
    .finally(() => {
      dispatch(setIsLoadingGameConfigData(false));
    })
    .catch((error) => {
      dispatch(setLoadError(error));
    });
};

export const formGameQuestions = () => ({
  type: FORM_GAME_QUESTIONS,
});

export const increaseScore = () => ({
  type: INCREASE_SCORE,
});

export const setScoreQuestion = () => ({
  type: SET_SCORE_QUESTION,
});

export const setAnswer = (answerId) => ({
  type: SET_ANSWER,
  payload: answerId,
});

export const setEarned = (value) => ({
  type: SET_EARNED,
  payload: value,
});

export const resetScore = () => ({
  type: RESET_SCORE,
});

export const resetEarned = () => ({
  type: RESET_EARNED,
});

export const setIsCorrectAnswerShown = (to) => ({
  type: SET_IS_CORRECT_ANSWER_SHOWN,
  payload: to,
});

export const checkAnswerAndOn = (answerId) => (dispatch, getState) => {
  dispatch(setAnswer(answerId));
  setTimeout(() => {
    dispatch(setIsCorrectAnswerShown(true));
    const state = getState();
    if (state.answer.isCorrect) {
      dispatch(setEarned(state.score));
      setTimeout(() => {
        if (state.score !== state.scoreDashboard[0]) {
          dispatch(increaseScore());
          dispatch(setScoreQuestion());
        } else {
          dispatch(setIsInGame(false));
          dispatch(setIsInGameEnd(true));
        }
      }, 2000);
    } else {
      setTimeout(() => {
        dispatch(setIsInGame(false));
        dispatch(setIsInGameEnd(true));
      }, 3000);
    }
  }, 800);
};

export const resetGameData = () => (dispatch) => {
  dispatch(formGameQuestions());
  dispatch(resetScore());
  dispatch(setScoreQuestion());
  dispatch(resetEarned());
};
