import { store } from '@risingstack/react-easy-state';
import { UTILITY } from '../stores/Store_Global';
import { Store_PageWelcome } from './ContentPage/PageWelcome.store';
import { Store_PageData } from './ContentPage/PageData.store';
import { Store_PageClass } from './ContentPage/PageClass.store';
import { Store_PageDataBase } from './ContentPage/PageDataBase.store';

/** Les DATA editable pour settings */
export const SETTING_ContentPage = store({});
export const VIEW_ContentPage = store({
	PageWelcome: Store_PageWelcome.NAME,
	PageData: Store_PageData.NAME,
	PageClass: Store_PageClass.NAME,
	PageDataBase: Store_PageDataBase.NAME,
});
export const DATA_ContentPage = store({
	NAME: 'DATA_ContentPage',
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
	/** indicator if visible for nav */
	_visibleNav: true,
});

export const Store_ContentPage = store({
	NAME: 'Store_PageClass',
	/** @type {Array.<DATA_ContentPage>} */
	DATA: [
		{
			...DATA_ContentPage,
			UID: VIEW_ContentPage.PageWelcome,
			TYPE: VIEW_ContentPage.PageWelcome,
			_id: 'Welcome',
			_descriptions: 'Welcome page allow some faste operation',
		},
		{
			...DATA_ContentPage,
			UID: VIEW_ContentPage.PageData,
			TYPE: VIEW_ContentPage.PageData,
			_id: 'DATA VIEWER',
			_descriptions: 'Debug stores data page',
		},
	],
	/** UID of Current page rendered */
	_currentUID: '',
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
		this.DATA.push(data);
	},
	/** check if a data exist, return boolean */
	isExiste_id(id) {
		return !!this.getDataById(id);
	},
	/** select page to render*/
	select(UID) {
		if (this._currentUID !== UID) {
			this._currentUID = UID;
		}
	},
	/** select next avaible page */
	selectNextFrom(_currentUID) {
		if (!_currentUID) {
			this.select(VIEW_ContentPage.PageWelcome);
		}
	},
});
