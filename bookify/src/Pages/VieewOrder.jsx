import React, { useEffect, useState } from "react";
import { useFirebase } from "../Context/Firebase";
import { useNavigate } from "react-router-dom";
export default function VieewOrder() {
	const firebase = useFirebase();
	const [books, setBooks] = useState([]);
	useEffect(() => {
		firebase.fetchMyBooks().then((book) => setBooks[book]);
		console.log(books);
		console.log(firebase.isLoggedIn);
	}, []);

	return <div>Order Page</div>;
}
