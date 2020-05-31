import { store } from '@risingstack/react-easy-state';
import { DATA_PageClass } from '../ContentPage/PageClass.store';
import { Store_Modales } from '../Modales.store';
import { Store_ContentPage } from '../ContentPage.store';
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
			TYPE: DATA_PageClass.NAME,
		},
	],
	/**@param {DATA_NavButton} data */
	onclick: function (e, data) {
		const { TYPE } = data;
		Store_Modales.open(Store_ContentPage.create(TYPE));
	},
});
