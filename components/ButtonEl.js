import Button from "react-native-button";
import colors from "../config/colors";
import { StyleSheet } from "react-native";
import padding from "../utils/paddingsStyling";

export default function ButtonEl({ text, onSubmit, propStyle }) {
	return (
		<Button
			containerStyle={styles.btn}
			disabledContainerStyle={{ backgroundColor: "grey" }}
			style={[styles.btnText, propStyle]}
			title="Submit"
			// onPress={handleSubmit(onSubmit)}
		>
			{text}
		</Button>
	);
}

const styles = StyleSheet.create({
	btn: {
		marginTop: 28,
		marginBottom: 16,
		...padding(16),
		width: "100%",
		backgroundColor: colors.accent,
		borderRadius: 100,
	},
	btnText: {
		fontFamily: "Roboto-Regular",
		fontSize: 16,
		color: colors.white,
	},
});
