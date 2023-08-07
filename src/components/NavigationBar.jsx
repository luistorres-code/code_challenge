import { Link } from "react-router-dom";

function NavigationBar() {
	return (
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
	);
}

export default NavigationBar;
