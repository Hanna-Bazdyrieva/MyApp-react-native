import { ImageBackground } from "react-native";

export default function ScreenImage() {
	return (
		<ImageBackground
			style={{ flex: 1, zIndex: -1, position: "relative" }}
			source={{
				uri: "https://picsum.photos/375/812",
			}}
		/>
	);
}
