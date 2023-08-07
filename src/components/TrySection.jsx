import React from "react";

import { useState } from "react";
import TitlesApp from "../components/TitlesApp";

import ExampleList from "../components/ExampleList";
import Form from "../components/Form";

function TrySection(props) {
	const { functionSolve, examples, id } = props;
	const [validInput, setValidInput] = useState(true);
	const [result, setResult] = useState("The result of the function will be displayed here");

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
				// if (isNaN(number)) {
				// 	setValidInput(false);
				// 	throw new Error("The input is not valid, please check the instructions and try again");
				// }
				inputTestArrayNumber.push(number);
			}
		} catch {
			setValidInput(false);
		}
		let result = null;
		if (id === "1") {
			const targetNumber = document.getElementById("targetNumber").value;
			if (targetNumber === "") {
				setValidInput(false);
				return;
			}
			const targetNumberNumber = parseInt(targetNumber);
			if (isNaN(targetNumberNumber)) {
				setValidInput(false);
				return;
			}
			result = functionSolve(inputTestArrayNumber, targetNumberNumber);
		} else result = functionSolve(inputTestArrayNumber);

		if (result.length === 0 && id == "2") setResult("There is no missing number");
		else if (result.length === 0 && id == "1") setResult("There is no result");
		else setResult("[" + result.join(", ") + "]");
	};

	return (
		<section className="grid grid-cols-3 grid-rows-1 gap-5 md:w-9/12 w-full border border-green-dexcom-dark rounded-b">
			<aside className="p-3 row-span-2">
				<TitlesApp label="Examples" type="START_SECTION" size="h3" />
				<ExampleList listOfExamples={examples} />
			</aside>
			<article className="col-span-2 px-6">
				<section>
					<TitlesApp label="Try it!" type="SUBTITLE_SECTION" size="h4" />
					<p className="text-gray-600">You can try the function developed with your own custom test</p>
					<Form handleForm={handleForm} id={id} />
					{validInput ? "" : <p className="text-red-800 bg-red-300 px-4 py-2 mt-4 rounded">The input is not valid, please check the instructions and try again</p>}
				</section>
				<hr className="w-full my-4" />
				<section className="">
					<TitlesApp label="Result" type="START_SECTION" size="h3" />
					<p className="p-3 border border-gray-600 rounded bg-dark text-light text-bold font-mono">{result}</p>
				</section>
			</article>
		</section>
	);
}

export default TrySection;
