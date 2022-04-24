import React from "react";
import { Link } from "react-router-dom";
function EditDeckBtn({ deck }) {
	return (
		<>
			<Link to={`/decks/${deck.id}/edit`} className="btn btn-secondary mr-2">
				Edit Deck
			</Link>
		</>
	);
}
export default EditDeckBtn;
