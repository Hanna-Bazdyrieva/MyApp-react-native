import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";

const auth = FIREBASE_AUTH;

export const createUserFirebase = async (
	email,
	login,
	password,
	navigation,
	toast
) => {
	try {
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		console.log(response);
		const user = auth.currentUser;
		if (user) {
			// оновлюємо його профайл
			try {
				await updateProfile(user, { displayName: login });
			} catch (error) {
				console.log("Error updating user", error.message);
			}
		}
		return response;
		updatedUser;
	} catch (error) {
		if (error.message === "Firebase: Error (auth/email-already-in-use).") {
			navigation.navigate("Login");
			toast.show("You already have an account, please, log in", {
				type: "warning",
			});
		} else {
			toast.show("Sign Up failed: " + error.message, {
				type: "warning",
			});
		}
	}
};

export const loginUserFirebase = async (email, password) => {
	const response = await signInWithEmailAndPassword(auth, email, password);
	return response;
};

export const updateUserAuth = async (avatar) => {
	const user = auth.currentUser;
	console.log("user / Auth update", user);

	if (user) {
		try {
			await updateProfile(user, { photoURL: avatar });
		} catch (error) {
			console.log("Avatar update failed", error.message);
		}
	}
};
