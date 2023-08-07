export default function TitlesApp(props) {
	const { label, type, size } = props;
	const types = {
		NAVBAR_TITLE: "text-center font-bold text-2xl text-green-dexcom",
		WELCOME_TITLE: "text-4xl font-bold text-green-dexcom",
		BACKGROUND_COLORED_ROUNDED_TOP: "text-center font-bold text-4xl bg-green-dexcom-dark text-light w-full md:w-9/12 p-2 rounded-t",
		START_SECTION: "font-bold text-lg text-green-dexcom my-2",
		SUBTITLE_SECTION: "font-bold mt-3",
	};

	if (size === "h1") return <h1 className={types[type]}>{label}</h1>;
	if (size === "h2") return <h2 className={types[type]}>{label}</h2>;
	if (size === "h3") return <h3 className={types[type]}>{label}</h3>;
	if (size === "h4") return <h4 className={types[type]}>{label}</h4>;
	if (size === "h5") return <h5 className={types[type]}>{label}</h5>;
	if (size === "h6") return <h6 className={types[type]}>{label}</h6>;
}
