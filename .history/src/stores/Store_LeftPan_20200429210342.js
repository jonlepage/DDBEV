import React from 'react';
import { store } from '@risingstack/react-easy-state';

/** Stock tous les info pour afficher le content dans la pane-left */
export const Store_LeftPan = store({
	/** le button activity actif */
	selectedID: '',
	/** TabPane button icons for superLeft tool */
	ACTIVITY: [
		{
			src: '../res/img/nav/database.png',
			id: 'dataTree',
			title: 'Database Explorator',
		},
		{
			src: '../res/img/nav/3qf3q.png',
			id: 'dataTree',
			title: 'Database Explorator',
		},
	],
});
