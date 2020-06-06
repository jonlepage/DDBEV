import { store } from '@risingstack/react-easy-state';
import { UTILITY } from '../../stores/Store_Global';

/** Voir si on pourrait pas plutot mapper ca sur un module Camera */
export const DATA_PageClass = store({
	/** @static Type de data */
	NAME: 'DATA_PageClass',
	/** @static uid unique ne peut etre changer, et est passer a tous le contenu qui en decoule (serie) */
	UID: '',
});

export const Store_PageClass = store({
	NAME: 'Store_PageClass',
	/** @type {Array.<DATA_PageClass>} */
	DATA: [],
	/** Represent le nombre d'actualisation de ce compoment */
	_updateid: 0,
	/** find and return a data with UID */
	getData(UID) {
		return this.DATA.find((data) => data.UID === UID);
	},
	/** find and return a data with _id */
	getDataById(id) {
		return this.DATA.find((data) => data._id === id);
	},
	/**@param {string} UID */
	create(UID = UTILITY.create_UUID()) {
		const data = { ...DATA_PageClass, UID };
		return data;
	},
	/**@param {DATA_PageClass} data */
	add(data) {
		this.DATA.push(data);
	},
	/** check if a data exist, return boolean */
	isExiste_id(id) {
		return !!this.getDataById(id);
	},
});
