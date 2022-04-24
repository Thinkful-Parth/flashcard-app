import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { updateDeck, readDeck } from "../../utils/api/index";

function EditDeck() {
	const [editDeck, setEditDeck] = useState({ name: "", description: "" });
	const history = useHistory();
	const { url } = useRouteMatch();
	useEffect(() => {
		const loadDeck = async () => {
			const response = await readDeck(url.match(/\d/)[0]);
			console.log(response);
			setEditDeck(response);
		};
		loadDeck();
	}, [url]);

	const handleChange = ({ target }) => {
		setEditDeck({ ...editDeck, [target.name]: target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		updateDeck(editDeck).then((edittedDeck) =>
			history.push(`/decks/${edittedDeck.id}`)
		);
	};

	return (
		<div className="row">
			<div className="col">
				<h1>Edit Deck</h1>

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
							value={editDeck.name}
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
							value={editDeck.description}
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
export default EditDeck;
