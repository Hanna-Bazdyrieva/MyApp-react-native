import {
	Text,
	View,
	TextInput,
	Alert,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	Pressable,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
// import Button from "react-native-button";
import padding from "../utils/paddingsStyling";
import colors from "../config/colors";
import ButtonEl from "./AppButton";
import Title from "./Title";
import LinkText from "./LinkText";
import { emailRules, passwordRules } from "../utils/validateInputs";
import { useState } from "react";

// const emailRegexp =
// 	/^[A-Za-z0-9](?:[A-Za-z0-9.-]*[A-Za-z0-9])?@[A-Za-z0-9.-]+(?:\.[A-Za-z0-9.-_]+)[^-]$/u;
// const passwordRegexp = /^(?=.*[0-9])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&*]+$/;

// const emailRules = {
// 	required: true,
// 	maxLength: 63,
// 	minLength: 6,
// 	pattern: emailRegexp,
// };

// const passwordRules = {
// 	required: true,
// 	maxLength: 16,
// 	minLength: 6,
// 	pattern: passwordRegexp,
// };

export default function LoginScreen() {
	const [isSecure, setIsSecure] = useState(true);
	const toggleSecure = () => {
		isSecure === true ? setIsSecure(false) : setIsSecure(true);
	};
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (data) => console.log("Login data ", data);

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == "ios" ? "padding" : "height"}
		>
			<View style={styles.formContainer}>
				<Title>Увійти</Title>

				<View style={styles.inputWrap}>
					<Controller
						control={control}
						rules={emailRules}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={styles.input}
								placeholder="Адреса електронної пошти"
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
							/>
						)}
						name="email"
					/>
					{errors.email && (
						<Text style={styles.error}>
							Email має бути валідним (my.good-email_new@mail.ua)
						</Text>
					)}
				</View>

				<View style={styles.inputWrap}>
					<Controller
						control={control}
						rules={passwordRules}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={styles.input}
								placeholder="••••••••••••"
								secureTextEntry={isSecure}
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
							></TextInput>
						)}
						name="password"
					/>
					<Pressable
						style={styles.showContainer}
						onPress={() => toggleSecure()}
					>
						{isSecure === true && <Text style={styles.show}>Показати</Text>}
						{isSecure === false && <Text style={styles.show}>Сховати</Text>}
					</Pressable>
					{errors.password && (
						<Text style={styles.error}>
							Пароль від 6 до 16 символів містить цифру та спецсимвол.
						</Text>
					)}
				</View>

				<ButtonEl text="Увійти" onPress={handleSubmit(onSubmit)} />

				<LinkText navigateTo={"register"} />
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	formContainer: {
		position: "absolute",
		bottom: 0,
		...padding(32, 16, 0),
		width: "100%",
		height: 490,

		// height: "63%",
		alignItems: "center",
		backgroundColor: "#fff",
		borderColor: "#E8E8E8",
		borderWidth: 1,
	},
	inputWrap: {
		position: "relative",
		width: "100%",
	},
	input: {
		marginBottom: 16,

		...padding(14),
		width: "100%",
		height: 60,
		fontSize: 16,
		fontFamily: "Roboto-Regular",

		color: "#212121",

		backgroundColor: "#F6F6F6",
		borderWidth: 1,

		borderColor: "#E8E8E8",
		borderRadius: 8,
	},
	showContainer: {
		position: "absolute",
		top: 16,
		right: 16,
	},
	show: {
		fontSize: 16,
		color: "#1B4371",
		fontFamily: "Roboto-Regular",
	},
	error: {
		position: "absolute",
		bottom: 0,
		left: 16,
		fontSize: 12,
		color: "red",
	},
});
