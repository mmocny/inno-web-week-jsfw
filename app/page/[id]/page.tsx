export default function Page({ params, searchParams }: {
	params: { id: string },
	searchParams: { },
  }) { // searchParams
	return (<>
		Child {params.id}
	</>);
  }
  