import React from "react";

import TitlesApp from "../components/TitlesApp";
import CodeSnipped from "./CodeSnipped";

function ExplanationSection(props) {
	const { functionSolve, timeComplexity, spaceComplexity } = props;
	return (
		<section className="md:grid md:grid-cols-2 md:gap-5 md:w-9/12 w-full flex flex-col border border-green-dexcom-dark rounded-b p-2">
			<aside className="p-3">
				<TitlesApp label="Code" size="h3" type="START_SECTION" />
				<CodeSnipped functionToRender={functionSolve.toString()} />
			</aside>
			<article className="p-2">
				<TitlesApp label="Time and space complexity" size="h3" type="START_SECTION" />
				<TitlesApp label="Time complexity" size="h4" type="SUBTITLE_SECTION" />
				<p className="p-2 font-bold font-mono">{timeComplexity.note}</p>
				<p className="p-2">{timeComplexity.explanation}</p>
				<hr className="my-4" />
				<TitlesApp label="Space complexity" size="h4" type="SUBTITLE_SECTION" />
				<p className="p-2 font-bold font-mono">{spaceComplexity.note}</p>
				<p className="p-2">{spaceComplexity.explanation}</p>
			</article>
		</section>
	);
}

export default ExplanationSection;
