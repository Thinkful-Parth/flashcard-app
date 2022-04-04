import React from "react";
import DeckCase from "./DeckCase";

function Decks({ decks }) {
  return (
    <>
      {decks.length > 0 ? (
        decks.map((deck, index) => (
          <DeckCase key={deck.id + "-" + index} deck={deck} />
        ))
      ) : (
        <h2> No Decks Available.</h2>
      )}
    </>
  );
}
export default Decks;
