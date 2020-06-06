import { store } from '@risingstack/react-easy-state';
import { DATA_ContentPage } from './ContentPage.store';

export const Store_Modales = store({
	/**@type {DATA_ContentPage} */
	data: null,
	/**@param {DATA_ContentPage} data */
	open(data) {
		this.data = data;
	},
	clear() {
		this.data = null;
	},
});
