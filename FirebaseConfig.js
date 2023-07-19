// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
// import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCiZdN-WiSsq3VsSAok4EGs5M5roTm3XBw",
	authDomain: "hanna-app-react-native-2ac8c.firebaseapp.com",
	databaseURL:
		"https://hanna-app-react-native-2ac8c-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "hanna-app-react-native-2ac8c",
	storageBucket: "hanna-app-react-native-2ac8c.appspot.com",
	messagingSenderId: "1080014665719",
	appId: "1:1080014665719:web:c102cf9ed1770549b4a0f2",
	measurementId: "G-1HM943J05G",
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);

// export const FIREBASE_ANALITICS = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
// export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
