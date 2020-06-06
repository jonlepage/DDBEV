import { store } from '@risingstack/react-easy-state';
import { VIEW_Modules, Data_Modules } from '../../components/Modules.store';

export const DATA_Panel_Module = store({
	NAME: 'DATA_Panel_Module',
	/** MODULE VIEW TYPE */
	VIEW: '',
});

export const Store_Panel_Module = store({
	NAME: 'Store_Panel_Module',

	/** @type {Array.<DATA_Panel_Module>} */
	DATA: [
		{
			...DATA_Panel_Module,
			VIEW: VIEW_Modules.Mod_Layout,
		},
	],
});
