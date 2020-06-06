import { store } from '@risingstack/react-easy-state';
import { UTILITY } from '../../stores/Store_Global';

/** Les DATA editable pour settings */
export const SETTING_PageDataBase = store({
	_id: { input: null, options: null },
});
/** Voir si on pourrait pas plutot mapper ca sur un module Camera */
export const DATA_PageDataBase = store({
	/** @static Type de data */
	NAME: 'DATA_PageDataBase',
	/** @static uid unique ne peut etre changer, et est passer a tous le contenu qui en decoule (serie) */
	UID: '',
	/** @static type de data, permet au ContentPage affiche la bonen page de rendu de data */
	TYPE: '',
	/** identification local unique */
	_id: '',
	/** Descriptions de ce data*/
	_descriptions: '',
	/** Leritage des enfant s? TODO: pas certain si sa va la, or use for optimising, instead of filters(),find() */
	childrens: [],
	/** TODO: Creer par default un setting avec le _id, mais permet egalement de lui assign un autre reference, ou cloner */
	settingId: 'default',
	_maxList: 50,
});

export const Store_PageDataBase = store({
	NAME: 'Store_PageDataBase',
	/** @type {Array.<DATA_PageDataBase>} */
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
	/**@param {string} uid */
	create(TYPE, UID = UTILITY.create_UUID()) {
		const data = { ...DATA_PageDataBase, TYPE, UID };
		return data;
	},
	/**@param {DATA_PageDataBase} data */
	add(data) {
		console.log('Store_PageDataBase add: ', data);
		this.DATA.push(data);
	},
	/** check if a data exist, return boolean */
	isExiste_id(id) {
		return !!this.getDataById(id);
	},
});
