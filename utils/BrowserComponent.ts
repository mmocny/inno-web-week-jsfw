// Based on this conversation: https://beta.nextjs.org/docs/rendering/server-and-client-components#thread-id=EtIBy

import dynamic from 'next/dynamic'

export default function (module_path: string) {
	return dynamic(() => import(`${module_path}`), {
		ssr: false,
		// suspense: true,
	});
}