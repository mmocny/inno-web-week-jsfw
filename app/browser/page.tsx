'use client';
import "client-only";

// Based on this conversation: https://beta.nextjs.org/docs/rendering/server-and-client-components#thread-id=EtIBy

import BrowserComponent from '../../utils/BrowserComponent';

const BrowserPage = BrowserComponent('../components/browser');

export default function () {
	return (
		<BrowserPage></BrowserPage>
	)
}
