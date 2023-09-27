import { useState, useEffect } from "react";
import BookCard from "../Components/BookCard";
import { useFirebase } from "../Context/Firebase";
export default function Home() {
	const [books, setBooks] = useState([]);
	const firebase = useFirebase();

	useEffect(() => {
		firebase.readBooks().then((doc) => setBooks(doc.docs));
	}, []);
	console.log(books);
	return (
		<div className="max-w-full w-3/4 mx-auto">
			{books.map((book, i) => {
				return <BookCard {...book.data()} key={i} />;
			})}
		</div>
	);
}
