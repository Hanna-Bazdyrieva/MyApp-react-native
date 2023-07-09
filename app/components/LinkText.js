import { StyleSheet, Text } from "react-native";

function LinkText({ navigateTo }) {
	const handleRegisterPress = () => console.log("Зареєструватися link pressed");
	const handleLoginPress = () => console.log("Увійти link pressed");

	if (navigateTo === "login") {
		return (
			<Text style={styles.textLink}>
				Вже є акаунт? <Text onPress={handleLoginPress}>Увійти</Text>
			</Text>
		);
	}

	if (navigateTo === "register") {
		return (
			<Text style={styles.textLink}>
				Немає акаунту?{" "}
				<Text onPress={handleRegisterPress}>Зареєструватися</Text>
			</Text>
		);
	}
}

export default LinkText;

const styles = StyleSheet.create({
	textLink: {
		fontFamily: "Roboto-Regular",
		fontSize: 16,
		color: "#1B4371",
	},
});
