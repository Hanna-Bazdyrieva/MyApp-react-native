import { ImageBackground, StyleSheet, View } from "react-native";
import ScreenImage from "../components/ScreenImage";
import LoginForm from "../components/LoginForm";
import Button from "react-native-button";
import padding from "../utils/paddingsStyling";

export default function WelcomeScreen({ onClick }) {
	return (
		<>
			<ScreenImage />
			<View style={styles.container}>
				<Button
					containerStyle={styles.btn}
					disabledContainerStyle={{ backgroundColor: "grey" }}
					style={styles.btnText}
					// title="Submit"
					onPress={onClick("login")}
				>
					Маю аккаунт
				</Button>
				<Button
					containerStyle={styles.btn}
					disabledContainerStyle={{ backgroundColor: "grey" }}
					style={styles.btnText}
					onPress={onClick("register")}
				>
					Хочу зареєструватися
				</Button>
			</View>
		</>
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
	btn: {
		marginTop: 28,
		marginBottom: 16,
		...padding(16),
		width: "100%",
		backgroundColor: "#FF6C00",
		borderRadius: 100,
		opacity: 1,
	},
	btnText: {
		fontSize: 20,
		color: "#FFFFFF",
	},
});
