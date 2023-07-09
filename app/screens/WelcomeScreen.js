import { KeyboardAvoidingView, Platform } from "react-native";
import LoginScreen from "../components/LoginScreen";
import RegistrationScreen from "../components/RegistrationScreen";
import ScreenImage from "../components/ScreenImage";
import WelcomeWrap from "../components/WelcomeWrap";
// import WelcomeWrap from "../components/WelcomeWrap";

export default function WelcomeScreen({ onClick }) {
	return (
		<>
			<ScreenImage />
			{/* <WelcomeWrap /> */}
			<KeyboardAvoidingView
				behavior={Platform.OS == "ios" ? "padding" : "height"}
			>
				{/* <LoginScreen /> */}
				<RegistrationScreen />
			</KeyboardAvoidingView>
		</>
	);
}
