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
import { Feather } from "@expo/vector-icons";

export default function LogOutBtn() {
	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate("Login");
	};

	return (
		<Pressable onPress={onPress} style={styles.btn}>
			{({ pressed }) => (
				<Feather
					name="log-out"
					style={[
						styles.icon,
						{
							backgroundColor: pressed ? colors.bgInput : colors.white,
							color: pressed ? colors.accentDark : colors.gray,
						},
					]}
					size={pressed ? 22 : 24}
				/>
			)}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	btn: {
		alignSelf: "flex-end",
		paddingHorizontal: 16,
	},
	icon: {},
});
