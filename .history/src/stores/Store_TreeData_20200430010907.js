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
			children: ['fakeData_0'],
		},
		/**@static Les root qui permete de construire les category tree */
		CLASSES: {
			isRoot: true,
			id: 'CLASSES',
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
	},
	folders: {
		/**@example Les root qui permete de construire les category tree */
		folderA: {
			isRoot: false,
			id: 'folderA',
			type: 'FOLDER',
			key: 'CLASSES-folderA',
			contentId: '',
			children: ['folderB'],
		},
		/**@example Les root qui permete de construire les category tree */
		folderB: {
			isRoot: false,
			id: 'folderB',
			type: 'FOLDER',
			key: 'CLASSES-folderA-folderB',
			contentId: '',
			children: ['fakeData_0'],
		},
	},
	getIcon(type) {
		return Store_treeSheets.TYPE[type].icon;
	},
	getSwitcherIcon(data) {
		return data.children.length ? '' : '-';
	},
	getRoots() {
		return Object.values(Store_treeSheets.superRoot);
	},
	/** mapper dataTree pour le format Antdesign: remplace les id par des data */
	getTreeAntdFormat() {
		function mapperToAntdLayoutData(data) {
			return { ...data, children: [], type: 'DATA' }; //fixme: Store_layouts childrens
		}
		function mapperToAntd(data) {
			return {
				...data,
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
		const Data = this.getRoots().map((data) => mapperToAntd(data));
		console.log('Data: ', Data);
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
