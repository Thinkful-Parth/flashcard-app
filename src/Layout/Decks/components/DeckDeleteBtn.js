import React from "react";
import { deleteDeck } from "../../../utils/api";
import { useHistory } from "react-router-dom";

function DeckDeleteBtn({ deck }) {
	const history = useHistory();
	const handleDeckDelete = () => {
		if (
			window.confirm(
				`Continuing will irreversibly delete the ${
					deck.name || "unnamed"
				} deck.`
			)
		) {
			deleteDeck(deck.id).then(() => history.push("/"));
		}
	};

	return (
		<>
			<button className="btn btn-danger float-right" onClick={handleDeckDelete}>
				Delete Deck
			</button>
		</>
	);
}
export default DeckDeleteBtn;
