import { useState, useEffect } from "react";
import { useFirebase } from "../Context/Firebase";
import { useNavigate } from "react-router-dom";
export default function BookCard({
	name,
	price,
	desc,
	Image,
	photoURL,
	id,
	link,
}) {
	const firebase = useFirebase();
	const navigate = useNavigate();
	const [url, setUrl] = useState(null);

	useEffect(() => {
		firebase.getImageURL(Image).then((val) => setUrl(val));
	}, []);
	console.log(id);

	return (
		<div>
			<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<a href="#">
					<img className="rounded-t-lg" src={url} alt="" />
				</a>
				<div className="p-5">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							{name}
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						{desc}
					</p>
					<button
						onClick={(e) => navigate(link)}
						className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						{price}
						<svg
							className="w-3.5 h-3.5 ml-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
