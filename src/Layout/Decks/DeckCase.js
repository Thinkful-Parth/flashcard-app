import React from "react";
import { useRouteMatch } from "react-router-dom";

import DeckDeleteBtn from "./components/DeckDeleteBtn";
import ViewDeckBtn from "./components/ViewDeckBtn";
import StudyDeckBtn from "./components/StudyDeckBtn";
import EditDeckBtn from "./components/EditDeckBtn";

function DeckCase({ deck }) {
  const { url } = useRouteMatch();
  const regexDigitTest = new RegExp("d");
  return (
    <div className="card m-2 p-2">
      <div className="card-body">
        <h4 className="card-title">
          {deck.name}
          <div className="float-right small">
            {deck.cards ? deck.cards.length : "0"} cards
          </div>
        </h4>
        <p className="card-text">{deck.description}</p>
        {regexDigitTest.test(url) ? (
          <EditDeckBtn deck={deck} />
        ) : (
          <ViewDeckBtn deck={deck} />
        )}
        <StudyDeckBtn deck={deck} />

        <DeckDeleteBtn deck={deck} />
      </div>
    </div>
  );
}
export default DeckCase;
