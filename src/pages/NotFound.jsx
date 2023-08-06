import { useRouteError } from "react-router";

function ErrorPage() {
	const { error } = useRouteError();

	return (
		<>
			<h1>Oops@</h1>
			<p>You got lost</p>
			<p>{error.message}</p>
		</>
	);
}

export default ErrorPage;
