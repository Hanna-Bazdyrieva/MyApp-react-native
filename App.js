import {
	Keyboard,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./app/screens/WelcomeScreen";
// import { useEffect, useState } from "react";
import PostsScreen from "./app/screens/PostsScreen";

export default function App() {
	const [fontsLoaded] = useFonts({
		"Roboto-Bold": require("./app/assets/fonts/Roboto-Bold.ttf"),
		"Roboto-Medium": require("./app/assets/fonts/Roboto-Medium.ttf"),
		"Roboto-Regular": require("./app/assets/fonts/Roboto-Regular.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					<WelcomeScreen />
					{/* <PostsScreen /> */}
					<StatusBar style="auto" />
				</View>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		// position: "relative",
		flex: 1,
		// backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
	},
});
