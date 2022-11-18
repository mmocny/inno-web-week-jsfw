'use client';
import "client-only";

import { FormEvent, useState } from "react";
import readFileAsJson from "../../utils/readFileAsJson";

export default function () {
	let [json, setJson] = useState({});
	// let data = use(pdata);

	async function onFileChange(event: FormEvent<HTMLInputElement>) {
		const files = (event.target as HTMLInputElement).files;
		if (!files) return;
		let json = await readFileAsJson(files[0]);
		//{"args":{"ukm_page_load_timing_update":{"first_contentful_paint_ms":706,"latest_cumulative_layout_shift":0,"latest_url":"https://inp-demo.glitch.me/","ukm_source_id":10401}},"cat":"loading","name":"UkmPageLoadTimingUpdate","ph":"I","pid":80248,"s":"t","tid":259,"ts":284707400657,"tts":217531250},
		json = json.filter((line: any) => line["name"] == "UkmPageLoadTimingUpdate")
		setJson(json);
	}

	return (<>
		{/* <label htmlFor="file">Choose file to upload</label> */}
		<input id="file" type="file" accept="text/json" onInput={onFileChange}></input>
		
		<pre>
			<code>
				{JSON.stringify(json,null,2)}
			</code>
		</pre>
	</>);
}