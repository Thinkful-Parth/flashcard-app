import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import CreateCardBtn from "../Cards/components/CreateCardBtn";

function Study({ cards, deckId }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const [flip, setFlip] = useState(false);
	const history = useHistory();
	const handleNext = () => {
		if (currentIndex === cards.length - 1) {
			const result = window.confirm(
				"Restart cards? \n\nClick 'Cancel' to return to the home page."
			);
			if (result) {
				history.go(0);
			} else {
				history.push("/");
			}
		}
		setCurrentIndex((current) => Math.min(cards.length - 1, current + 1));
		setFlip(!flip);
	};

	return (
		<>
			{cards.length <= 2 ? (
				<div className="container">
					<div className="row">
						<h3>Not Enough Cards</h3>
					</div>
					<div className="row">
						<h5>
							You need at least 2 cards to study. There are {cards.length} cards
							in this deck.
						</h5>
					</div>
					<div className="row">
						<CreateCardBtn deckId={deckId} />
					</div>
				</div>
			) : (
				<div className="card border border-primary mb-5">
					<div className="card-body">
						<h5 className="card-title">
							Card {currentIndex + 1} of {cards.length}
						</h5>
						<p className="card-text">
							{flip ? cards[currentIndex].back : cards[currentIndex].front}
						</p>
						<button
							type="button"
							className="btn btn-dark mr-2"
							onClick={() => {
								setFlip(!flip);
							}}
						>
							Flip
						</button>
						{flip && (
							<button
								type="button"
								className="btn btn-primary"
								onClick={handleNext}
							>
								Next
							</button>
						)}
					</div>
				</div>
			)}
		</>
	);
}
export default Study;
