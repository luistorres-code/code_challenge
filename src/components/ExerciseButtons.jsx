function ExerciseButtons(props) {
	const { setVisibleTry } = props;
	return (
		<section className="border border-green-dexcom-dark  border-t-0 border-b-0 w-9/12 flex flex-wrap justify-evenly">
			<button onClick={() => setVisibleTry(false)} className="px-4 py-2 my-2 text-green-dexcom underline">
				Explanation
			</button>
			<button onClick={() => setVisibleTry(true)} className="px-4 py-2 my-2 bg-green-dexcom-dark text-light rounded-lg">
				Test it
			</button>
		</section>
	);
}

export default ExerciseButtons;
