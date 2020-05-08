import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import Activity_DataTree from './ActivityBarLeft/Activity_DataTree';

function getContent(props) {
	switch (key) {
		case value:
			break;

		default:
			break;
	}
}

/** content inside left pane */
const LeftPane = () => {
	const [_state, _setState] = useState('value'); // react hook states
	const lstore = store({ _state: 30 }); // store states local
	const selectedID = Store_LeftPan.selectedID;
	return (
		<>
			<Activity_DataTree />
		</>
	);
};

export default view(LeftPane);
