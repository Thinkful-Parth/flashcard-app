import React, { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";

import { readDeck, readCard, updateCard } from "../../utils/api/index";

function EditCard() {
  const history = useHistory();
  const { url } = useRouteMatch();
  const [deck, setDeck] = useState({});
  const { cardId } = useParams();

  const [cardData, setCardData] = useState({
    deckId: deck.id,
    front: "",
    back: "",
  });

  useEffect(() => {
    const loadDeck = async () => {
      console.log(url.match(/\d/));
      const response = await readDeck(url.match(/\d/)[0]);
      setDeck(response);
    };

    const getCard = async () => {
      const response = await readCard(cardId);
      setCardData(response);
    };

    loadDeck();
    getCard();
  }, [cardId, url]);

  // update state with deck form data
  const handleChange = ({ target }) => {
    setCardData({ ...cardData, [target.name]: target.value });
  };

  //   handle submit deck form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const controller = new AbortController();
    const { signal } = controller;

    await updateCard(cardData, signal);
    setCardData({
      deckId: null,
      front: "",
      back: "",
    });
    history.push(`/decks/${deck.id}`);
  };

  return (
    <div className="row">
      <div className="col">
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-start flex-column">
            <h1>{deck.name}</h1>
            <h4>Edit Card</h4>
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
export default EditCard;
