import "react-native-gesture-handler";
import {
	Button,
	Keyboard,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SimpleLineIcons } from "@expo/vector-icons";
import { ToastProvider } from "react-native-toast-notifications";

import Home from "./app/screens/Home";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import LogOutBtn from "./app/components/LogOutBtn";

import colors from "./app/config/colors";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import getStorage from "redux-persist/es/storage/getStorage";

const MainStack = createStackNavigator();
// console.log("state", store.getState());
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
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ToastProvider
					placement="top"
					duration={3000}
					animationType="slide-in"
					animationDuration={550}
					warningColor={colors.accentDark}
					icon={
						<SimpleLineIcons
							name="speech"
							size={22}
							color={colors.white}
							// style={{ paddingVertycal: 12, paddingHorizontal: 12 }}
						/>
					}
					textStyle={{ fontSize: 20 }}
					offset={200}
					swipeEnabled={true}
				>
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
												headerRight: () => <LogOutBtn />,
											}}
										/>
									</MainStack.Navigator>
									{/* <WelcomeScreen /> */}
									{/* <PostsScreen /> */}
								</NavigationContainer>
							</View>
						</SafeAreaView>
					</TouchableWithoutFeedback>
				</ToastProvider>
			</PersistGate>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
