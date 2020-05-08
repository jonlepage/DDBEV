import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';

const PageType_Empty = () => {
	const [_state, _setState] = useState('value'); // react hook states
	const lstore = store({ _state: 30 }); // store states local

	return (
		<>
			{/* //local react setter*/}
			<input value={_state} onChange={(ev) => _setState(ev.target.value)} />
			{/* //local store mutation (easy)*/}
			<input
				value={lstore._state}
				onChange={(ev) => (lstore._state = Number(ev.target.value))}
			/>
		</>
	);
};

export default view(PageType_Empty);
