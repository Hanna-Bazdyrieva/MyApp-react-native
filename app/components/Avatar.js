import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { ImageBackground } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/slice";

import colors from "../config/colors";
import avatar from "../assets/images/avatar.jpg";

import { updateProfile } from "firebase/auth";
import { useToast } from "react-native-toast-notifications";
import { updateAvatarUserDB } from "../utils/firebaseServices/firebaseDBHandlers";
import { updateUserAuth } from "../utils/firebaseServices/firebaseAuthHandlers";
import { selectUser } from "../../redux/selectors";

export default function Avatar({ setImage, image }) {
	const dispatch = useDispatch();
	const toast = useToast();
	const { user } = useSelector(selectUser);
	// console.log("user.avatar / Avatar", user.avatar);

	const deleteImage = () => {
		// console.log("Delete Avatar");
		// state redux
		dispatch(updateUser({ avatar: "" }));
		// firebase Auth
		// updateUserAuth(null);
		//firestoreDB
		updateAvatarUserDB("", user.email);
	};

	const pickImage = async () => {
		// console.log("Avatar Add");
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});

		if (!result.canceled) {
			const avatar = result.assets[0].uri;
			// state redux
			dispatch(updateUser({ avatar }));
			// firebase Auth
			// updateUserAuth(avatar);
			//firestoreDB
			updateAvatarUserDB(avatar, user.email);
		}
	};

	return (
		<View style={styles.wrap}>
			<View style={styles.avatar}>
				{user.avatar !== "" && (
					<ImageBackground
						source={{ uri: user.avatar }}
						resizeMode="cover"
						style={styles.image}
					/>
				)}
			</View>
			<TouchableOpacity
				style={styles.iconWrap}
				onPress={user.avatar ? () => deleteImage() : () => pickImage()}
			>
				<MaterialCommunityIcons
					style={styles.icon}
					name={user.avatar ? "close-circle-outline" : "plus-circle-outline"}
					color={user.avatar ? colors.gray : colors.accent}
					size={25}
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
		alignSelf: "center",
	},
	avatar: {
		width: 120,
		height: 120,
		backgroundColor: colors.bgInput,
		borderRadius: 16,
		overflow: "hidden",
	},
	iconWrap: {
		position: "absolute",
		right: 0,
		bottom: 14,
	},
	icon: {
		backgroundColor: colors.white,
		borderRadius: 10,
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
});
