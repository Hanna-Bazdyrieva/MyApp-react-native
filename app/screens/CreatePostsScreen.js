import { useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import colors from "../config/colors";
import { ImageBackground } from "react-native";
import { Pressable } from "react-native";
import { Entypo, FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import { ViewBase } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AppButton from "../components/AppButton";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import BottomTabIconsContainer from "../components/BottomTabIconsContainer";

export default function CreatePostsScreen() {
	const [image, setImage] = useState(null);
	const [title, setTitle] = useState(null);
	const [location, setLocation] = useState(null);

	// console.log("image", image);

	const deleteImage = () => {
		// console.log("Delete Image");
		setImage(null);
	};
	const pickImage = async () => {
		// console.log("Image Add");
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};
	const submit = () => {
		const { image, title, location } = state;

		console.log(state);
	};

	const deletePost = () => {
		console.log("delete");
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				behavior={Platform.OS == "ios" ? "padding" : "height"}
				keyboardVerticalOffset={-190}
				style={styles.container}
			>
				{/* <View style={styles.container}> */}
				<Pressable style={styles.imgInputContainer} onPress={() => pickImage()}>
					<View style={styles.imgContainer}>
						<ImageBackground style={styles.image} source={{ uri: image }} />
					</View>
					<View
						style={[
							styles.cameraIconWrap,
							{ backgroundColor: image ? colors.offWhite : colors.white },
						]}
					>
						<Entypo
							name="camera"
							size={24}
							style={styles.cameraIcon}
							color={image ? colors.white : colors.gray}
						/>
					</View>
					<Text style={styles.loadText}>
						{image ? "Редагувати фото" : "Завантажте фото"}
					</Text>
					{image && (
						<Entypo
							style={styles.deleteIcon}
							onPress={() => deleteImage()}
							name="circle-with-cross"
							size={24}
							color={colors.gray}
						/>
					)}
				</Pressable>
				<View>
					<TextInput
						style={[styles.input, styles.inputLocation]}
						placeholder="Назва..."
					/>
					<Entypo
						style={styles.locationIcon}
						name="pencil"
						size={24}
						color={colors.gray}
					/>
				</View>

				<View>
					<TextInput
						style={[styles.input, styles.inputLocation]}
						placeholder="Місцевість..."
					/>
					<Entypo
						style={styles.locationIcon}
						name="location"
						size={24}
						color={colors.gray}
					/>
				</View>
				<AppButton text="Опублікувати" pnPress={submit} iconPost />

				<Pressable
					onPress={deletePost}
					style={({ pressed }) => [
						{
							backgroundColor: pressed ? colors.accent : colors.bgInput,
							transform: pressed ? "scale(0.95)" : "scale(1)",
						},
						styles.deleteBtn,
					]}
				>
					<FontAwesome5 name="trash-alt" size={24} color={colors.gray} />
				</Pressable>
				{/* </View> */}
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		paddingHorizontal: 16,
		paddingVertical: 32,
		// gap: 32,
		backgroundColor: colors.white,
	},
	imgInputContainer: {
		gap: 8,
	},
	imgContainer: {
		width: "100%",
		height: 240,
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: colors.bgInput,
	},

	image: {
		flex: 1,
	},
	cameraIconWrap: {
		position: "absolute",
		top: 90,
		left: 140,

		width: 60,
		height: 60,
		// backgroundColor: colors.offWhite,
		borderRadius: 30,
	},
	cameraIcon: {
		position: "absolute",
		top: 18,
		left: 18,
	},
	deleteIcon: {
		position: "absolute",
		bottom: 6,
		right: 6,
	},
	loadText: {
		fontSize: 16,
		fontFamily: "Roboto-Regular",
		color: colors.gray,
		lineHeight: 19,
	},
	input: {
		width: "100%",
		height: 50,
		// backgroundColor: colors.bgInput,
		borderBottomColor: colors.borderInput,
		borderBottomWidth: 1,
	},
	inputLocation: {
		paddingLeft: 36,
	},
	locationIcon: {
		position: "absolute",
		bottom: 12,
		left: 0,
	},
	title: {
		fontSize: 16,
		fontFamily: "Roboto-Medium",
		color: colors.black,
		lineHeight: 24,
	},
	infoContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		height: 24,
	},
	infoWrap: {
		flexDirection: "row",
		// alignItems: "baseline",
		gap: 6,
	},
	infoText: {
		fontSize: 16,
		fontFamily: "Roboto-Regular",
		color: colors.black,
		lineHeight: 24,
	},
	deleteBtn: {
		paddingHorizontal: 23,
		paddingVertical: 8,
		borderRadius: 20,
		// backgroundColor: colors.bgInput,
		width: 70,
		alignSelf: "center",
	},
});
