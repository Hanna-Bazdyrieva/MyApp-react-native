import { FlatList, StyleSheet } from "react-native";
import { useRoute, route } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import UserInfo from "../components/UserInfo";
import ImageCard from "../components/ListImageCard";
import Container from "../components/Container";

import colors from "../config/colors";
import { useEffect, useState } from "react";
import PostsSeparator from "../components/PostsSeparator";
import ListImageCard from "../components/ListImageCard";
import { View } from "react-native";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { selectUser } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../redux/slice";

const userInit = {
	email: "hanna@mail.ua",
	login: "Hanna Bazdyrieva",
	avatar:
		"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMyApp-4131bc3f-d962-4fcb-b707-650a1d72e688/ImagePicker/b0660409-0694-4fc6-86dc-6c39f42cd969.jpeg",
};

const postsInit = [
	{
		image:
			"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMyApp-4131bc3f-d962-4fcb-b707-650a1d72e688/ImagePicker/b0660409-0694-4fc6-86dc-6c39f42cd969.jpeg",
		title: "Wonderful picture",
		place: "Ivano-Frankivs'k Region, Ukraine",
		coords: { latitude: 48.64673964273703, longitude: 24.349936255514663 },
	},
	{
		image:
			"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMyApp-4131bc3f-d962-4fcb-b707-650a1d72e688/ImagePicker/b0660409-0694-4fc6-86dc-6c39f42cd969.jpeg",
		title: "Nice photo",
		place: "Carpathians, Ukraine",
		coords: { latitude: 49.64673964273703, longitude: 23.349936255514663 },
	},
];

export default function PostsScreen({ navigation, route }) {
	const dispatch = useDispatch();
	const { user } = useSelector(selectUser);
	console.log("user/PostsScreen", user);
	let posts = user.posts;
	// const [posts, setPosts] = useState(postsInit);
	// const [user, setUser] = useState(userInit);
	const [refreshing, setRefreshing] = useState(false);

	useEffect(() => {
		if (route.params.state?.image) {
			setPosts((prevState) => [...prevState, route.params.state]);
		}
	}, [route.params.state?.image]);

	// useEffect(() => {
	// 	if (route.params.email) {
	// 		setUser({
	// 			email: route.params.email,
	// 			login: route.params.login,
	// 			avatar: route.params.avatar,
	// 		});
	// 	}
	// }, [route.params.email]);

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
	// console.log("posts", posts);

	return (
		<Container style={{ gap: 32 }}>
			<UserInfo login={user.login} email={user.email} uri={user.avatar} />

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
		</Container>
	);
}

const styles = StyleSheet.create({});
