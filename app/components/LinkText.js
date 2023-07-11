import { StyleSheet, Text } from "react-native";

function LinkText({ navigateTo }) {
	const handleRegisterPress = () => console.log("Зареєструватися link pressed");
	const handleLoginPress = () => console.log("Увійти link pressed");

	if (navigateTo === "login") {
		return (
			<Text style={styles.text}>
				Вже є акаунт?{" "}
				<Text style={styles.textLink} onPress={handleLoginPress}>
					Увійти
				</Text>
			</Text>
		);
	}

	if (navigateTo === "register") {
		return (
			<Text style={styles.text}>
				Немає акаунту?{" "}
				<Text style={styles.textLink} onPress={handleRegisterPress}>
					Зареєструватися
				</Text>
			</Text>
		);
	}
}

export default LinkText;

const styles = StyleSheet.create({
	text: {
		fontFamily: "Roboto-Regular",
		fontSize: 16,
		color: "#1B4371",
	},
	textLink: {
		textDecorationLine: "underline",
	},
});
