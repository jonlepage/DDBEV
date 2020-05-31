import { store } from '@risingstack/react-easy-state';

const DATAGRID = { x: 1, y: 1, w: 2, h: 1, minW: 1, minH: 1, type: null };
/** Data haut niveau d'un module, avec les info de base */
export const Data_Modules = store({
	NAME: 'Data_Modules',
	/** unique id global ratacher au type de data */
	UID: '',
	/** Module unique id pour parcourir nested*/
	MUID: '',
	/** module type */
	MTYPE: '',
});

export const Store_Modules = store({
	NAME: 'Store_Modules',
	/** @type {Array.<Data_Modules>} */
	DATA: [],
	getData(MUID) {
		return this.DATA.find((data) => data.MUID === MUID);
	},
	/** create un DATA_PageData */
	create(UID, MUID, MTYPE) {
		const data = {
			...Data_Modules,
			UID,
			MUID,
			MTYPE,
		};
		this.DATA.push(data);
		return data;
	},
});
