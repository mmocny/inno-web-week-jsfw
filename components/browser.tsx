import { use } from "react";
import getData from "../utils/getData";

// const pdata = getData();

export default function () {
	// let data = use(pdata);
	let data = {};

	console.log('client!');

	return (
		<>
			<pre>
				<code>
					{JSON.stringify(data, null, 2)}
				</code>
			</pre>
		</>
	);
}
