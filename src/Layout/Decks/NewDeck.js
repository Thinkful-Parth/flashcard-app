import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api/index";

function NewDeck({ getDecks }) {
  const history = useHistory();

  const [newDeck, setNewDeck] = useState({ name: "", description: "" });

  const handleChange = ({ target }) => {
    setNewDeck({ ...newDeck, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createDeck(newDeck).then(history.push(`/`));
    getDecks();
    setNewDeck({ name: "", description: "" });
  };

  return (
    <div className="row">
      <div className="col">
        <h1>Create Deck</h1>

        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-start flex-column">
            <label htmlFor="name" className="h6 my-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Deck Name"
              className="my-2"
              onChange={handleChange}
              value={newDeck.name}
            />
            <label htmlFor="description" className="h6 my-2">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Brief description of the deck"
              className="my-2"
              cols="30"
              rows="5"
              onChange={handleChange}
              value={newDeck.description}
            ></textarea>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-secondary mr-2 my-2"
              onClick={() => history.push("/")}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary my-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default NewDeck;
