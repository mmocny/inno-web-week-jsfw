export default async function getData() {
	let result = await fetch('http://localhost:3000/api/hello', {
		cache: 'no-store'
	});
	return await result.json();
}
