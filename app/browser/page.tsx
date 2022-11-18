'use client';
import "client-only";

import { use } from "react";
import getData from "../../utils/getData";

// const pdata = getData();

export default function () {
	// console.log('client!');
	// let data = use(pdata);
	let data = use(Promise.resolve({}));

	return (<>
		<pre>
			<code>
				{JSON.stringify(data, null, 2)}
			</code>
		</pre>
	</>);
}