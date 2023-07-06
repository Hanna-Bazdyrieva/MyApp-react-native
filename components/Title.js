import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";

export default function Title({ text }) {
	return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
	title: {
		marginRight: "auto",
		marginLeft: "auto",
		marginBottom: 32,
		fontSize: 30,
		fontFamily: "Roboto-Medium",
		color: colors.black,
	},
});
