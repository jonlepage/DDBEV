import { store } from '@risingstack/react-easy-state';
import { DATA_PageClass } from '../ContentPage/PageClass.store';
import { Store_Modales } from '../Modales.store';
import { Store_ContentPage, VIEW_ContentPage } from '../ContentPage.store';
import { DATA_PageDataBase } from '../ContentPage/PageDataBase.store';
import { message } from 'antd';
export const DATA_NavButton = store({
	/** The label name of the button */
	_title: '',
	/** IconPath */
	_icon: '',
	/** Point vers un type de data */
	TYPE: '',
});

export const Store_NavButton = store({
	/** @type {Array.<DATA_NavButton>} */
	DATA: [
		{
			...DATA_NavButton,
			_title: 'Classes',
			_icon: 'todo ? ',
			TYPE: VIEW_ContentPage.PageClass,
		},
		{
			...DATA_NavButton,
			_title: 'DataBase',
			_icon: 'todo ? ',
			TYPE: VIEW_ContentPage.PageDataBase,
		},
	],
	/**@param {DATA_NavButton} data */
	onclick: function (e, data) {
		const { TYPE } = data;
		//TODO: EMPECHER CLICK PageDataBase, si pas de PageClass?
		// if (TYPE === VIEW_ContentPage.PageDataBase) {
		// 	return message.error('This is an error message');
		// }
		const newData = Store_ContentPage.create(TYPE);
		Store_Modales.open(newData);
	},
});
