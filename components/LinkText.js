import { StyleSheet, Text } from "react-native";

function LinkText({ navigateTo }) {
	if (navigateTo === "login") {
		return (
			<Text style={styles.textLink}>
				Вже є акаунт? <Text>Увійти</Text>
			</Text>
		);
	}

	if (navigateTo === "register") {
		return (
			<Text style={styles.textLink}>
				Немає акаунту? <Text>Зареєструватися</Text>
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
