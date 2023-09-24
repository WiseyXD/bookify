import { useState, useEffect } from "react";
import { useFirebase } from "../Context/Firebase";

import { useNavigate } from "react-router-dom";
export default function Register() {
	const firebase = useFirebase();
	console.log(firebase);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cnfpassword, setCnfPassword] = useState("");
	const [name, setName] = useState("");
	const [user, setUser] = useState(null);
	const navigate = useNavigate();
	async function handleSubmit() {
		if (
			password !== cnfpassword ||
			password === "" ||
			email === "" ||
			name === ""
		) {
			alert("Password doesnt match");
			return;
		}
		const result = await firebase.signUpWithEmailAndPassword(
			email,
			password
		);
		console.log(result);
		setEmail("");
		setPassword("");
		setCnfPassword("");
		setName("");
	}
	useEffect(() => {
		setUser(firebase.isLoggedin);
	}, [firebase, navigate]);

	if (user) {
		navigate("/");
	}

	return (
		<div className="bg-grey-lighter min-h-screen flex flex-col">
			<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
				<div className="bg-black px-6 py-8 rounded shadow-md text-black w-full">
					<h1 className="mb-8 text-3xl text-center text-white">
						Sign up
					</h1>
					<input
						type="text"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="fullname"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Full Name"
					/>

					<input
						type="text"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<input
						type="password"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type="password"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="confirm_password"
						placeholder="Confirm Password"
						value={cnfpassword}
						onChange={(e) => setCnfPassword(e.target.value)}
					/>

					<button
						onClick={handleSubmit}
						className="w-full text-center py-3 rounded bg-green text-black bg-white hover:bg-gray-500 hover:text-white ease-in-out duration-300 focus:outline-none my-1 "
					>
						Create Account
					</button>

					<div className="text-center text-sm text-white mt-4">
						By signing up, you agree to the
						<a
							className="no-underline border-b border-grey-dark text-grey-dark"
							href="#"
						>
							Terms of Service
						</a>{" "}
						and
						<a
							className="no-underline border-b border-grey-dark text-grey-dark"
							href="#"
						>
							Privacy Policy
						</a>
					</div>
				</div>

				<div className="text-grey-dark mt-6">
					Already have an account?
					<a
						className="no-underline border-b border-blue text-blue"
						href="../login/"
					>
						Log in
					</a>
					.
				</div>
			</div>
		</div>
	);
}
