import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { Store_Modules } from './Modules.store';
import { DATA_Mod_Layout } from './Modules/Mod_Layout.store';
import Mod_Layout from './Modules/Mod_Layout';

/** todo: peut etre fair un gesiter de page, sa eviterai des import ici */
function getView(MTYPE, UID, MUID) {
	switch (MTYPE) {
		case DATA_Mod_Layout.NAME:
			return <Mod_Layout UID={UID} MUID={MUID} />;
		default:
			return 'getView unknow Page';
	}
}

/** Module provider */
const Modules = ({ UID, MUID }) => {
	const { MTYPE } =
		Store_Modules.getData(MUID) ||
		Store_Modules.create(UID, MUID, DATA_Mod_Layout.NAME);
	const view = getView(MTYPE, UID, MUID);
	return <>{view}</>;
};

export default view(Modules);
