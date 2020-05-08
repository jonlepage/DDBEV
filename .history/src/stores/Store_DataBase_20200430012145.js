import React from 'react';
import { store } from '@risingstack/react-easy-state';

/** Data for dataBase content
 * quand on creer un new database
 */
export const Store_DataBase = store({
	default: {
		id: '',
		/** Indicateur de root, Layout de base */
		children: [],
	},
	data: [],
});
