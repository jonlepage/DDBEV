import { store } from '@risingstack/react-easy-state';
import { Store_Modales } from '../Modales.store';
import { Store_NavPages } from '../Navigation/NavPages.store';
import { Store_ContentPage } from '../ContentPage.store';
import { Store_PageClass } from '../ContentPage/PageClass.store';

export const Store_Modale_DataBase = store({
	NAME: 'Store_ModaleData',
	/** modele data */
	DATA: {
		_uid: '_r33',
		_name: 'aeffa',
		_pageType: '.cl',
		_settingId: '',
	},
	RULES: {},
	extractDataList() {
		const UIDS = Store_PageClass.DATA.map((o) => o.UID);
		return Store_ContentPage.DATA.filter((e) => UIDS.indexOf(e.UID) > -1);
	},
	/**@param {DATA_PageClass} data */
	onFinish(customdata, data) {
		console.log('customdata, data: ', customdata, data);
		Store_ContentPage.add(customdata);
		// // //TODO: make a extra options
		if ('open after create') {
			Store_NavPages.Select(data.UID);
		}
		Store_Modales.clear();
	},
});
