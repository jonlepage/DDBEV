import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import Activity_DataTree from './ActivityBarLeft/Activity_DataTree';
import Activity_Modules from './ActivityBarLeft/Activity_Modules';
import Activity_Plugins from './ActivityBarLeft/Activity_Plugins';
import { Store_LeftPan } from '../stores/Store_LeftPan';
function getContent(selectedID) {
	switch (selectedID) {
        let content;
		case 'projetTree':
			content = <Activity_DataTree />;
			break;
		case 'projetTree':
			content =  <Activity_Modules />;
			break;
		case 'projetTree':
			content =  <Activity_Plugins />;
			break;
		default:
			return 0;
			break;
	}
}

/** content inside left pane */
const LeftPane = () => {
	const selectedID = Store_LeftPan.selectedID;
	return <>{getContent(selectedID)}</>;
};

export default view(LeftPane);
