import { store } from '@risingstack/react-easy-state';

export const SETTINGDATA_NavPages = store({});

export const DATA_NavPages = store({
	/** @static uid unique ne peut etre changer, et est passer a tous le contenu qui en decoule (serie) */
	UID: '',
	/** if the Onglet it visible */
	_visible: true,
	/** Custom icon for the page onglet */
	_icon: '',
	/** Custom background colors for onglet */
	_backgroundColor: '',
});

export const Store_NavPages = store({
	/** @type {Array.<DATA_NavPages>} */
	DATA: [],
	/** find and return a data with UID */
	getData(UID) {
		return this.DATA.find((data) => data.UID === UID);
	},
	Select(UID, TYPE) {
		!this.isExiste(UID) && this.create(UID, TYPE);
	},
	isExiste(UID) {
		return !!this.getData(UID);
	},
	create(UID, TYPE) {
		const data = { ...DATA_NavPages, UID, TYPE };
		this.DATA.push(data);
	},
});
