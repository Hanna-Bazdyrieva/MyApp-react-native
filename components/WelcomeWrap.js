import { StyleSheet, View } from "react-native";
import Button from "react-native-button";
import padding from "../utils/paddingsStyling";
import ButtonEl from "./ButtonEl";

export default function WelcomeWrap() {
	return (
		<View style={styles.container}>
			<ButtonEl text={"Маю аккаунт"} propStyle={{ fontSize: 20 }} />
			<ButtonEl text={"Хочу зареєструватися"} propStyle={{ fontSize: 20 }} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: "40%",
		...padding(16),
		width: "100%",
		alignItems: "center",
		backgroundColor: "rgba(255, 255, 255, 0.5)",
	},
});
