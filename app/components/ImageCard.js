import React from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import { FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";

export default function ImageCard() {
	return (
		<View style={styles.container}>
			<View style={styles.imgContainer}>
				<ImageBackground
					source={require("../assets/images/flowers.jpg")}
					resizeMode="cover"
					style={styles.image}
				/>
			</View>
			<Text style={styles.title}>ImageCard</Text>
			<View style={styles.infoContainer}>
				<View style={styles.infoWrap}>
					<FontAwesome5 name="comment" size={24} color={colors.gray} />
					<Text style={styles.infoText}>55</Text>
				</View>
				<View style={styles.infoWrap}>
					<SimpleLineIcons name="location-pin" size={24} color={colors.gray} />
					<Text style={[styles.infoText, { textDecorationLine: "underline" }]}>
						Ivano-Frankivs'k Region, Ukraine
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		gap: 8,
		backgroundColor: colors.white,
	},
	imgContainer: {
		width: "100%",
		height: 240,
		borderRadius: 8,
		overflow: "hidden",
	},

	image: {
		flex: 1,
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
});
