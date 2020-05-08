import { store } from '@risingstack/react-easy-state';
import { Component } from 'react';

/**
 * @typedef {Object} DataLayout - Data for build GridLayout
 * @property {boolean} DataLayout.isRoot - Indicateur de root, Layout de base
 * @property {number} DataLayout.level - Le level ou ce trouve le layout
 * @property {string} DataLayout.id - ID du setting connecter au layout
 * @property {string} DataLayout.key - Keys qui permet de defenir une hyarchi en mode tree: "id-id-id"
 * @property {string} DataLayout.settingID - ID du setting connecter au layout
 * @property {{x: number, y: number, w: number, h: number,maxW:number,maxH:number}} DataLayout.datagrid - dataGrid pour la position et largeur du grid
 * @property {string} DataLayout.contentId - ID du setting connecter au layout
 * @property {Array.<string>} DataLayout.childrens - IDs unique des childs layouts
 *
 */
/** Store Des data layouts
 * Permet la constructions des layouts des pages CLASS
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
		/** key permet de defenir une hyarchi en mode tree: "id-id-id" */
		key: '',
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
	/** @return {Array.<DataLayout>} Listes des DataLayout de type ROOT
	 * permet aussi de filter le module activity tree
	 */
	getRoots() {
		return Object.values(Store_layouts.data).filter(
			(dataLayout) => dataLayout.isRoot
		);
	},
	/** obtien la semantique pour un tree */
	getRootTree() {
		const root = { key: 'Classes', childrens: [] };
		const roots = Object.values(Store_layouts.data).filter(
			(dataLayout) => dataLayout.isRoot
		);
	},
	/** PERMET DE GENERER DU DATA POUR DEBUG */
	MAKEDEMODEBUG(root = true, SuperRoot = 'DataBase') {
		for (let i = 0, l = 40; i < l; i++) {
			const fakeId = `fakeData_${i}`;
			const fakeData = { ...this.default };
			fakeData.isRoot = root;
			fakeData.id = fakeId;
			Store_layouts.data[fakeId] = fakeData;
		}
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
