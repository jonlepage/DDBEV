import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';

const OsWin = () => {
	const [_state, _setState] = useState('value'); // react hook states
	const lstore = store({ _state: 30 }); // store states local

	return (
		<Box
			className='OsWin'
			display='flex'
			justifyContent='flex-end'
			alignItems='flex-start'
		>
			<Box className='OsWin button' px={2} mx={0}>
				_
			</Box>
			<Box className='OsWin button' px={2} mx={0}>
				[]
			</Box>
			<Box className='OsWin button' px={2} mx={0}>
				X
			</Box>
		</Box>
	);
};

export default view(OsWin);
