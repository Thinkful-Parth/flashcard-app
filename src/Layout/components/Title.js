import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";

export const  Title = ({ deck, card }) =>{
  const { url } = useRouteMatch();
  const [titleText, setTitleText] = useState("");
  if (url.includes("new")) {
    url.includes("cards")
      ? setTitleText("Create Card")
      : setTitleText("Create Deck");
  } else if (url.includes("edit")) {
    url.includes("cards")
      ? setTitleText("Edit Card" + card.id)
      : setTitleText("Edit Deck");
  } else if (url.includes("study")) {
    setTitleText(deck.name + ": Study");
  }
  return <h2>{titleText}</h2>;
}
