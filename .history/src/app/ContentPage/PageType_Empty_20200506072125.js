import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';

const PageType_Empty = () => {
	const [_state, _setState] = useState('value'); // react hook states
	const lstore = store({ _state: 30 }); // store states local

	return (
		<div className='ContentRoot'>
			<div style={{ background: '#282828' }}>
				[Page:{index}] &gt;&gt; CLASS &gt; fileName
			</div>
		</div>
	);
};

export default view(PageType_Empty);
