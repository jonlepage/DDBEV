import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Activity_DataTree from './LeftPaneContents/Activity_DataTree';
import Activity_Modules from './LeftPaneContents/Activity_Modules';
import Activity_Plugins from './LeftPaneContents/Activity_Plugins';
import { Store_LeftPan } from '../stores/Store_LeftPan';
import SettingBarRight from './SettingBarRight';
function getContent(selectedID) {
	let content;
	switch (selectedID) {
		case 'projetTree':
			content = <Activity_DataTree />;
			break;
		case 'projetPlugin':
			content = <Activity_Plugins />;
			break;
		case 'ScrachComponments':
			content = <Activity_Modules />;
			break;
		case 'Settings':
			content = <SettingBarRight />;
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
	return <>{content}</>;
};
export default view(LeftPaneContents);
