import {
	ImageBackground,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import Add from "../assets/add.png";
import colors from "../config/colors";

export default function AvatarAdd({ onPress }) {
	return (
		<View style={styles.wrap}>
			<View style={styles.avatar}></View>
			<TouchableOpacity onPress={onPress}>
				<ImageBackground
					source={Add}
					style={styles.imgWrap}
					imageStyle={styles.addImg}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	wrap: {
		position: "absolute",
		top: -60,
		backgroundColor: colors.transparent,
		width: 132,
		height: 120,
	},
	avatar: {
		width: 120,
		height: 120,
		backgroundColor: colors.bgInput,
		borderRadius: 16,
	},
	imgWrap: {
		position: "absolute",
		right: 0,
		bottom: 14,
		width: 25,
		height: 25,
		backgroundColor: colors.white,
		borderRadius: 100,
	},
});
