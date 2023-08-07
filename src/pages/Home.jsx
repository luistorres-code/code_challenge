import React from "react";
import { Link } from "react-router-dom";
import folder from "../assets/folder.png";
import file from "../assets/file.png";
import IconMainPage from "../components/IconMainPage";

function Home() {
	return (
		<main className="flex flex-col w-full h-screen justify-center items-center">
			<header className="flex flex-col items-center p-7">
				<h1 className="text-4xl font-bold text-green-dexcom">Hello, I'm Luis Tores</h1>
				<p>You provided me with two problems, and here are the solutions. Please click on any folder to access them.</p>
			</header>
			<nav>
				<ul className="flex flex-wrap justify-center items-center">
					<li className="mx-8 p-3">
						<Link to="/exercise/1" className="flex flex-col justify-center items-center p-3">
							<span>Problem 1</span>
							<IconMainPage />
							<span>Two Sum</span>
						</Link>
					</li>
					<li className="mx-8 p-3">
						<Link to="/exercise/2" className="flex flex-col justify-center items-center p-3">
							<span>Problem 2</span>
							<IconMainPage />
							<span>Missing Numbers</span>
						</Link>
					</li>
				</ul>
			</nav>
		</main>
	);
}

export default Home;
