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

/** Stock tous les data de page */
export const Store_treeSheets = store({
	ICON: { FOLDER: <FolderFilled />, DATASHEET: <DropboxOutlined /> },
	/** @static - type de datatree */
	TYPE: { FOLDER: 'FOLDER', ROOT: 'ROOT', DATASHEET: 'DATASHEET' },
	/**@type {DataSheet} - Default template for Sheets trees */
	default: {
		/** Indicateur de root, HautNiveau du tree */
		isRoot: true,
		id: '',
		/** key unique indexation pour le tree */
		key: '0-0-0',
		/** ID du content du sheets */
		contentId: '',
		/** Childrens du tree */
		children: [],
	},
	/** les data des tree */
	data: {
		DATABASE: {
			isRoot: true,
			id: 'DATABASE',
			type: 'FOLDER',
			key: '0',
			/** ID du content du sheets */
			contentId: '',
			/** Childrens du tree */
			children: ['Players'],
		},
		Players: {
			isRoot: false,
			id: 'Players',
			type: 'DATASHEET',
			key: '0-1',
			/** ID du content du sheets */
			contentId: '',
			/** Childrens du tree */
			children: ['Players_001'],
		},
		Players_001: {
			isRoot: false,
			id: 'Players_001',
			type: 'DATASHEET',
			key: '0-1',
			/** ID du content du sheets */
			contentId: '',
			/** Childrens du tree */
			children: [],
		},
	},
	getIcon(data) {
		const type = data.type;
		return this.ICON[type];
	},
	getSwitcherIcon(data) {
		return data.children.length ? '' : '-';
	},
	getRoots() {
		return Object.values(Store_treeSheets.data).filter(
			(dataLayout) => dataLayout.isRoot
		);
	},
	/** return dataTree pour le format Antdesign */
	getTreeAntdFormat() {
		const roots = this.getRoots();
		function mapperToAntd(data) {
			return {
				title: data.id,
				key: data.key,
				icon: Store_treeSheets.getIcon(data), //todo: import
				switcherIcon: Store_treeSheets.getSwitcherIcon(data), // todo: custom icons si sheet
				children: [
					...data.children.map((id) => mapperToAntd(Store_treeSheets.data[id])),
				],
			};
		}
		const Data = roots.map((dataRoot) => mapperToAntd(dataRoot));
		return Data;
	},
});
