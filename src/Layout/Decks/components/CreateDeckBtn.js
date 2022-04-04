import React from "react";
import { Link } from "react-router-dom";

function CreateDeckBtn() {
  return (
    <>
      <Link to="/decks/new" className=" m-2 btn btn-secondary">
        Create Deck
      </Link>
    </>
  );
}
export default CreateDeckBtn;
