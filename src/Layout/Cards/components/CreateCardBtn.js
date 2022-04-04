import React from "react";
import { Link } from "react-router-dom";

function CreateCardBtn({ deckId }) {
  return (
    <>
      <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">
        Add Card
      </Link>
    </>
  );
}
export default CreateCardBtn;
