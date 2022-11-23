export default async function readFileAsJson(file: File): Promise<any> {
	// console.log(file.name, file.size);
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsText(file);
		reader.addEventListener('load', (event: ProgressEvent<FileReader>) => {
			if (!reader.result) return reject(event);
			const data = JSON.parse(reader.result as string);
			resolve(data);
		});
		reader.addEventListener('error', reject);
	});
}