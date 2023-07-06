import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./screens/WelcomeScreen";
import { useEffect, useState } from "react";
import PostsScreen from "./screens/PostsScreen";

export default function App() {
	// const [fontsLoaded] = useFonts({
	// 	Roboto: require("./assets/fonts"),
	// });
	return (
		<View style={styles.container}>
			<WelcomeScreen />
			{/* <PostsScreen /> */}
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
