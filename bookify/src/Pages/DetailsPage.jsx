import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../Context/Firebase";
export default function DetailsPage() {
	const firebase = useFirebase();
	const params = useParams();
	const [data, setData] = useState(null);
	const [url, setURL] = useState(null);
	useEffect(() => {
		firebase.getBookByID(params.id).then((val) => setData(val.data()));
		if (data) {
			firebase.getImageURL(data.Image).then((val) => setURL(val));
		}
	}, []);
	console.log(url);
	console.log(data);

	return <div>{/* <img src={} alt="" /> */}</div>;
}
