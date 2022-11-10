'use client';

import { use, useState } from "react";
import getData from "../../utils/getData";

let pdata = getData();

export default function() {
	let [number, setNumber] = useState(0);
	let data = use(pdata);

	function increment() {
		setNumber(number + 1);
	}

	console.log('Render CC');

	return (<>
		Count: {number} <button onClick={increment}>Increase</button>
		{JSON.stringify(data)}
	</>);
}