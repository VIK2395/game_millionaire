import React from "react";
import {Link, Redirect} from "react-router-dom";
import logo_hand from "../../logo_hand.svg";
import s from "./StartPage.module.css";
import {connect} from "react-redux";
import {
	resetEarned,
	resetScore,
	setScoreQuestion,
	disableIsInitLoad,
	updateScoreDashboard,
	setIsInGame,
	setIsInGameEnd
} from "../../store/gameActions";

const StartPage = ({resetEarned, resetScore, setScoreQuestion, updateScoreDashboard, disableIsInitLoad, setIsInGame, isInGame, setIsInGameEnd}) => {

	const onStartClicked = () => {
		disableIsInitLoad();
		resetScore();
		setScoreQuestion();
		updateScoreDashboard();
		resetEarned();
		setIsInGame(true);
		setIsInGameEnd(false);
	}

	if (isInGame) return <Redirect to="/game" />

	return (
		<div className={s.wrapper}>
			<div className={`${s.content} ${s.content_portrait}`} >
				<div className={s['content__portrait-block']} >
					<img className={`${s.content__logo} ${s.logo}`} draggable="false" width="198" height="156" src={logo_hand}
						 alt="logo_hand" />
					<p className={s.content__text}>Who wants to be<br/>a millionaire?</p>
				</div>
				<Link to='/game' className={`${s['content__link-button']} ${s['link-button']}`} onClick={onStartClicked}>Start</Link>
			</div>
			<div className={`${s.content} ${s.content_landscape}`} >
				<img className={`${s.content__logo} ${s.logo}`} draggable="false" width="198" height="156" src={logo_hand}
					 alt="logo_hand" />
				<div className={s['content__landscape-block']} >
					<p className={s.content__text}>Who wants to be<br/>a millionaire?</p>
					<Link to='/game' className={`${s['content__link-button']} ${s['link-button']}`} onClick={onStartClicked}>Start</Link>
				</div>
			</div>
		</div>
	)
};

const mapStateToProps = (state) => {
	return {
		isInGame: state.isInGame
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		disableIsInitLoad: () => dispatch(disableIsInitLoad()),
		resetScore: () => dispatch(resetScore()),
		setScoreQuestion: () => dispatch(setScoreQuestion()),
		updateScoreDashboard: () => dispatch(updateScoreDashboard()),
		resetEarned: () => dispatch(resetEarned()),
		setIsInGame: (to) => dispatch(setIsInGame(to)),
		setIsInGameEnd: (to) => dispatch(setIsInGameEnd(to))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
