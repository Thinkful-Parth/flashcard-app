import React from "react";
import {  useParams } from "react-router-dom";
import Card from "./Card";
import CreateCardBtn from "./components/CreateCardBtn";

function Cards({ cards,deck }) {
  // const { url } = useRouteMatch();
  // const { deckId } = useParams();
  return (
    <div className="container pt-3">
      <hr></hr>
      <div className="row">
        <div className="col-3">
          <h3>Cards</h3>
        </div>
        <div className="col-6"></div>
        <div className="col-3 ">
          <CreateCardBtn deckId={deck.id} />
        </div>
      </div>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
export default Cards;
