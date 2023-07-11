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
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LogOutBtn() {
	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate("Login");
	};

	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				{
					backgroundColor: pressed ? colors.bgInput : colors.white,
					transform: pressed ? "scale(0.95)" : "scale(1)",
				},
				styles.btn,
			]}
		>
			{({ pressed }) => <ImageBackground style={styles.icon} source={LogOut} />}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	btn: {
		alignSelf: "flex-end",
		paddingHorizontal: 16,
	},
	icon: {
		height: 24,
		width: 24,
	},
});
