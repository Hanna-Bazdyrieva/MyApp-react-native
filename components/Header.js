import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import LogOut from "../assets/log-out.png";
import colors from "../config/colors";

export default function Header({ title }) {
	return (
		<>
			{/* <StatusBar style="auto" /> */}
			<View style={styles.header}>
				<Text style={styles.title}>{title}</Text>
				<ImageBackground style={styles.icon} source={LogOut} />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	header: {
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-end",
		position: "relative",

		height: 88,
		width: "100%",

		borderBottomWidth: 1,
		borderBottomColor: colors.gray,
	},
	title: {
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: 12,

		fontSize: 24,
		fontFamily: "Roboto-Medium",
		color: colors.black,
	},
	icon: {
		position: "absolute",
		right: 16,
		bottom: 10,
		height: 24,
		width: 24,
	},
});
