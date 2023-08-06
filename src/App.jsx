import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";

function App() {
	return (
		<>
			<div>Hola mundo</div>

			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/exercise/:id" element={<Exercise />} />
			</Routes>
		</>
	);
}

export default App;
