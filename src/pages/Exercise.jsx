import React from "react";
import { useParams } from "react-router-dom";
import problemsDict from "../functions/functionsDict";
import { useState } from "react";

import NavigationBar from "../components/NavigationBar";
import TitlesApp from "../components/TitlesApp";
import ExplanationSection from "../components/ExplanationSection";
import TrySection from "../components/TrySection";
import ExerciseButtons from "../components/ExerciseButtons";

function Exercise() {
	const [visibleTry, setVisibleTry] = useState(false);
	const { id } = useParams();
	const idNumber = parseInt(id);
	const problemToShow = problemsDict[idNumber];
	const { name, functionSolve, problem, examples, timeComplexity, spaceComplexity } = problemToShow;

	return (
		<>
			<header className="mb-4 flex flex-wrap justify-between items-center md:px-5">
				<TitlesApp label="Luis Torres" type="NAVBAR_TITLE" size="h2" />
				<NavigationBar />
			</header>

			<main className="h-max w-100 flex flex-col justify-center items-center">
				<TitlesApp label={name} type="BACKGROUND_COLORED_ROUNDED_TOP" size="h1" />
				<p className="w-full md:w-9/12 p-4 border border-green-dexcom-dark border-b-0">{problem}</p>
				<ExerciseButtons setVisibleTry={setVisibleTry} />

				{visibleTry ? <TrySection functionSolve={functionSolve} examples={examples} id={id} /> : <ExplanationSection functionSolve={functionSolve} spaceComplexity={spaceComplexity} timeComplexity={timeComplexity} />}
			</main>
		</>
	);
}

export default Exercise;
