import { Text, View, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import padding from "../utils/paddingsStyling";
import colors from "../config/colors";

import { getUser, setPosts } from "../../redux/slice";
import { selectPosts, selectUser } from "../../redux/selectors";

import ScreenImage from "../components/ScreenImage";
import Title from "../components/Title";
import ImageCard from "../components/ListImageCard";
import Avatar from "../components/Avatar";
import LogOutBtn from "../components/LogOutBtn";
import ListImageCard from "../components/ListImageCard";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import PostsSeparator from "../components/PostsSeparator";

export default function ProfileScreen({ navigation }) {
	const dispatch = useDispatch();
	const { user } = useSelector(selectUser);
	console.log("user/redux/ profileScreen", user);
	const posts = user.posts;

	const handleDelete = (post) => {
		console.log("delete", post);
		const newPosts = posts.filter((p) => p.title !== post.title);
		dispatch(setPosts(newPosts));
		//! update posts in  fireDB
	};

	const handleCommentPress = () => {
		navigation.navigate("Home", {
			screen: "Comments",
		});
	};

	const handleLocationPress = ({ latitude, longitude }, place) => {
		console.log("latitude posts", latitude);
		navigation.navigate("Home", {
			screen: "Map",
			params: {
				place,
				latitude,
				longitude,
			},
		});
	};
	console.log("user.posts / redux", user.posts);

	return (
		<View style={styles.container}>
			<ScreenImage />

			<View style={styles.formContainer}>
				<LogOutBtn />
				<Avatar style={{ top: 22 }} image={user.avatar} />
				<Title>{user.login}</Title>

				<FlatList
					data={posts}
					keyExtractor={(_, id) => id.toString()}
					ItemSeparatorComponent={() => <PostsSeparator />}
					// refreshing={refreshing}
					// onRefresh={() => {
					// 	setPosts([
					// 		{
					// 			image:
					// 				"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMyApp-4131bc3f-d962-4fcb-b707-650a1d72e688/ImagePicker/b0660409-0694-4fc6-86dc-6c39f42cd969.jpeg",
					// 			title: "Nice photo",
					// 			place: "Carpathians, Ukraine",
					// 			coords: {
					// 				latitude: 49.64673964273703,
					// 				longitude: 23.349936255514663,
					// 			},
					// 		},
					// 	]);
					// }}
					renderItem={({ item }) => {
						return (
							<ListImageCard
								image={item.image}
								title={item.title}
								place={item.place}
								onCommentPress={() => handleCommentPress()}
								onLocationPress={() =>
									handleLocationPress(item.coords, item.place)
								}
								onPress={() => console.log("ListItemPressed", item)}
								renderRightActions={() => (
									<ListItemDeleteAction onPress={() => handleDelete(item)} />
								)}
							/>
						);
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
	},
	formContainer: {
		gap: 32,

		marginTop: 180,

		...padding(92, 16, 0),
		width: "100%",

		backgroundColor: colors.white,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
});
