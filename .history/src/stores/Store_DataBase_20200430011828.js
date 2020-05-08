import React from 'react';
import { store } from '@risingstack/react-easy-state';

/** Data for dataBase content
 */
export const Store_DataBase = store({
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
	/** obtien la semantique pour un tree (nessesite des vrai children et non des children id) */
	getRootTree() {
		function mapperToAntd(data) {
			return {
				children: [
					...data.children.map((id) => mapperToAntd(Store_treeSheets.data[id])),
				],
			};
		}

		const root = { key: 'Classes', childrens: [] };
		const roots = Object.values(Store_layouts.data).filter(
			(dataLayout) => dataLayout.isRoot
		);
		root.childrens = roots.map((data) => data.id);
		const tree = root.map((dataRoot) => mapperToAntd(dataRoot));
	},
	/** PERMET DE GENERER DU DATA POUR DEBUG */
	MAKEDEMODEBUG(root = true, SuperRoot = 'CLASSES-folderA') {
		//key: 'CLASSES-folderA-folderB',
		for (let i = 0, l = 40; i < l; i++) {
			const fakeId = `fakeData_${i}`;
			const fakeData = { ...this.default };
			fakeData.isRoot = root;
			fakeData.id = fakeId;
			fakeData.key = `${SuperRoot}-${fakeId}`;
			Store_layouts.data[fakeId] = fakeData;
		}
	},
});
