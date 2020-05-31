import { store } from '@risingstack/react-easy-state';

export const DATA_PageData = store({
	NAME: 'DATA_PageData',
	/** uid unique du data */
	uid: '',
	/** Data Type */
	pageType: '',
});
export const Store_PageData = store({
	NAME: 'Store_PageData',
	/** @type {Array.<DATA_PageData>} */
	DATA: [],
});
