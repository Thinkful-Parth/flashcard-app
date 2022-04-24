import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
function EditCardBtn({ card: { id } }) {
	const { url } = useRouteMatch();
	return (
		<>
			<Link to={`${url}/cards/${id}/edit`} className="btn m-2">
				Edit Card
			</Link>
		</>
	);
}
export default EditCardBtn;
