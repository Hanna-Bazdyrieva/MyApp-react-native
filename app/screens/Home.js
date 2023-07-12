import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import UserInfo from "../components/UserInfo";

import { useRoute } from "@react-navigation/native";
import colors from "../config/colors";
import {
	BottomTabBar,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";
import BottomTabIconsContainer from "../components/BottomTabIconsContainer";
import { Button } from "react-native";
import GoBackBtn from "../components/GoBackBtn";
import LogOutBtn from "../components/LogOutBtn";

const Tabs = createBottomTabNavigator();

<AntDesign name="delete" size={24} color="black" />;

// import { Entypo } from "@expo/vector-icons";
// <Entypo name="camera" size={24} color="black" />;

// import { AntDesign } from "@expo/vector-icons";
{
	/* <AntDesign name="arrowup" size={24} color="black" />; */
}

// import { FontAwesome5 } from "@expo/vector-icons";
{
	/* <FontAwesome5 name="thumbs-up" size={24} color="black" />; */
}

export default function Home() {
	// const {
	// 	params: { email, login = "Hanna Bazdyrieva" },
	// } = useRoute();
	return (
		<Tabs.Navigator
			initialRouteName="Profile"
			screenOptions={({ route }) => ({
				tabBarStyle: {
					// marginTop: 42,
					height: 60,
					borderTopColor: colors.gray,
					borderTopWidth: 1,
				},

				tabBarIcon: ({ focused, color, size }) => {
					if (route.name === "Profile") {
						return (
							<BottomTabIconsContainer focused={focused}>
								<Feather
									name="user"
									size={24}
									color={focused ? colors.white : colors.black08}
								/>
							</BottomTabIconsContainer>
						);
					} else if (route.name === "Create") {
						return (
							<BottomTabIconsContainer focused={focused}>
								<AntDesign
									name="plus"
									size={24}
									color={focused ? colors.white : colors.black08}
								/>
							</BottomTabIconsContainer>
						);
					} else if (route.name === "Map") {
						return (
							<BottomTabIconsContainer focused={focused}>
								<AntDesign
									name="appstore-o"
									size={24}
									color={focused ? colors.white : colors.black08}
								/>
							</BottomTabIconsContainer>
						);
					}

					// 		iconName = focused ? "ios-list-box" : "ios-list";
					// 	}
					// 	return <Ionicons name={iconName} size={size} color="black" />;
					// },
				},
				tabBarShowLabel: false,
			})}
		>
			<Tabs.Screen
				name="Map"
				component={MapScreen}
				options={{
					// headerShown: false,
					title: "Публікації",
					headerStyle: {
						borderBottomWidth: 1,
						borderBottomColor: colors.gray,
					},
					headerTintColor: colors.gray,
					headerTitleStyle: {
						fontWeight: "medium",
						fontSize: 18,
						color: colors.black,
					},
					headerTitleContainerStyle: {
						// marginHorizontal: 100,
						marginLeft: 140,
					},
					headerRight: () => (
						<LogOutBtn />
						// <Button
						// 	onPress={() => alert("This is a button!")}
						// 	title="Press me"
						// 	color="#fff"
						// />
					),
				}}
			/>

			<Tabs.Screen
				name="Create"
				component={CreatePostsScreen}
				options={({ navigation, back }) => ({
					// header:
					// headerShown: false,
					title: "Створити публікацію",

					headerStyle: {
						borderBottomWidth: 1,
						borderBottomColor: colors.gray,
					},
					headerTintColor: colors.gray,
					headerTitleStyle: {
						fontWeight: "medium",
						fontSize: 18,
						color: colors.black,
					},
					headerTitleContainerStyle: {
						marginHorizontal: 40,
					},
					headerLeft: () => {
						return (
							// back &&
							<GoBackBtn />
						);
					},
				})}
			/>
			{/* <Tabs.Screen name="Comments" component={CommentsScreen} /> */}

			<Tabs.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Tabs.Navigator>
		// <View style={styles.container}>
		// 	<UserInfo login={login} email={email} />
		// 	<BottomTabBar />
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
	},
});
