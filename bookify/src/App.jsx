import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/" element={<Login />} />
				<Route path="/" element={<Signup />} />
				<Route path="/" element={<Feed />} />
			</Routes>
		</>
	);
}

export default App;
