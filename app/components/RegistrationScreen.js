import {
	Text,
	View,
	TextInput,
	Alert,
	StyleSheet,
	KeyboardAvoidingView,
	Pressable,
	ImageBackgroundBase,
	ImageBackground,
} from "react-native";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { emailRules, loginRules, passwordRules } from "../utils/validateInputs";
import padding from "../utils/paddingsStyling";

import AvatarInput from "./AvatarAdd";
import ButtonEl from "./AppButton";
import Title from "./Title";
import LinkText from "./LinkText";

import colors from "../config/colors";
import background from "../assets/background.png";
import AvatarAdd from "./AvatarAdd";
import ScreenImage from "./ScreenImage";

export default function RegistrationScreen() {
	const [isSecure, setIsSecure] = useState(true);
	const [isFocused, setIsFocused] = useState(null);

	const defaultValues = {
		login: "",
		email: "",
		password: "",
	};

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm(defaultValues);

	const handleAvatarAdd = () => {
		console.log("AddAvatar pressed");
	};

	const toggleSecure = () => {
		isSecure === true ? setIsSecure(false) : setIsSecure(true);
	};

	const onFocus = (inputName) => {
		setIsFocused(inputName);
	};

	const onBlur = (inputName) => {
		setIsFocused(null);
	};

	const onSubmit = (data) => {
		console.log("Registration data", data);
		reset(defaultValues);
		setIsFocused(null);
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == "ios" ? "padding" : "height"}
			keyboardVerticalOffset={-190}
			style={styles.container}
		>
			<ScreenImage />

			<View style={styles.formContainer}>
				<AvatarAdd onPress={handleAvatarAdd} />
				<Title>Реєстрація</Title>

				<View style={styles.inputWrap}>
					<Controller
						control={control}
						rules={loginRules}
						render={({ field: { onChange, value } }) => (
							<TextInput
								style={[styles.input, isFocused === "login" && styles.focused]}
								placeholder="Логін"
								onBlur={onBlur}
								onChangeText={onChange}
								onFocus={() => onFocus("login")}
								value={value}
							></TextInput>
						)}
						name="login"
					/>
					{errors.login && (
						<Text style={styles.error}>
							Логін містить від 2 до 100 символів кирилиці / латиниці.
						</Text>
					)}
				</View>

				<View style={styles.inputWrap}>
					<Controller
						control={control}
						rules={emailRules}
						render={({ field: { onChange, value } }) => (
							<TextInput
								style={[styles.input, isFocused === "email" && styles.focused]}
								placeholder="Адреса електронної пошти"
								onFocus={() => onFocus("email")}
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
						render={({ field: { onChange, value } }) => (
							<TextInput
								style={[
									styles.input,
									isFocused === "password" && styles.focused,
								]}
								placeholder="••••••••••••"
								secureTextEntry={isSecure}
								onFocus={() => onFocus("password")}
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

				<ButtonEl text="Зареєструватися" onPress={handleSubmit(onSubmit)} />

				<LinkText navigateTo={"login"} />
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
	},
	formContainer: {
		...padding(92, 16, 78),
		width: "100%",
		alignItems: "center",

		backgroundColor: colors.white,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	inputWrap: {
		width: "100%",
	},
	input: {
		marginBottom: 16,
		...padding(16),
		width: "100%",
		height: 50,
		fontSize: 16,
		color: colors.black,
		backgroundColor: colors.bgInput,
		borderColor: colors.borderInput,
		borderWidth: 1,
		borderRadius: 8,
	},
	focused: {
		borderColor: colors.accent,
		borderWidth: 1,
	},
	showContainer: {
		position: "absolute",
		top: 16,
		right: 16,
	},
	show: {
		fontSize: 16,
		color: colors.textAccent,
	},
	error: {
		position: "absolute",
		bottom: 0,
		left: 16,
		fontSize: 12,
		color: "red",
	},
});
