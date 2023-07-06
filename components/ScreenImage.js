import { ImageBackground } from "react-native";
import background from "../assets/background.png";

export default function ScreenImage() {
	return (
		<ImageBackground
			style={{ flex: 1, zIndex: -1, position: "relative" }}
			source={background}
		/>
	);
}
