import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function BreadCrumb({ deck, text }) {
  const { cardId } = useParams();

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={"/"}>Home</Link>
          </li>
          {deck && (
            <li className="breadcrumb-item">
              <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
            </li>
          )}
          <li className="breadcrumb-item active" aria-current="page">
            {text} {cardId && cardId}
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default BreadCrumb;
