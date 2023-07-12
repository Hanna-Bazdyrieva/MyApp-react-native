import { Pressable, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import padding from "../utils/paddingsStyling";

import colors from "../config/colors";
import { View } from "react-native";

export default function AppButton({ text, onPress, propStyle }) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				{
					backgroundColor: pressed ? colors.accentDark : colors.accent,
					transform: pressed ? "scale(0.95)" : "scale(1)",
				},
				styles.btn,
			]}
		>
			{({ pressed }) => (
				<View style={{ flexDirection: "row" }}>
					<Text style={[styles.btnText, propStyle]}>
						{pressed ? "Зроблено!" : text}
					</Text>
					{!pressed && <Feather name="log-in" size={20} style={styles.icon} />}
				</View>
			)}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	btn: {
		marginTop: 28,
		marginBottom: 16,
		...padding(16),
		width: "100%",
		alignItems: "center",
		borderRadius: 100,
	},
	btnText: {
		marginRight: 12,
		fontFamily: "Roboto-Regular",
		fontSize: 16,
		color: colors.white,
	},
	icon: {
		color: colors.white,
	},
});
