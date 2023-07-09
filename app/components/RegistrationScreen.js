import {
	Text,
	View,
	TextInput,
	Alert,
	StyleSheet,
	KeyboardAvoidingView,
	Pressable,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { emailRules, loginRules, passwordRules } from "../utils/validateInputs";
import padding from "../utils/paddingsStyling";

import AvatarInput from "./AvatarInput";
import ButtonEl from "./AppButton";
import Title from "./Title";
import LinkText from "./LinkText";

import colors from "../config/colors";
import { useState } from "react";

export default function RegistrationScreen() {
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
			name: "",
			email: "",
			password: "",
		},
	});
	const onSubmit = (data) => console.log("Registration data", data);

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == "ios" ? "padding" : "height"}
		>
			<View style={styles.formContainer}>
				<AvatarInput />
				<Title>Реєстрація</Title>

				<View style={styles.inputWrap}>
					{/* <MaterialCommunityIcons
						name="email"
						size={24}
						color={colors.accentDark}
					/> */}
					<Controller
						control={control}
						rules={loginRules}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={styles.input}
								placeholder="Логін"
								onBlur={onBlur}
								onChangeText={onChange}
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

				<ButtonEl text="Зареєструватися" onPress={handleSubmit(onSubmit)} />

				<LinkText navigateTo={"login"} />
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	formContainer: {
		position: "absolute",
		bottom: 0,
		...padding(92, 16, 0),
		width: "100%",
		height: 550,

		// height: "70%",
		alignItems: "center",
		backgroundColor: colors.white,
	},
	inputWrap: {
		position: "relative",
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
