import { store } from '@risingstack/react-easy-state';
import { Component } from 'react';

/**
 * @typedef {Object} DataLayout - Data for build GridLayout
 * @property {boolean} DataLayout.isRoot - Indicateur de root, Layout de base
 * @property {number} DataLayout.level - Le level ou ce trouve le layout
 * @property {string} DataLayout.id - ID du setting connecter au layout
 * @property {string} DataLayout.settingID - ID du setting connecter au layout
 * @property {{x: number, y: number, w: number, h: number,maxW:number,maxH:number}} DataLayout.datagrid - dataGrid pour la position et largeur du grid
 * @property {string} DataLayout.contentId - ID du setting connecter au layout
 * @property {Array.<string>} DataLayout.childrens - IDs unique des childs layouts
 *
 */
/** Store Des data layouts
 * Permet la constructions des layouts des pages
 */
export const Store_layouts = store({
	/**@type {DataLayout} le template default fourni quant on build */
	default: {
		/** Indicateur de root, Layout de base */
		isRoot: false,
		/** Le level ou ce trouve le layout */
		level: 0,
		/** id unique du layout, peut utiliser dans key car unique */
		id: '',
		/** ID du setting connecter au layout*/
		settingID: '',
		/** dataGrid pour la position et largeur du grid  */
		datagrid: { x: -1, y: -1, w: 2, h: 1, minW: 1, minH: 1 },
		/** ID du input */
		contentId: '',
		/** IDs des childs layouts */
		childrens: [],
	},
	/** les template layout sauvegarder qui peuvent etre partager */
	template: {},
	/** @type {Object.<string, DataLayout>}*/
	data: {},

	/** @return {boolean} check if the current layout is a layout with childrens */
	isLayout(id) {
		return !Store_layouts.data[id].datagrid;
	},
	/** @return {boolean} check if the current layout is a input*/
	isInput(id) {
		return !!Store_layouts.data[id].datagrid;
	},
	/** @return {DataLayout} return les data layout childrens dun layout */
	getChildrens(id) {
		const data = Store_layouts.data;
		return data.childrens.map((childId) => data[childId]);
	},
	/** @return {Array.<DataLayout>} Listes des DataLayout de type ROOT */
	getRoots() {
		return Object.values(Store_layouts.data).filter(
			(dataLayout) => dataLayout.isRoot
		);
	},
});

/**
 * @typedef {Object} LayoutSettings - Data Setting layouts
 * @property {number} Setting_layout.width - Largeur maximal du layou
 * @property {number} Setting_layout.cols - Nombre de cols du layout
 * @property {number} Setting_layout.rowHeight - Nombre de cols du layout
 * @property {{ x: number, y: number }} Setting_layout.margin - Margin entre les cols
 * @property {"vertical" | "horizontal"} Setting_layout.compactType - Compacteur automatique des grids
 * @property {boolean} Setting_layout.preventCollision - Previen les collisions pendant les drags de layouts
 */

/** Stock tous les settings pour les layouts */
export const Store_layoutSettings = store({
	/**@type {LayoutSettings} - Default template for layoutSetting */
	default: {
		/** Largeur maximal du layout */
		width: 1000,
		/** Nombre de cols du layout */
		cols: 24,
		/** Nombre de cols du layout */
		rowHeight: 50,
		/** Margin entre les cols */
		margin: { x: 0, y: 0 },
		/** Compacteur automatique des grids */
		compactType: null,
		/** Previen les collisions pendant les drags de layouts */
		preventCollision: true,
		/** TODO: voir  la bonne aproche */
		backgroundColor: '#524a594a',
		gridColor: '#524a594a',
		gridThickness: '1px',
	},
	/** les template sauvegarder qui peuvent etre partager */
	template: {},
	/** les setting layout par id */
	data: {},
});

/**
 * @typedef {Object} DataSheet - Liste des dataSheet
 * @property {boolean} dataSheet.isRoot - Largeur maximal du layou
 * @property {string} dataSheet.id - Largeur maximal du layou
 * @property {string} dataSheet.key - Largeur maximal du layou
 * @property {string} dataSheet.contentId - Largeur maximal du layou
 * @property {array} dataSheet.children - Largeur maximal du layou
 */

/** Stock tous les data de page */
export const Store_treeSheets = store({
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
			children: [],
		},
	},
	getRoots() {
		return Object.values(Store_treeSheets.data).filter(
			(dataLayout) => dataLayout.isRoot
		);
	},
	/** return dataTree pour le format Antdesign */
	getTreeAntdFormat() {
		const roots = Store_treeSheets.getRoots();

		const datas = roots.map((dataRoot) =>
			Store_treeSheets.mapperToAntd(dataRoot)
		);
	},

	mapperToAntd(data) {
		return {
			title: data.id,
			key: data.key,
			icon: '<FolderFilled />', //todo: import
			switcherIcon: '', // todo: custom icons si sheet
			children: [
				data.map((id) =>
					Store_treeSheets.mapperToAntd(Store_treeSheets.data[id])
				),
			],
		};
	},
});
// export const Store_DataBaseStorage = store({
// 	radioLevel: 0,
// 	/** todo: indicateur du layout selectionns pour edit: default root */
// 	currentSelected: 'Charactere',
// 	/** Contien un data pendant dragDrop d'un module */
// 	dropper: null,
// 	data: {
// 		Charactere: {
// 			/** permet le crontrol drag par level */
// 			level: 0,
// 			/** indiquateur de root, Layouts root de la page */
// 			isRoot: true,
// 			/** indic si ces un layouts, qui peut donc contenir plusieur grids deplacable */
// 			isLayout: true,
// 			/** key unique de ce data: voir si besoin ou asign autrement */
// 			key: 'Charactere',
// 			/** les settings du layout, par id, car on peut vouloir les linker, ou dupliquer
// 			 * Si null utiliser un setting default
// 			 */
// 			settingId: 'Charactere',
// 			/** La grid qui encadre le layouts, ou input, permet de le deplacer */
// 			datagrid: null,
// 			childrens: ['general', 'general2'],
// 		},
// 	},
// 	/** return un new default data selon type, ou default */
// 	create(type) {
// 		let ref;
// 		switch (type) {
// 			case 'typeInput':
// 				ref = Store_Default.typeInput;
// 				break;
// 			case 'typeInput2':
// 				ref = Store_Default.typeInput2;
// 				break;
// 			default:
// 				ref = Store_Default.default;
// 				break;
// 		}
// 		return { ...ref };
// 	},
// 	/** envoi data au dropper */
// 	dropData() {
// 		const id = 'newDataId';
// 		const data = {
// 			...Store_DataBaseStorage.data,
// 			[id]: { ...Store_DataBaseStorage.dropper },
// 		};
// 		data.Charactere.childrens.push(id);
// 		Store_DataBaseStorage.dropper = null;
// 		Store_DataBaseStorage.data = data;
// 	},
// 	/** envoi data au dropper */
// 	setDropper(data) {
// 		Store_DataBaseStorage.dropper = data || null;
// 	},
// 	/** creer un data */
// 	createData(type) {
// 		const data = { ...Store_DefaultDataLayout };
// 		return data;
// 	},
// 	/** get the page data layout from [currentPageKey]*/
// 	root() {
// 		return Object.values(Store_DataBaseStorage.data).filter((v) => v.isRoot);
// 	},
// 	getChildrensFrom(node) {
// 		node.map((key) => Store_DataBaseStorage.data[key]);
// 	},

// 	/**@returns {DataLayout} */
// 	getFromId(id) {
// 		return Store_DataBaseStorage.data[id];
// 	},
// });
