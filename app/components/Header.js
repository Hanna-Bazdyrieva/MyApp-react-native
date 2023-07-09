import React from "react";
import {
	ImageBackground,
	Platform,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";
import LogOut from "../assets/log-out.png";
import colors from "../config/colors";

export default function Header({ title }) {
	return (
		<>
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
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		height: 44,
		width: "100%",

		borderBottomWidth: 1,
		borderBottomColor: colors.gray,
	},
	title: {
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: 12,

		fontSize: 18,
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
