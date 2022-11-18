import delay from "../../../utils/delay";
import getData from "../../../utils/getData";

export default async function Page({ params, searchParams }: {
	params: { id: string },
	searchParams: {},
}) {

	await delay(Number(params.id) * 500);
	
	let data = await getData();

	return (<>
		Child {params.id}, {JSON.stringify(data)}
	</>);
}
