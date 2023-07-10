import {
	ImageBackground,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import Add from "../assets/add.png";

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
		backgroundColor: "transparent",
		width: 132,
		height: 120,
	},
	avatar: {
		width: 120,
		height: 120,
		backgroundColor: "#F6F6F6",
		borderRadius: 16,
	},
	imgWrap: {
		position: "absolute",
		right: 0,
		bottom: 14,
		width: 25,
		height: 25,
		backgroundColor: "#FFFFFF",
		borderRadius: 100,
	},
});
