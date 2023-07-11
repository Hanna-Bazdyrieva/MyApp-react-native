import { Pressable, StyleSheet, TouchableOpacity, Text } from "react-native";

import padding from "../utils/paddingsStyling";

import colors from "../config/colors";

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
				<Text style={[styles.btnText, propStyle]}>
					{pressed ? "Зроблено!" : text}
				</Text>
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
		fontFamily: "Roboto-Regular",
		fontSize: 16,
		color: colors.white,
	},
});
