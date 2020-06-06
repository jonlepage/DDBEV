import { store } from '@risingstack/react-easy-state';
import { DATA_Mod_Layout } from './Modules/Mod_Layout.store';
import { DATA_Mod_String } from './Modules/Mod_String.store';

const DATAGRID = { x: 1, y: 1, w: 2, h: 1, minW: 1, minH: 1, type: null };
export const VIEW_Modules = store({
	Mod_Layout: DATA_Mod_Layout.NAME,
	Mod_String: DATA_Mod_String.NAME,
});

/** Data haut niveau d'un module, avec les info de base */
export const Data_Modules = store({
	NAME: 'Data_Modules',
	/** unique id global ratacher au type de data */
	UID: '',
	/** Module unique id pour parcourir nested*/
	MUID: '',
	/** TODO: REPLACER PAR VIEW ? car ces enfait le key pour identifier le view mdule nessesair*/
	MTYPE: '',
	dataGrid: { x: 1, y: 1, w: 2, h: 1, minW: 1, minH: 1, type: null },
	/** Track indication how deep nest module are in render (as layers) */
	_nestedIndex: 0,
	get children() {
		return [];
	},
});

export const Store_Modules = store({
	NAME: 'Store_Modules',
	/** @type {Array.<Data_Modules>}, Data with no UID, are sample for Panel_Module */
	DATA: [
		// pour chaque VIEW_Modules, creer un data pour Panel_Module
		...Object.values(VIEW_Modules).map((MTYPE) => {
			return { ...Data_Modules, MUID: MTYPE, MTYPE };
		}),
	],
	getData(MUID) {
		return this.DATA.find((data) => data.MUID === MUID);
	},
	/** create un DATA_PageData */
	create(UID, MUID, MTYPE, _nestedIndex = 0) {
		const data = {
			...Data_Modules,
			UID,
			MUID,
			MTYPE,
			_nestedIndex,
		};
		this.DATA.push(data);
		return data;
	},
});
