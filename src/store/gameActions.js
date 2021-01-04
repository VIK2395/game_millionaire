import firebase from "../fbConfig/fbConfig";

export const SET_GAME_CONFIG_DATA = "SET_GAME_CONFIG_DATA";
export const TOGGLE_IS_LOADED = "TOGGLE_IS_LOADED";

export const INCREASE_SCORE = "INCREASE_SCORE";
export const SET_SCORE_QUESTION = "SET_SCORE_QUESTION";

export const SET_ANSWER = "SET_ANSWER";
export const SET_SELECTED_AND_DISABLED = "SET_SELECTED_AND_DISABLED";

export const SHOW_CORRECT_ANSWER = "SHOW_CORRECT_ANSWER";
export const SET_EARNED = "SET_EARNED";

export const UPDATE_SCORE_DASHBOARD = "UPDATE_SCORE_DASHBOARD";

export const RESET_SCORE = "RESET_SCORE";
export const RESET_EARNED = "RESET_EARNED";

/*redirect*/

export const DISABLE_IS_INIT_LOAD = "DISABLE_IS_INIT_LOAD";
export const SET_IS_IN_GAME = "SET_IS_IN_GAME";
export const SET_IS_IN_GAME_END = "SET_IS_IN_GAME_END";

export const setIsInGameEnd = (to) => {
    return {
        type: SET_IS_IN_GAME_END,
        payload: to
    }
}

export const setIsInGame = (to) => {
    return {
        type: SET_IS_IN_GAME,
        payload: to
    }
}

export const disableIsInitLoad = () => {
    return {
        type: DISABLE_IS_INIT_LOAD
    }
};

export const fetchGameConfigData = () => {
    return (dispatch) => {
        const firestore = firebase.firestore();

        const docRef = firestore.collection("gameConfigData").doc("docConfig");

        docRef.get().then(doc => {
            if (doc.exists) {
                return JSON.parse(doc.data().config);
            } else {
                console.log("No docConfig file in DataBase!")
            }
        }).then(gameConfigData => {
            dispatch(setGameConfigData(gameConfigData));
            dispatch(toggleIsLoaded());
            }
        ).catch(error => {
            console.log("Back-end database request error: ", error)
        });
    }
};

export const setGameConfigData = (data) => {
    return {
        type: SET_GAME_CONFIG_DATA,
        payload: data
    }
};

export const toggleIsLoaded = () => {
    return {
        type: TOGGLE_IS_LOADED
    }
};

export const increaseScore = () => {
    return {
        type: INCREASE_SCORE
    }
};

export const setScoreQuestion = () => {
    return {
        type: SET_SCORE_QUESTION
    }
};

export const setAnswer = (answerId) => {
    return {
        type: SET_ANSWER,
        payload: answerId
    }
};

export const setSelectedAndDisabled = () => {
    return {
        type: SET_SELECTED_AND_DISABLED
    }
};

export const showCorrectAnswer = () => {
    return {
        type: SHOW_CORRECT_ANSWER
    }
};

export const setEarned = (value) => {
    return {
        type: SET_EARNED,
        payload: value
    }
}

export const updateScoreDashboard = () => {
    return {
        type: UPDATE_SCORE_DASHBOARD
    }
};

export const resetScore = () => {
    return {
        type: RESET_SCORE
    }
};

export const resetEarned = () => {
    return {
        type: RESET_EARNED
    }
}

export const scenario = (answerId, history) => {
    return (dispatch, getState) => {
        dispatch(setAnswer(answerId));
        dispatch(setSelectedAndDisabled());
        setTimeout(() => {
            const state = getState();
            if (state.answer.isCorrect) {
                dispatch(showCorrectAnswer());
                dispatch(setEarned(state.score));
                setTimeout(() => {
                    if (state.score === 1000000) {
                        history.push("/gameover");
                        dispatch(setIsInGame(false));
                        dispatch(setIsInGameEnd(true))
                    } else {
                        dispatch(increaseScore());
                        dispatch(setScoreQuestion());
                        dispatch(updateScoreDashboard());
                    }
                },2000)
            } else {
                dispatch(showCorrectAnswer());
                setTimeout(() => {
                    history.push("/gameover");
                    dispatch(setIsInGame(false));
                    dispatch(setIsInGameEnd(true))
                }, 3000)
            }
        }, 800);
    }
};
