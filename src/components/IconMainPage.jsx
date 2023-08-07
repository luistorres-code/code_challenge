import { useState } from "react";
import folder from "../assets/folder.png";
import file from "../assets/file.png";

export default function IconMainPage() {
	const [isHovered, setIsHovered] = useState(false);
	const handleHover = () => {
		setIsHovered(!isHovered);
	};

	if (!isHovered) return <img src={folder} alt="Folder" className="w-20" onMouseEnter={handleHover} />;
	else return <img src={file} alt="File" className="w-20 animate-pulse" onMouseLeave={handleHover} />;
}
