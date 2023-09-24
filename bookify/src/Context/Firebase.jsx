import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDIAOlyxq7JBzZaa-jWcFfgTPlbSsZVjg4",
	authDomain: "rauth-57f25.firebaseapp.com",
	projectId: "rauth-57f25",
	storageBucket: "rauth-57f25.appspot.com",
	messagingSenderId: "827236438049",
	appId: "1:827236438049:web:f8933fc4ba8ed129635360",
	measurementId: "G-YZZLLSVGCV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const FirebaseContext = createContext(null);

export const useFirebase = useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
	return (
		<FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>
	);
};
