import React from 'react';
import { store } from '@risingstack/react-easy-state';

/** data folder de type Classes */
export const Store_Classes = store({
	/** icon representatif des */
	default: {
		id: '',
		type: '.CLASSES||.EXTENT',
		contentId: '',
		/** Si a des childrends, ce sont des .ext seulment visuel */
		children: [],
	},
	data: {
		Charactere: {
			id: 'Charactere',
			type: '.CLASSES||.EXTENT',
			contentId: 'layoutrootId',
			/** Si a des childrends, ce sont des .ext seulment visuel */
			children: [],
		},
	},
});
