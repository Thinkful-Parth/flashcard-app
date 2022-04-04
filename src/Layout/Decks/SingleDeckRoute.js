import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom"; /**Link,  */
import DeckCase from "./DeckCase";
import BreadCrumb from "../components/BreadCrumb";
import {readDeck} from "../../utils/api";
import Cards from "../Cards/Cards";
import StudyDeck from "./StudyDeck";
import SingleCard from "../Cards/CardRoute";
import EditDeck from "./EditDeck";

function SingleDeckRoute() {
  const { url } = useRouteMatch();
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadCards() {
      const currentDeck = await readDeck(deckId);
      if (currentDeck) {
        setDeck(currentDeck);
        setCards(currentDeck.cards);
      }
    }
    // const controller = new AbortController();
    // const { signal } = controller;
    loadCards();
    // return () => controller.abort();
  }, [deckId]);

  return (
    <>
      <Switch>
        <Route path={`${url}/cards`}>
          <SingleCard deck={deck} cards={cards} />
        </Route>

        <Route path={`${url}/edit`}>
          <BreadCrumb deck={deck} text="Edit Deck" />
          {/* <Title deck={deck} cards={cards} /> */}
          <EditDeck/>
        </Route>

        <Route path={`${url}/study`}>
          <BreadCrumb deck={deck} text="Study Deck" />
          {/* <Title deck={deck} cards={cards} /> */}
          <StudyDeck cards={cards} deckId={deck.id} />
        </Route>

        <Route exact path={`${url}`}>
          <BreadCrumb deck={deck} text="View Deck" />
          <DeckCase deck={deck} />
          <Cards deck={deck} cards={cards} />
        </Route>
      </Switch>
    </>
  );
}
export default SingleDeckRoute;
