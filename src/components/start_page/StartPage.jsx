import React from "react";
import {Link, Redirect} from "react-router-dom";
import logo_hand from "../../logo_hand.svg";
import s from "./StartPage.module.css";

const StartPage = (props) => {
	return (
		<div className={s.wrapper}>
			<div className={`${s.content} ${s['portrait-content']}`} >
				<div className={s['content__portrait-block']} >
					<img className={`${s.content__logo} ${s.logo}`} draggable="false" width="198" height="156" src={logo_hand}
						 alt="logo_hand" />
					<p className={s.content__text}>Who wants to be<br/>a millionaire?</p>
				</div>
				<Link to='/game' className={`${s['content__link-button']} ${s['link-button']}`} >Start</Link>
			</div>
			<div className={`${s.content} ${s['landscape-content']}`} >
				<img className={`${s.content__logo} ${s.logo}`} draggable="false" width="198" height="156" src={logo_hand}
					 alt="logo_hand" />
				<div className={s['content__landscape-block']} >
					<p className={s.content__text}>Who wants to be<br/>a millionaire?</p>
					<Link to='/game' className={`${s['content__link-button']} ${s['link-button']}`}>Start</Link>
				</div>
			</div>
		</div>
	)
};

export default StartPage;
