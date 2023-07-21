import { useEffect, useState } from "react";
import {
	ActivityIndicator,
	Text,
	View,
	TextInput,
	StyleSheet,
	KeyboardAvoidingView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "react-native-toast-notifications";

import { emailRules, loginRules, passwordRules } from "../utils/validateInputs";
import padding from "../utils/paddingsStyling";
import { addUserToDB } from "../utils/firebaseServices/firebaseDBHandlers";
import { createUserFirebase } from "../utils/firebaseServices/firebaseAuthHandlers";
import colors from "../config/colors";

import { addUser, setIsLoading } from "../../redux/slice";
import { selectIsLoading } from "../../redux/selectors";

import AppButton from "../components/AppButton";
import Title from "../components/Title";
import LinkText from "../components/LinkText";
import ScreenImage from "../components/ScreenImage";
import EyeToggle from "../components/EyeToggle";
import Avatar from "../components/Avatar";

export default function RegisterScreen({ navigation }) {
	const isLoading = useSelector(selectIsLoading);
	useEffect(() => {
		!isLoading && dispatch(setIsLoading(false));
	}, [isLoading, dispatch]);

	const dispatch = useDispatch();
	const toast = useToast();

	const [image, setImage] = useState(null);
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

	const toggleSecure = () => {
		isSecure === true ? setIsSecure(false) : setIsSecure(true);
	};

	const onFocus = (inputName) => {
		setIsFocused(inputName);
	};

	const onBlur = (inputName) => {
		setIsFocused(null);
	};

	const signUp = async ({ email, login, password }) => {
		// console.log("Registration data", email, login, image);
		const user = {
			email,
			login,
			avatar: image,
		};
		dispatch(setIsLoading(true));
		// setLoading(true);
		try {
			const response = await createUserFirebase(
				email,
				login,
				password,
				navigation,
				toast
			);
			// console.log("response", response);
			await addUserToDB(user);
			dispatch(addUser(user));

			// console.log("response Register", response);
			navigation.navigate("Home", {
				screen: "Profile",
				params: user,
			});
		} catch (error) {
			console.log(error.message);
		} finally {
			reset(defaultValues);
			setIsFocused(null);

			dispatch(setIsLoading(false));
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == "ios" ? "padding" : "height"}
			keyboardVerticalOffset={-180}
			style={styles.container}
		>
			<ScreenImage />

			<View style={styles.formContainer}>
				<Avatar setImage={setImage} image={image} />
				<Title style={{ marginBottom: 32 }}>Реєстрація</Title>

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
					<EyeToggle
						onPress={toggleSecure}
						isSecure={isSecure}
						isFocused={isFocused === "password"}
					/>

					{errors.password && (
						<Text style={styles.error}>
							Пароль від 6 до 16 символів містить цифру та спецсимвол.
						</Text>
					)}
				</View>
				{isLoading ? (
					<ActivityIndicator size="large" color={colors.accent} />
				) : (
					<AppButton text="Зареєструватися" onPress={handleSubmit(signUp)} />
				)}

				<LinkText navigateTo={"login"} navigation={navigation} />
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
		height: 60,
		fontSize: 16,
		color: colors.black,
		backgroundColor: colors.bgInput,
		borderColor: colors.borderInput,
		borderWidth: 1,
		borderRadius: 8,
	},
	focused: {
		backgroundColor: colors.white,
		borderColor: colors.accent,
		borderWidth: 1,
	},
	error: {
		position: "absolute",
		bottom: 0,
		left: 16,
		fontSize: 12,
		color: "red",
	},
});
