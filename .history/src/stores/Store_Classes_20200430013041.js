import React from 'react';
import { store } from '@risingstack/react-easy-state';

/** Data for dataBase content
 * quand on creer un new database
 */
export const Store_DataBase = store({
	default: {
		id: '',
		minIndex: '',
		settingId: '',
		/** les classes modele utiliser */
		classesId: [],
		/** choix des icons custom */
		cunstomIconId: '',
	},
	data: [
		{
			id: '',
			minIndex: '',
			settingId: '',
			/** les classes modele utiliser */
			classesId: [],
			/** choix des icons custom */
			cunstomIconId: '',
		},
	],
});
