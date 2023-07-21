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
import { logOutUserFirebase } from "../utils/firebaseServices/firebaseAuthHandlers";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../../redux/slice";

export default function LogOutBtn({ style }) {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const onPress = ({ style }) => {
		// state redux isLoggedIn = False
		dispatch(setIsLoggedIn(false));
		//firebaseDB logout
		logOutUserFirebase();
		navigation.navigate("Login");
	};

	return (
		<Pressable onPress={onPress} style={[styles.btn, style]}>
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
		position: "absolute",
		top: 22,
		right: 16,
		// alignSelf: "flex-end",
		// paddingHorizontal: 16,
	},
	icon: {},
});
