import { Text, View, StyleSheet } from "react-native";
import UserInfo from "../components/UserInfo";
import { useRoute } from "@react-navigation/native";
import ImageCard from "../components/ImageCard";
import colors from "../config/colors";

export default function PostsScreen() {
	const {
		params: {
			email = "hanna@mail.ua",
			login = "Hanna Bazdyrieva",
			uri = "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMyApp-4131bc3f-d962-4fcb-b707-650a1d72e688/ImagePicker/b0660409-0694-4fc6-86dc-6c39f42cd969.jpeg",
		},
	} = useRoute();
	return (
		<View style={styles.container}>
			{/* <Text>MapScreen</Text> */}
			<UserInfo login={login} email={email} uri={uri} />
			<ImageCard />
			<ImageCard />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 32,
		gap: 32,
		backgroundColor: colors.white,
	},
});
