import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { readDeck, createCard } from "../../utils/api/index";

function NewCard() {
  const history = useHistory();
  const [deck, setDeck] = useState({});
  const { url } = useRouteMatch();
  const [cardData, setCardData] = useState({
    deckId: deck.id,
    front: "",
    back: "",
  });

  useEffect(() => {
    const loadDeck = async () => {
      const response = await readDeck(url.match(/\d/)[0]);
      setDeck(response);
    };
    loadDeck();
  }, [url]);

  // update state with deck form data
  const handleChange = ({ target }) => {
    setCardData({ ...cardData, [target.name]: target.value });
  };

  //   handle submit deck form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const controller = new AbortController();
    const { signal } = controller;
    // uses createCard() utility function and resets initial form data
    const { front, back } = cardData;
    await createCard(deck.id, { front, back }, signal);
    setCardData({
      front: "",
      back: "",
    });
  };

  return (
    <div className="row">
      <div className="col">
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-start flex-column">
            <h1>{deck.name}</h1>
            <h4>Add Card</h4>
            <label htmlFor="front" className="h6 my-2">
              Front
            </label>
            <textarea
              type="text"
              name="front"
              id="front"
              placeholder="Front side of card"
              className="my-2"
              cols="30"
              rows="2"
              onChange={handleChange}
              value={cardData.front}
            ></textarea>
            <label htmlFor="back" className="h6 my-2">
              Back
            </label>
            <textarea
              name="back"
              id="back"
              placeholder="Back side of card"
              className="my-2"
              cols="30"
              rows="2"
              onChange={handleChange}
              value={cardData.back}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-secondary mr-2 my-2"
              onClick={(e) => {
                history.push("/");
              }}
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
export default NewCard;
