import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import ErrorPage from "./pages/NotFound";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" exact element={<Home />} errorElement={<ErrorPage />} />
				<Route path="/exercise/:id" element={<Exercise />} />
			</Routes>
		</>
	);
}

export default App;
