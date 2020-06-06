import { store } from '@risingstack/react-easy-state';
import { DATA_Setting_Select } from '../Settings/Setting_Select.store';
export const SETTING_Mod_String = store({
	tagId_display: {
		...DATA_Setting_Select,
		options: ['none', 'flex', 'block'],
	},
	tagDesc_display: {
		...DATA_Setting_Select,
		options: ['none', 'flex', 'block'],
	},
});
export const DATA_Mod_String = store({
	NAME: 'DATA_Mod_String',
	UID: '',
	MUID: '',
	/** affiche le id tag du input */
	tagId_display: 'none',
	/** affiche le desc tag du input */
	tagDesc_display: 'none',
});
export const Store_Mod_String = store({
	NAME: 'Store_Mod_String',
	/** @type {Array.<DATA_Mod_String>} */
	DATA: [],
	getData(MUID) {
		return this.DATA.find((data) => data.MUID === MUID);
	},
	create(UID, MUID) {
		const data = {
			...DATA_Mod_String,
			UID,
			MUID,
		};
		this.DATA.push(data);
		return data;
	},
});
