import React from "react";
import { Link } from "react-router-dom";

function StudyDeckBtn({ deck }) {
	return (
		<>
			<Link to={`/decks/${deck.id}/study`} className="btn btn-primary">
				Study Deck
			</Link>
		</>
	);
}
export default StudyDeckBtn;
