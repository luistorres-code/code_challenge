export default function Form(props) {
	const { id, handleForm } = props;

	return (
		<form className="mt-3" method="post">
			<label htmlFor="inputTest" className="font-bold text-green-dexcom">
				Input your array
			</label>
			<textarea name="inputTest" id="inputTest" className="block border border-green-dexcom-dark rounded p-2 mb-2 w-9/12" placeholder="We are specting a array, you can add numbers separated by comas"></textarea>
			{id === "1" && (
				<>
					<label htmlFor="targetNumber" className="font-bold text-green-dexcom">
						Target
					</label>
					<input type="number" id="targetNumber" className="block border border-green-dexcom-dark rounded p-2 mb-2 w-9/12" placeholder="Enter a number" />
				</>
			)}
			<button type="submit" className="bg-green-dexcom-dark text-light rounded px-6 py-3" onClick={handleForm}>
				Test
			</button>
		</form>
	);
}
