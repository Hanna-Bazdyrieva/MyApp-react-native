import { Text, View, TextInput, Alert, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Button from "react-native-button";
import padding from "../utils/paddingsStyling";
import colors from "../config/colors";
import ButtonEl from "./ButtonEl";

export default function LoginScreen() {
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
	const onSubmit = (data) => console.log(data);

	return (
		<View style={styles.formContainer}>
			<Title text={"Увійти"} />

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

			<ButtonEl text="Увійти" handleClick={handleSubmit} />

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
		...padding(32, 16, 0),
		width: "100%",
		height: 489,
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

		...padding(16),
		width: "100%",
		height: 50,
		fontSize: 16,
		color: "#212121",

		backgroundColor: "#F6F6F6",
		borderWidth: 1,

		borderColor: "#E8E8E8",
		borderRadius: 8,
	},
	show: {
		position: "absolute",
		top: 16,
		right: 16,
		fontSize: 16,
		color: "#1B4371",
	},
	textLink: {
		fontSize: 16,
		color: "#1B4371",
	},
	error: {
		position: "absolute",
		bottom: 0,
		left: 16,
		fontSize: 12,
		color: "red",
	},
});
