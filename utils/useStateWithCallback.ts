import { useState } from "react";

export default function useStateWithCallback(initialState: any, callback: () => void) {
	let [state, setState] = useState(initialState);
	let setStateWithCallback = (state: any) => {
		setState(state);
		callback();
	}
	return [state, setStateWithCallback];
}