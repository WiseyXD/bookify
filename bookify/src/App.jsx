import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import BookList from "./Pages/BookList";
import DetailsPage from "./Pages/DetailsPage";
import VieewOrder from "./Pages/VieewOrder";
function App() {
	const [count, setCount] = useState(0);
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/add" element={<BookList />} />
				<Route path="/view/book/:id" element={<DetailsPage />} />
				<Route path="/orders" element={<VieewOrder />} />
			</Routes>
		</>
	);
}

export default App;
