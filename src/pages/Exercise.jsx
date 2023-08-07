import React from "react";
import { useParams, Link } from "react-router-dom";
import problemsDict from "../functions/functionsDict";
import { useState } from "react";

function Exercise() {
	const [validInput, setValidInput] = useState(true);

	const { id } = useParams();
	const problemToShow = problemsDict[id];
	const { name, functionSolve, problem, examples } = problemToShow;
	const handleForm = (e) => {
		setValidInput(true);
		e.preventDefault();
		const inputTest = document.getElementById("inputTest").value;
		if (inputTest === "") {
			setValidInput(false);
			return;
		}
		if (inputTest.includes("[")) {
			inputTest.replace("[", "");
		}
		if (inputTest.includes("]")) {
			inputTest.replace("]", "");
		}
		console.log(inputTest);
		const inputTestArray = inputTest.split(",");
		let inputTestArrayNumber = [];
		try {
			for (let i = 0; i < inputTestArray.length; i++) {
				const number = parseInt(inputTestArray[i]);
				if (isNaN(number)) {
					setValidInput(false);
					throw new Error("The input is not valid, please check the instructions and try again");
				}
				inputTestArrayNumber.push(parseInt(inputTestArray[i]));
			}
		} catch {
			setValidInput(false);
		}

		let result = functionSolve(inputTestArrayNumber);
		if (result.length === 0) result = "There is no missing number";
		document.getElementById("result").textContent = result.toString();
	};

	return (
		<>
			<header className="mb-6 flex flex-wrap justify-between items-center md:px-5">
				<h3 className="text-center font-bold text-2xl text-green-dexcom">Luis Torres</h3>
				<nav>
					<ul className="flex flex-wrap justify-center items-center">
						<li className="mx-3 p-2">
							<Link to="/" className="flex flex-col justify-center items-center p-3">
								<span>Home</span>
							</Link>
						</li>
						<li className="mx-3 p-2">
							<Link to="/exercise/1" className="flex flex-col justify-center items-center p-3">
								<span>Problem 1</span>
							</Link>
						</li>
						<li className="mx-3 p-2">
							<Link to="/exercise/2" className="flex flex-col justify-center items-center p-3">
								<span>Problem 2</span>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main className="h-max w-100 flex flex-col justify-center items-center">
				<h1 className="text-center font-bold text-4xl bg-green-dexcom-dark text-light w-full md:w-9/12 p-2 rounded-t">{name}</h1>
				<section className="grid grid-cols-3 grid-rows-2 gap-5 md:w-9/12 w-full border border-green-dexcom-dark rounded-b">
					<aside className="p-3 row-span-2">
						<p className="mb-5">{problem}</p>
						<h3 className="font-bold text-lg text-green-dexcom my-2">Examples</h3>
						<ul className="list-none list-inside whitespace-pre-line">
							{examples.map((example, index) => (
								<li key={index}>
									<h5 className="font-bold mt-3">Example {index + 1}</h5>
									{example}
								</li>
							))}
						</ul>
					</aside>
					<article className="col-span-2 px-6">
						<h3 className="font-bold text-lg text-green-dexcom mt-2 text-center">Try it!</h3>
						<p className="p-2 text-gray-600">You can try the function developed with your own custum test</p>
						<form className="p-2">
							<label htmlFor="inputTest" className="font-bold text-green-dexcom">
								Input your array
							</label>
							<textarea name="inputTest" id="inputTest" className="block border border-green-dexcom-dark rounded p-2 mb-2 w-9/12" placeholder="We are specting a array, you can add numbers separated by comas"></textarea>
							<button type="submit" className="bg-green-dexcom-dark text-light rounded px-6 py-3" onClick={handleForm}>
								Test
							</button>
						</form>
						{validInput ? "" : <p className="text-red-800 bg-red-300 px-4 py-2">The input is not valid, please check the instructions and try again</p>}
					</article>
					<article className="col-span-2 px-6">
						<hr className="w-full" />
						<h3 className="font-bold text-lg text-green-dexcom mt-2 text-center">Result</h3>

						<div className="p-2">
							<p id="result" className="text-gray-600">
								The result of the function will be displayed here
							</p>
						</div>
					</article>
				</section>
			</main>
		</>
	);
}

export default Exercise;
