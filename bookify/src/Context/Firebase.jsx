import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
} from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDIAOlyxq7JBzZaa-jWcFfgTPlbSsZVjg4",
	authDomain: "rauth-57f25.firebaseapp.com",
	projectId: "rauth-57f25",
	storageBucket: "rauth-57f25.appspot.com",
	messagingSenderId: "827236438049",
	appId: "1:827236438049:web:f8933fc4ba8ed129635360",
	measurementId: "G-YZZLLSVGCV",
};
const FirebaseContext = createContext(null);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Gprovider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) setUser(user);
			else setUser(null);
			return user;
		});
	}, [user]);
	const signUpWithEmailAndPassword = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);

	const loginWithEmailAndPassword = (email, password) =>
		signInWithEmailAndPassword(auth, email, password);

	const addBook = async (name, desc, price, isbn, author, cover) => {
		const imgRef = ref(
			storage,
			`uploads/images/${Date.now()}-${cover.name}`
		);
		const uploadResult = await uploadBytes(imgRef, cover);
		return await addDoc(collection(db, "books"), {
			name,
			desc,
			price,
			isbn,
			author,
			Image: uploadResult.ref.fullPath,
			displayName: user.displayName,
			email: user.email,
			photoURL: user.photoURL,
		});
	};

	const readBooks = async () => {
		return await getDocs(collection(db, "books"));
	};
	const isLoggedin = user ? true : false;

	const googleSignIn = () => signInWithPopup(auth, Gprovider);
	return (
		<FirebaseContext.Provider
			value={{
				signUpWithEmailAndPassword,
				loginWithEmailAndPassword,
				googleSignIn,
				isLoggedin,
				addBook,
				readBooks,
			}}
		>
			{props.children}
		</FirebaseContext.Provider>
	);
};
