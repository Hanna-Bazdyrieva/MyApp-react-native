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
} from "firebase/firestore";
import { FIREBASE_DB } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const db = FIREBASE_DB;

export const addUserToDB = async ({ email, login, avatar }) => {
	console.log("adduser params", email, login, avatar);
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
	const data = docSnap.data();

	if (docSnap.exists()) {
		console.log("Document data:", docSnap.data());
	} else {
		console.log("No such document!");
	}

	// const usersRef = collection(db, "users");

	// // Create a query against the collection.
	// const q = query(usersRef, where("email", "==", email));
	// const querySnapshot = await getDocs(q);
	// // console.log("snapshot / findUserDB", querySnapshot);
	// querySnapshot.forEach((doc) => {
	// 	// doc.data() is never undefined for query doc snapshots
	// });
	console.log("findUserDB, userData", data);
	return data;
};

export const updateAvatarUserDB = async (avatar, email) => {
	console.log("update Avatar DB params", avatar, email);
	const userDocRef = doc(db, "users", email);
	console.log("userDocRef", userDocRef.id);

	await updateDoc(userDocRef, {
		avatar,
	});
};
export const updatePostsUserDB = async (posts, email) => {
	console.log("update posts DB params", posts, email);
	const userDocRef = doc(db, "users", email);
	console.log("userDocRef", userDocRef.id);

	await updateDoc(userDocRef, {
		posts,
	});
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
