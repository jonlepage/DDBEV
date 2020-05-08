import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import Activity_DataTree from './LeftPaneContents/Activity_DataTree';
import Activity_Modules from './LeftPaneContents/Activity_Modules';
import Activity_Plugins from './LeftPaneContents/Activity_Plugins';
import { Store_LeftPan } from '../stores/Store_LeftPan';
function getContent(selectedID) {
	let content;
	switch (selectedID) {
		case 'projetTree':
			content = <Activity_DataTree />;
			break;
		case 'projetPlugin':
			// content = <Activity_Plugins />;
			break;
		case 'ScrachComponments':
			// content = <Activity_Modules />;
			break;
		default:
			break;
	}
	return content;
}

/** content inside left pane */
const LeftPaneContents = () => {
	const selectedID = Store_LeftPan.selectedID;
	const content = getContent(selectedID);
	console.log('content: ', content);
	console.log('selectedID: ', selectedID);
	return <>{content}</>;
};
export default view(LeftPaneContents);
