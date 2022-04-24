import React from "react";
import { deleteCard } from "../../../utils/api";

function CardDeleteBtn({ card: { id } }) {
	const handleDeleteCard = async () => {
		const controller = new AbortController();
		const { signal } = controller;
		window.confirm("Continuing will irreversible delete this card.");
		await deleteCard(Number(id), signal);
	};
	return (
		<div>
			<button className="btn btn-danger" onClick={handleDeleteCard}>
				Delete Card
			</button>
		</div>
	);
}
export default CardDeleteBtn;
