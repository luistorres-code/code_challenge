import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeSnipped(props) {
	const { functionToRender } = props;
	return (
		<SyntaxHighlighter language="javascript" style={atomDark}>
			{functionToRender}
		</SyntaxHighlighter>
	);
}
