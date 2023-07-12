import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
	Button,
	Keyboard,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./app/screens/WelcomeScreen";
// import { useEffect, useState } from "react";
import Home from "./app/screens/Home";
import LoginScreen from "./app/components/LoginScreen";
import RegisterScreen from "./app/components/RegisterScreen";
import colors from "./app/config/colors";
import LogOutBtn from "./app/components/LogOutBtn";

const MainStack = createStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		"Roboto-Bold": require("./app/assets/fonts/Roboto-Bold.ttf"),
		"Roboto-Medium": require("./app/assets/fonts/Roboto-Medium.ttf"),
		"Roboto-Regular": require("./app/assets/fonts/Roboto-Regular.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					<StatusBar style="auto" />
					<NavigationContainer>
						<MainStack.Navigator
							initialRouteName="Login"
							// initialRouteName="Home"
						>
							<MainStack.Screen
								name="Login"
								component={LoginScreen}
								options={{ headerShown: false }}
							/>
							<MainStack.Screen
								name="Register"
								component={RegisterScreen}
								options={{ headerShown: false }}
							/>
							<MainStack.Screen
								name="Home"
								component={Home}
								options={{
									headerShown: false,
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
										marginHorizontal: 80,
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
						</MainStack.Navigator>
						{/* <WelcomeScreen /> */}
						{/* <PostsScreen /> */}
					</NavigationContainer>
				</View>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		// position: "relative",
		flex: 1,
		// backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
	},
});
