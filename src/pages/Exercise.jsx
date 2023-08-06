import React from "react";
import { useParams } from "react-router-dom";

function Exercise() {
	const { id } = useParams();

	return (
		<>
			<h1>Exercise Page</h1>
			<p>Showing exercise for project ID: {id}</p>
		</>
	);
}

export default Exercise;
