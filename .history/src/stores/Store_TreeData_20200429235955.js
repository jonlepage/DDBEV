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

/** Contien de facon static les folders hyarchic */
export const Store_treeSheets = store({
	/** @static - un tree peut contenir 2 type de node
	 * un node FOLDER:permet simplement de mieux organiser
	 * un node DATA:reference a un data selon le type
	 */
	TYPE: {
		FOLDER: { key: 'FOLDER', icon: <FolderFilled /> },
		DATA: { key: 'DATA', icon: <DropboxOutlined /> },
	},
	/** survol dun node id */
	hoverID: '',
	/**@type {DataSheet} - Default template for Sheets trees */
	default: {
		/** Indicateur de root, HautNiveau du tree */
		isRoot: true,
		id: '',
		/**  Keys qui permet de defenir une hyarchi en mode tree: "id-id-id" */
		key: '',
		/** Si contien un data, linker */
		contentId: '',
		/** Childrens du tree */
		children: [],
	},

	/** les root splitter */
	superRoot: {
		/**@static Les root qui permete de construire les category tree */
		DATABASES: {
			isRoot: true,
			id: 'DATABASES',
			type: 'FOLDER',
			key: 'DATABASES',
			contentId: '',
			children: [],
		},
		/**@static Les root qui permete de construire les category tree */
		CLASSES: {
			isRoot: true,
			type: 'FOLDER',
			key: 'CLASSES',
			contentId: '',
			children: ['folderA'],
		},
		/**@static Les root qui permete de construire les category tree */
		VALIDATORS: {
			isRoot: true,
			id: 'VALIDATORS',
			type: 'FOLDER',
			key: 'VALIDATORS',
			contentId: '',
			children: [],
		},
		/**@example Les root qui permete de construire les category tree */
		folderA: {
			isRoot: true,
			key: 'CLASSES-folderA',
			type: 'FOLDER',
			key: 'CLASSES-folderA',
			contentId: '',
			children: [],
		},
	},
	folders: {
		/**@example Les root qui permete de construire les category tree */
		folderA: {
			isRoot: true,
			type: 'FOLDER',
			key: 'CLASSES-folderA',
			contentId: '',
			children: [],
		},
	},
	getData(id) {
		return Store_treeSheets.data[id];
	},
	getIcon(data) {
		const type = data.type;
		return this.ICON[type];
	},
	getSwitcherIcon(data) {
		return data.children.length ? '' : '-';
	},
	getRoots() {
		return Object.values(Store_treeSheets.data).filter((data) => data.isRoot);
	},
	/** return dataTree pour le format Antdesign */
	getTreeAntdFormat() {
		function mapperToAntd(data) {
			return {
				title: data.id,
				key: data.key,
				icon: Store_treeSheets.getIcon(data), //todo: import
				// switcherIcon: Store_treeSheets.getSwitcherIcon(data), // todo: custom icons si sheet
				children: [
					...data.children.map((id) =>
						mapperToAntd(Store_treeSheets.folders[id])
					),
				],
			};
		}
		const roots = Object.values(Store_treeSheets.superRoot);
		const Data = roots.map((data) => mapperToAntd(data));
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
			contentId: '',
			/** Childrens du tree */
			children: [],
		};
		Store_treeSheets.data.DATABASES.children.push(ranId);
	},
});
