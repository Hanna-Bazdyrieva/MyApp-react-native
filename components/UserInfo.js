import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Avatar from "../assets/avatar.png";
import colors from "../config/colors";

export default function UserInfo({ login, email }) {
	return (
		<>
			<View style={styles.container}>
				<Image style={styles.avatar} source={Avatar} />
				<View>
					<Text style={styles.login}>{login}</Text>
					<Text style={styles.email}>{email}</Text>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 8,

		marginLeft: 16,
		marginRight: 16,
		marginTop: 32,
		marginBottom: 32,
		height: 60,
	},
	login: {
		fontSize: 13,
		fontWeight: 700,
		color: colors.black,
	},
	email: {
		fontSize: 11,
		fontWeight: 400,
		color: colors.black,
	},
	avatar: {
		height: 60,
		width: 60,
		borderRadius: 16,
	},
});
