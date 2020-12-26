import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import "./GamePage.css";
import AnswerCell from "./AnswerCell";
import ScoreCell from "./ScoreCell";

const GamePage = (props) => {

	const [isActive, setActiveClass] = useState(false);

	const toggleActiveClass = () => {
		setActiveClass(isActive => !isActive);
	}

	return (
		<div className="wrapper">

			<header className="header">
				<div className={`header__burger burger ${isActive ? "active" : null}`} onClick={toggleActiveClass}>
					<div className="burger__body">
						<span className="burger__central-line"></span>
					</div>
				</div>
			</header>

			<section className="content">
				<div className="content__question">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo minima rem unde tenetur maiores
						quaerat libero ratione, hic quod!</p>
				</div>
				<div className="content__answers">
					<ul className="content__answers-list">
						<li className="answer__cell">
							<AnswerCell cell_state={null}
										cell_letter={"A"}
										cell_answer={"Posible_answer_01"}
							/>
						</li>
						<li className="answer__cell">
							<AnswerCell cell_state={"selected"}
										cell_letter={"B"}
										cell_answer={"Posible_answer_02"}
							/>
						</li>
						<li className="answer__cell">
							<AnswerCell cell_state={"correct"}
										cell_letter={"C"}
										cell_answer={"Posible_answer_03"}
							/>
						</li>
						<li className="answer__cell">
							<AnswerCell cell_state={"wrong"}
										cell_letter={"D"}
										cell_answer={"Posible_answer_04"}
							/>
						</li>
					</ul>
				</div>
			</section>

			<section className={`score ${isActive ? "active" : null}`} >
				<ul className="score__list">
					<li className="score__cell">
						<ScoreCell cell_state={null}
									cell_value={"$1,000,000"}
						/>
					</li>
					<li className="score__cell">
						<ScoreCell cell_state={null}
								   cell_value={"$500,000"}
						/>
					</li>
					<li className="score__cell">
						<ScoreCell cell_state={null}
								   cell_value={"$250,000"}
						/>
					</li>
					<li className="score__cell">
						<ScoreCell cell_state={null}
								   cell_value={"$125,000"}
						/>
					</li>
					<li className="score__cell">
						<ScoreCell cell_state={null}
								   cell_value={"$64,000"}
						/>
					</li>
					<li className="score__cell">
						<ScoreCell cell_state={null}
								   cell_value={"$32,000"}
						/>
					</li>
					<li className="score__cell">
						<ScoreCell cell_state={"active"}
								   cell_value={"$16,000"}
						/>
					</li>
					<li className="score__cell">
						<ScoreCell cell_state={"passed"}
								   cell_value={"$8,000"}
						/>
					</li>
					<li className="score__cell">
						<ScoreCell cell_state={"passed"}
								   cell_value={"$4,000"}
						/>
					</li>
					<li className="score__cell">
						<ScoreCell cell_state={"passed"}
								   cell_value={"$2,000"}
						/>
					</li>
					<li className="score__cell">
						<ScoreCell cell_state={"passed"}
								   cell_value={"$1,000"}
						/>
					</li>
					<li className="score__cell">
						<ScoreCell cell_state={"passed"}
								   cell_value={"$500"}
						/>
					</li>
				</ul>
			</section>

		</div>
	)
}

export default GamePage;
