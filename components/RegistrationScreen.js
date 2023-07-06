import { Text, View, TextInput, Alert, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Button from "react-native-button";
import AvatarInput from "./AvatarInput";
import padding from "../utils/paddingsStyling";
import ButtonEl from "./ButtonEl";
import colors from "../config/colors";
import Title from "./Title";

export default function RegistrationScreen() {
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
	const onSubmit = (data) => console.log(data);

	return (
		<View style={styles.formContainer}>
			<AvatarInput />
			<Title text={"Реєстрація"} />

			<View style={styles.inputWrap}>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							style={styles.input}
							placeholder="Логін"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="login"
				/>
				{errors.login && <Text style={styles.error}>This is required.</Text>}
			</View>

			<View style={styles.inputWrap}>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
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
				{errors.email && <Text style={styles.error}>This is required.</Text>}
			</View>

			<View style={styles.inputWrap}>
				<Controller
					control={control}
					rules={{
						maxLength: 100,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							style={styles.input}
							placeholder="••••••••••••"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						></TextInput>
					)}
					name="password"
				/>
				<Text style={styles.show}>Показати</Text>
				{errors.password && <Text style={styles.error}>This is required.</Text>}
			</View>

			<ButtonEl text="Зареєструватися" handleClick={handleSubmit} />

			<Text style={styles.textLink}>
				Немає акаунту? <Text>Зареєструватися</Text>
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	formContainer: {
		position: "absolute",
		bottom: 0,
		...padding(92, 16, 0),
		width: "100%",
		height: 548,
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
	show: {
		position: "absolute",
		top: 16,
		right: 16,
		fontSize: 16,
		color: colors.textAccent,
	},
	textLink: {
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
