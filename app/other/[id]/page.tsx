import delay from "../../../utils/delay";

export default async function Page({ params, searchParams }: {
	params: { id: string },
	searchParams: {},
}) {
	await delay(500);
	return (<>
		Child {params.id}
	</>);
}
