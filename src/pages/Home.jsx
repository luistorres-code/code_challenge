import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<h1>Main Screen</h1>
			<ul>
				<li>
					<Link to="/exercise/1">Exercise 1</Link>
				</li>
				<li>
					<Link to="/exercise/2">Exercise 2</Link>
				</li>
			</ul>
		</div>
	);
}

export default Home;
