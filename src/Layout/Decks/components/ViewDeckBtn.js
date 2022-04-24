import React from "react";
import { Link } from "react-router-dom";

function ViewDeckBtn({ deck }) {
	return (
		<Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-2">
			View
		</Link>
	);
}
export default ViewDeckBtn;
