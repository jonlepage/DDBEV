/**
 * @typedef {Object} DataSheet - Liste des dataSheet
 * @property {boolean} dataSheet.isRoot - Largeur maximal du layou
 * @property {string} dataSheet.id - Largeur maximal du layou
 * @property {string} dataSheet.key - Largeur maximal du layou
 * @property {string} dataSheet.contentId - Largeur maximal du layou
 * @property {array} dataSheet.children - Largeur maximal du layou
 */

import { FolderFilled, DropboxOutlined } from '@ant-design/icons';
import React from 'react';
import { store } from '@risingstack/react-easy-state';
import { Store_layouts } from './Store_DataPage';
import { Store_Classes } from './Store_Classes';

//TODO: Ce store est pour le tree, elle ne fait que interpreter les data des autre store pour render un tree lisible.
//TODO: Elle ne contien aucun data creeable, que ce qui lui est nessesaire pour creer un tree avec les data fournit

/** Contien de facon static les folders hyarchic */
export const Store_treeSheets = store({
	/** survol dun node id */
	hoverID: '',
	/** @static - un tree peut contenir 2 type de node
	 * un node FOLDER:permet simplement de mieux organiser
	 * un node DATA:reference a un data selon le type
	 */
	TYPE: {
		FOLDER: { key: 'FOLDER', icon: <FolderFilled /> },
		CLASS: { key: 'CLASS', icon: <DropboxOutlined /> },
		DATABASE: { key: 'DATABASE', icon: <DropboxOutlined /> },
		VALIDATOR: { key: 'VALIDATOR', icon: <DropboxOutlined /> },
	},
	/** les data de base */
	ROOT: {
		/**@static Les root qui permete de construire les category tree */
		DATABASES: {
			id: 'DATABASES',
			rootId: 'DATABASES',
			dataType: null,
			contentId: null,
			/** Si a des childrends, ce sont des .ext seulment visuel */
			children: [],
		},
		/**@static Les root qui permete de construire les category tree */
		CLASSES: {
			id: 'CLASSES',
			rootId: 'CLASSES',
			dataType: null,
			contentId: null,
			/** Si a des childrends, ce sont des .ext seulment visuel */
			children: [],
		},
		/**@static Les root qui permete de construire les category tree */
		VALIDATORS: {
			id: 'VALIDATORS',
			rootId: 'VALIDATORS',
			dataType: null,
			contentId: null,
			/** Si a des childrends, ce sont des .ext seulment visuel */
			children: [],
		},
	},
	folders: {
		/**@example Les root qui permete de construire les category tree */
		folderA: {
			rootId: 'CLASSES',
			id: 'Charactere',
			dataType: 'FOLDER',
			contentId: '',
			/** Si a des childrends, ce sont des .ext seulment visuel */
			children: [],
		},
		/**@example Les root qui permete de construire les category tree */
		dataA: {
			rootId: 'CLASSES',
			id: 'Charactere',
			dataType: '.CLASSES||.EXTENT',
			contentId: 'fakeData_0',
			/** Si a des childrends, ce sont des .ext seulment visuel */
			children: [],
		},
	},
	getIcon(type) {
		return Store_treeSheets.TYPE[type].icon;
	},
	getSwitcherIcon(data) {
		return data.children.length ? '' : '-';
	},
	getRoots() {
		return Object.values(Store_treeSheets.ROOT);
	},
	/** mapper dataTree pour le format Antdesign: remplace les id par des data */
	getTreeAntdFormat() {
		function mapperToAntd(data, key = data.rootId) {
			return {
				...data,
				// antD tree structure
				title: data.id,
				icon: Store_treeSheets.getIcon(data.type), //remplace iconId avec icon
				// switcherIcon: Store_treeSheets.getSwitcherIcon(data), // todo: custom icons si sheet
				children: [
					// on va chercher soi un folder ou un content in other store Store_layouts
					...data.children.map((id) => {
						const _data =
							Store_treeSheets.folders[id] ||
							mapperToAntdLayoutData(Store_layouts.data[id]);
						return mapperToAntd(_data);
					}),
				],
			};
		}
		// const Data = this.getRoots().map((data) => mapperToAntd(data));
		const ROOT = this.getRoots().map((data) => mapperToAntd(data));
		return Data;
	},

	addSheet(data) {
		const ranId = '_new' + Math.random();
		Store_treeSheets.data[ranId] = {
			isRoot: false,
			id: 'ranId',
			type: 'DATASHEET',
			key: '0-0',
			/** ID du content du sheets */
			contentId: 'fakeData_',
			/** Childrens du tree */
			children: [],
		};
		Store_treeSheets.data.DATABASES.children.push(ranId);
	},
});
