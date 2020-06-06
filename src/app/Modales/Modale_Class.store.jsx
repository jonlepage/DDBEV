import { store } from '@risingstack/react-easy-state';
import { DATA_PageClass } from '../ContentPage/PageClass.store';
import { Store_Modales } from '../Modales.store';
import { Store_ContentPage } from '../ContentPage.store';

export const Store_Modale_Class = store({
	NAME: 'Store_ModaleData',
	/** modele data */
	DATA: {
		_uid: '_r33',
		_name: 'aeffa',
		_pageType: '.cl',
		_settingId: '',
	},
	RULES: {},
	/**@param {DATA_PageClass} data */
	onFinish(customdata, data) {
		const mixData = Object.assign(data, customdata);
		Store_ContentPage.add(mixData);
		if ('open after create') {
			Store_ContentPage.select(data.UID);
		}
		Store_Modales.clear();
	},
});
