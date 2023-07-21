import {
	collection,
	addDoc,
	getDocs,
	doc,
	setDoc,
	updateDoc,
	query,
	where,
	getDoc,
	arrayUnion,
	arrayRemove,
} from "firebase/firestore";
import { FIREBASE_DB } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const db = FIREBASE_DB;

export const addUserToDB = async ({ email, login, avatar }) => {
	// console.log("adduser params", email, login, avatar);
	try {
		const docRef = doc(collection(db, "users"), email);

		await setDoc(docRef, { login, email, avatar, posts: [] });

		// console.log("Document written with ID: ", docRef.id);
		// return { id: docRef.id, login, email, avatar, posts: [] };
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};

export const findUserDB = async (email) => {
	const docRef = doc(db, "users", email);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		const data = docSnap.data();
		// console.log("Document data:", docSnap.data());
		return data;
	} else {
		console.log("No such document!");
	}
};

export const updateAvatarUserDB = async (avatar, email) => {
	// console.log("update Avatar DB params", avatar, email);
	const userDocRef = doc(db, "users", email);
	// console.log("userDocRef", userDocRef.id);

	await updateDoc(userDocRef, {
		avatar,
	});
};
export const updatePostsUserDB = async (posts, email) => {
	// console.log("update posts DB params", posts, email);
	const userDocRef = doc(db, "users", email);
	// console.log("userDocRef", userDocRef.id);

	await updateDoc(userDocRef, {
		posts,
	});
};

export const addPostUserDB = async (post, email) => {
	// console.log("update posts DB params", post, email);
	const userDocRef = doc(db, "users", email);
	// console.log("userDocRef", userDocRef.id);
	try {
		await updateDoc(userDocRef, {
			posts: arrayUnion(post),
		});
	} catch (e) {
		console.error("Error adding Post: ", e);
	}
};
export const deletePostUserDB = async (post, email) => {
	// console.log("delete post DB params", post, email);
	const userDocRef = doc(db, "users", email);
	// console.log("userDocRef", userDocRef.id);
	try {
		await updateDoc(userDocRef, {
			posts: arrayRemove(post),
		});
	} catch (e) {
		console.error("Error deleting Post: ", e);
	}
};

// updateAvatarUserDB("some.jpg", "anna.bazdyreva@gmail.com");

// addUserToDB(
// 	{ email: "anna@gmail.com", login: "Anna" },
// 	"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMyApp-4131bc3f-d962-4fcb-b707-650a1d72e688/ImagePicker/b0660409-0694-4fc6-86dc-6c39f42cd969.jpeg"
// );
// getUserDB("cPGYdj6NGvsNVn33wzMa");

// getUserDB();

// updateUserDB({
// 	email: "anna.bazdyreva@gmail.com",
// 	posts: [
// 		{
// 			coords: { latitude: 49.64673964273703, longitude: 23.349936255514663 },
// 			image:
// 				"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMyApp-4131bc3f-d962-4fcb-b707-650a1d72e688/ImagePicker/b0660409-0694-4fc6-86dc-6c39f42cd969.jpeg",
// 			place: "Carpathians, Ukraine",
// 			title: "Nice photo",
// 		},
// 	],
// });
// findUserDB("anna.bazdyreva@gmail.com");

// export const getUserDB = async () => {
// 	const querySnapshot = await getDocs(collection(db, "users"));
// 	console.log("querySnapshot", querySnapshot.data());

// 	// querySnapshot.forEach((doc) => {
// 	// 	// console.log(`${doc.id} => ${Object.keys(doc.data())}`);
// 	// 	if (doc.id === id) {
// 	// 		console.log(doc.data());
// 	// 		return doc.data();
// 	// 	}
// 	// });
// 	const users = querySnapshot.map((doc) => ({ id: doc.id, data: doc.data() }));
// 	console.log("users", users);
// 	return users;
// };
