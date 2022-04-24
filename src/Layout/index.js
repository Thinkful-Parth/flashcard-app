import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";
import { listDecks } from "../utils/api/index";
import Decks from "./Decks/Decks";
import NewDeck from "./Decks/NewDeck";
import SingleDeckRoute from "./Decks/SingleDeckRoute";
import CreateDeckBtn from "./Decks/components/CreateDeckBtn";
function Layout() {
	const [decks, setDecks] = useState([]);
	async function getDecks(signal) {
		const response = await listDecks(signal);
		setDecks(response);
	}
	useEffect(() => {
		const controller = new AbortController();
		getDecks(controller.signal);
		return () => controller.abort();
	}, []);

	return (
		<>
			<Header />
			<div className="container">
				{/* TODO: Implement the screen starting here */}
				<Switch>
					<Route exact path="/">
						<CreateDeckBtn />
						<Decks decks={decks} />
					</Route>
					<Route exact path="/decks/new">
						<NewDeck getDecks={getDecks} />
					</Route>
					<Route path="/decks/:deckId">
						<SingleDeckRoute />
					</Route>
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</div>
		</>
	);
}

export default Layout;
