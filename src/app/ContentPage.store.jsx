import { store } from '@risingstack/react-easy-state';
import { UTILITY } from '../stores/Store_Global';
import {
	Store_PageWelcome,
	DATA_PageWelcome,
} from './ContentPage/PageWelcome.store';
import { DATA_PageData } from './ContentPage/PageData.store';

/** Les DATA editable pour settings */
export const SETTING_ContentPage = store({
	_id: { input: null, options: null },
});
export const DATA_ContentPage = store({
	/** @static Type de data */
	NAME: '',
	/** @static uid unique ne peut etre changer, et est passer a tous le contenu qui en decoule (serie) de page,modules */
	UID: '',
	/** @static type de data, permet au ContentPage affiche la bonen page de rendu de data */
	TYPE: '',
	/** identification local unique */
	_id: '',
	/** Descriptions de ce data*/
	_descriptions: '',
	/** Template utiliser pour la propagation et la creation de la page */
	_usedTemplate: '',
});

export const Store_ContentPage = store({
	NAME: 'Store_PageClass',
	/** @type {Array.<DATA_ContentPage>} */
	DATA: [
		{
			...DATA_ContentPage,
			NAME: DATA_PageWelcome.NAME,
			UID: DATA_PageWelcome.NAME,
			TYPE: DATA_PageWelcome.NAME,
			_id: 'Welcome',
			_descriptions: 'Welcome page allow some faste operation',
		},
		{
			...DATA_ContentPage,
			NAME: DATA_PageData.NAME,
			UID: DATA_PageData.NAME,
			TYPE: DATA_PageData.NAME,
			_id: 'DATA VIEWER',
			_descriptions: 'Debug stores data page',
		},
	],
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
		const data = { ...DATA_ContentPage, TYPE, UID };
		return data;
	},
	/**@param {DATA_ContentPage} data */
	add(data) {
		console.log('Store_PageClass add: ', data);
		this.DATA.push(data);
		console.log('this.DATA: ', this.DATA);
	},
	/** check if a data exist, return boolean */
	isExiste_id(id) {
		return !!this.getDataById(id);
	},
});
