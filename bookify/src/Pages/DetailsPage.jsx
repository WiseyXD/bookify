import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../Context/Firebase";
export default function DetailsPage() {
	const firebase = useFirebase();
	const params = useParams();
	const [data, setData] = useState(null);
	const [url, setURL] = useState(null);
	const [qty, setQty] = useState(1);
	useEffect(() => {
		firebase.getBookByID(params.id).then((val) => setData(val.data()));
	}, []);
	useEffect(() => {
		if (data) {
			firebase.getImageURL(data.Image).then((val) => setURL(val));
		}
	}, [data]);
	console.log(url);
	console.log(data);

	function handleOrder() {
		firebase.placeOrder(params.id, qty);
	}

	return (
		<div className="max-w-full w-3/4 mx-auto py-8">
			{data == null ? (
				<h1>Shimmer is Here</h1>
			) : (
				<div className="flex flex-col gap-3 items-center">
					<h1 className="text-3xl font-semibold">{data.name}</h1>
					<img className="w-1/2 h-1/2" src={url} alt="" />
					<div className="flex">
						<p className="text-lg">{data.isbn}</p>
						<p className="text-lg">{data.author}</p>
					</div>
					<p className="">{data.desc}</p>
					<p>{data.price} Rupees</p>
					<input
						className="border border-black"
						type="number"
						name=""
						id=""
						value={qty}
						min={1}
						onChange={(e) => setQty(e.target.value)}
					/>
					<button
						className="bg-green-400 px-3 py-2 rounded-md hover:bg-green-300 ease-in-out duration-150"
						onClick={handleOrder}
					>
						Buy Now
					</button>
				</div>
			)}
		</div>
	);
}
