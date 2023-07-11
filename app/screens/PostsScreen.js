import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import UserInfo from "../components/UserInfo";
import { useRoute } from "@react-navigation/native";
import colors from "../config/colors";

export default function PostsScreen() {
	const {
		params: { email, login = "Hanna Bazdyrieva" },
	} = useRoute();
	return (
		<View style={styles.container}>
			<UserInfo login={login} email={email} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
	},
});
