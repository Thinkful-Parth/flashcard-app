import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import CardDeleteBtn from "./components/CardDeleteBtn";
import EditCardBtn from "./components/EditCardBtn";
import FlipCardBtn from "./components/FlipCardBtn";
import NextCardBtn from "./components/NextCardBtn";

function Card({ card, iterateCards }) {
	const { url } = useRouteMatch();
	const [flipped, setFlipped] = useState(false);
	return (
		<>
			<div className="card m-2 p-2">
				<div className="card-body">
					{url.includes("study") ? (
						<div className="row">
							{!flipped ? (
								<div className="col-5">{card.front}</div>
							) : (
								<div className="col-5">{card.back}</div>
							)}

							<div className="col-2">
								)
								<FlipCardBtn set={setFlipped} flipped={flipped} />
								<NextCardBtn iterateCards={iterateCards} card={card} />
							</div>
						</div>
					) : (
						<div className="row">
							<div className="col-5">{card.front}</div>
							<div className="col-5">{card.back}</div>

							<div className="col-2">
								<EditCardBtn card={card} />
								<CardDeleteBtn card={card} />
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
export default Card;
