import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';

const Ruller = () => {
	const [_state, _setState] = useState('value'); // react hook states
	const lstore = store({ _state: 30 }); // store states local

	return (
		<div
			className='Ruller'
			style={{
				transform: `translate3d(${-0}px, ${-positionY / scale}px, 0px)`,
				backgroundSize: `${width / cols}px 20px`,
			}}
		>
			{ruleLabels}
		</div>
	);
};

export default view(Ruller);
