// Based on this conversation: https://beta.nextjs.org/docs/rendering/server-and-client-components#thread-id=EtIBy

'use client';
import "client-only";
import dynamic from 'next/dynamic'
import BrowserPage from './page';

// const DynamicHeader = dynamic(() => import('../components/header'), {
// 	suspense: true,
//   })

export default function () {
	return (
		<BrowserPage></BrowserPage>
		// <DynamicHeader />
	)
}
