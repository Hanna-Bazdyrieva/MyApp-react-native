import {
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
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
		// console.log(response);

		const user = auth.currentUser;
		// console.log("user/ current/FireAuth", user);
		if (user) {
			// оновлюємо його профайл
			try {
				await updateProfile(user, { displayName: login });
			} catch (error) {
				console.log("Error updating user", error.message);
			}
		}
		return response;
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

export const loginUserFirebase = async (email, password, toast) => {
	try {
		const response = await signInWithEmailAndPassword(auth, email, password);
		// console.log("response fire login", response.user);
		return response;
	} catch (error) {
		console.log(error);
		toast.show("LogIn failed" + error.message, {
			type: "warning",
		});
	}
};

export const updateUserAuth = async (avatar) => {
	const user = auth.currentUser;
	// console.log("user / Auth update", user);

	if (user) {
		try {
			await updateProfile(user, { photoURL: avatar });
		} catch (error) {
			console.log("Avatar update failed", error.message);
		}
	}
};

export const logOutUserFirebase = async () => {
	try {
		await signOut(auth);
	} catch (error) {
		console.log(error);
	}
};
