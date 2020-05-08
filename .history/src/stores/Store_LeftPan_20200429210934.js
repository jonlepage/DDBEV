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
			id: 'projetTree',
			title: 'Database Explorator',
		},
		{
			src: '../res/img/nav/3qf3q.png',
			id: 'projetPlugin',
			title: 'Database Explorator',
		},
		{
			src: '../res/img/nav/Network-Folder-icon.png',
			id: 'projetLinker',
			title: 'Database Explorator',
		},
		{
			src: '../res/img/nav/git-icon.png',
			id: 'projetGit',
			title: 'Git manager',
		},
		{
			src: '../res/img/nav/file-search-icon.png',
			id: 'search',
			title: 'deep searcher',
		},
		{
			src: '../res/img/nav/items.png',
			id: 'ScrachComponments',
			title: 'Scrach and Componments',
		},
	],
});
