import { store } from '@risingstack/react-easy-state';
import { UTILITY } from '../stores/Store_Global';

export const DATA_Windows = store({
	/** UID for window */
	UID: '',
	data: null,
	setting: null,
});
export const Store_Windows = store({
	/** @type {Array.<DATA_Windows>} */
	DATA: [],
	getData(UID) {
		return this.DATA.find((data) => data.UID === UID);
	},
	/** pass a data and data setting */
	open(data, setting) {
		const dataWindow = {
			...DATA_Windows,
			UID: UTILITY.create_UUID(),
			data,
			setting,
		};
		this.DATA.push(dataWindow);
	},
	/** close a window */
	close(UID) {
		const data = this.getData(UID);
		const index = this.DATA.indexOf(data);
		this.DATA.splice(index, 1);
	},
});
