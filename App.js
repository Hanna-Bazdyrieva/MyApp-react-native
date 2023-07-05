import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import { useEffect, useState } from "react";

export default function App() {
	const [action, setAction] = useState(null);
	useEffect(() => {
		console.log("action", action);
	}, [action]);

	// const [fontsLoaded] = useFonts({
	// 	Roboto: require("./assets/fonts"),
	// });
	return (
		<View style={styles.container}>
			{!action && <WelcomeScreen onClick={setAction} />}
			{action === "login" && <LoginScreen />}
			{action === "register" && <RegistrationScreen />}
			{/* <StatusBar style="auto" /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "relative",
		flex: 1,
		backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
	},
});
