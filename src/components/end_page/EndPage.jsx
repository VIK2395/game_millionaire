import React from "react";
import {Link, Redirect} from "react-router-dom";
import logo_hand from "../../logo_hand.svg";
import "./EndPage.css";

const EndPage = (props) => {
	return (
		<div className="End-wrapper">
			<div className="End-content End-portrait-content">
				<div className="End-content__portrait-block">
					<img className="End-content__logo End-logo" draggable="false" width="198" height="156" src={logo_hand} alt="logo_hand" />
					<p className="End-content__text"><span className="End-content__text-span">Total score:</span><br/>$8,000 earned</p>
				</div>
				<Link to='/' className="End-content__link-button End-link-button">Try again</Link>
			</div>
			<div className="End-content End-landscape-content">
				<img className="End-content__logo End-logo" draggable="false" width="198" height="156" src={logo_hand} alt="logo_hand" />
				<div className="End-content__landscape-block">
					<p className="End-content__text"><span className="End-content__text-span">Total score:</span><br/>$8,000 earned</p>
					<Link to='/' className="End-content__link-button End-link-button">Try again</Link>
				</div>
			</div>
		</div>
	)
};

export default EndPage;
