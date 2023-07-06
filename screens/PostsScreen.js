import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import UserInfo from "../components/UserInfo";

export default function PostsScreen() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Header title={"Публікації"} />
			<UserInfo login={"Natali Romanova"} email={"email@example.com"} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// position: "relative",
		flex: 1,
		backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
	},
});
