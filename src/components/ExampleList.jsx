import ExampleListItem from "./ExampleListItem";

function ExampleList(props) {
	const { listOfExamples } = props;
	return (
		<ul>
			{listOfExamples.map((item, index) => (
				<ExampleListItem key={index} index={index} item={item} />
			))}
		</ul>
	);
}

export default ExampleList;
