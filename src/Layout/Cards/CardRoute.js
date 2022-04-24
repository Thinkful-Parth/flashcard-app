import React from "react";
import {
	Switch,
	Route,
	useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import NewCard from "./NewCard";
import EditCard from "./EditCard";

function SingleCard({ deck }) {
	const { url } = useRouteMatch();
	return (
		<Switch>
			<Route exact path={`${url}/new`}>
				<NewCard deckId={deck.id} />
			</Route>

			<Route path={`${url}/:cardId/edit`}>
				<EditCard deckId={deck.id} />
			</Route>
		</Switch>
	);
}
export default SingleCard;
