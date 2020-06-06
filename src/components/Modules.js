import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { Store_Modules } from './Modules.store';
import { DATA_Mod_Layout } from './Modules/Mod_Layout.store';
import Mod_Layout from './Modules/Mod_Layout';
import { DATA_Mod_String } from './Modules/Mod_String.store';
import Mod_String from './Modules/Mod_String';
import { Store_HeaderTool } from './Camera/HeaderTool.store';

/** todo: peut etre fair un gesiter de page, sa eviterai des import ici */
function getView(MTYPE, UID, MUID) {
	switch (MTYPE) {
		case DATA_Mod_Layout.NAME:
			return <Mod_Layout UID={UID} MUID={MUID} />;
		case DATA_Mod_String.NAME:
			return <Mod_String UID={UID} MUID={MUID} />;
		default:
			return 'getView unknow Page';
	}
}

/** Module provider */

const Modules = ({ UID, MUID }) => {
	const { MTYPE } =
		Store_Modules.getData(MUID) ||
		Store_Modules.create(UID, MUID, DATA_Mod_Layout.NAME);
	const { _showDebugTools, _previewRenderDB } = Store_HeaderTool;
	const view = getView(MTYPE, UID, MUID);
	//TODO:reflechir a limplantation dun seting
	// ont pourrait juste passer la method on click dans les props ?
	function showDebugTool(a) {
		if (a) {
			return (
				<div className='Modules tool'>
					Module:{MUID} MTYPE:{MTYPE}
				</div>
			);
		}
	}
	/**@type { React.CSSProperties} */
	const style = {
		// borderStyle: 'groove',
		// borderColor: '#7e7e7e',
		// borderRadius: '3px',
		// padding: '4px',
		// borderWidth: 'medium',
	};
	return (
		<div className='Modules' style={_previewRenderDB ? style : {}}>
			{showDebugTool(_showDebugTools)}
			{view}
		</div>
	);
};

export default view(Modules);
