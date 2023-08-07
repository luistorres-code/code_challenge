import TitlesApp from "./TitlesApp";
function ExampleListItem(props) {
	const { index, item } = props;
	const itemArray = item.split("\n");
	return (
		<li>
			<TitlesApp label={`Example ${index + 1}`} type="SUBTITLE_SECTION" size="h4" />
			{itemArray.map((item, index) => (
				<p key={index}>{item}</p>
			))}
		</li>
	);
}

export default ExampleListItem;
