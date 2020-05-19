import { store } from '@risingstack/react-easy-state';
import React from 'react';
import PageData from '../app/ContentPage/PageData';
import PageClass from '../app/ContentPage/PageClass';
import Module_layout, {
	Store_Module_layout,
} from '../app/LeftPaneContents/Activity_Modules/Module_layout';
import Inputs_tag from '../app/LeftPaneContents/Activity_Modules/Inputs_tag';

export const Store_Global = store({
	/** DATA STATIC DES PAGE */
	PAGETYPE: {
		EMPTY: '',
		CLASSES: '.cl',
		DATABASE: '.db',
		VALIDATOR: '.vd',
	},
	/** @type {Object.<string, JSX.Element>} Type de page a rendre */
	PAGESVIEW: {
		DATAVIEW: <PageData />,
		CLASSES: <PageClass />,
		DATABASE: void 0,
		VALIDATOR: void 0,
	},
	/**  Register stores of contents modules */
	STORESMODULES: [
		{
			id: 'LAYOUT',
			get store() {
				return Store_Module_layout;
			},
		},
	],
	_selectedUID: '_dataId_fsfsr345563fg',

	// page content
	DATA: [
		// get Store_PageOnglets() {
		// 	return { id: '', ext: '', index: -1, visible: true };
		// },
		{
			uid: '_dataId_fsfsr345563fg',
			id: 'charactere',
			pageView: 'DATAVIEW',
			onglet: { ext: '', visible: true, selected: true },
			camera: {
				_zoom: 1,
				limitToBounds: true,
				limitToWrapper: true,
				minScale: 0.02,
				maxScale: 1.5,
			},
			rootLayout: {},
			content: { storeId: 'Store_PageData' },
		},
		{
			uid: '_dataId_42244556422',
			id: 'player',
			pageView: 'CLASSES',
			onglet: { ext: '', visible: true, selected: false },
			camera: {
				_zoom: 1,
				limitToBounds: true,
				limitToWrapper: true,
				minScale: 0.02,
				maxScale: 1.5,
			},
			grids: {
				/** le id type du content a rendre dans cette grids */
				contentType: 'LAYOUT',
				/** dataGrid pour la position et largeur du grid (null pour root)  */
				datagrid: { x: 1, y: 1, w: 2, h: 1, minW: 1, minH: 1 },
				/** IDs des childs layouts */
				childrens: [],
			},
			settings: {
				/** Largeur maximal du layout */
				width: 1000,
				/** Nombre de cols du layout */
				cols: 24,
				/** Nombre de cols du layout */
				rowHeight: 25,
				/** Margin entre les cols */
				margin: { x: 0, y: 0 },
				/** Compacteur automatique des grids */
				compactType: null,
				/** Previen les collisions pendant les drags de layouts */
				preventCollision: true,
				/** TODO: voir  la bonne aproche */
				backgroundColor: '#24799e',
				gridColor: '#0000002b',
				gridThickness: 1,
			},
		},
	],
	MOUSE: {
		coor: { x: 0, y: 0 },
	},
	EVENTSKEYS: {
		dnd: {
			data: null,
		},
		space: {
			_active: false,
		},
	},
	/** obtien un render, selon les data */
	getGridsRender(uid) {
		const { datagrid, contentType } = this.getDataByUID(uid).grids;
		const { id, store } = this.getStoreModule(contentType);
		return (
			<div
				className='ContentGrid'
				key={uid}
				data-grid={datagrid}
				// onClick={(e) => (this._selectedId = id)}
			>
				{store.getView(uid)}
			</div>
		);
	},
	getStoreModule(contentType) {
		return this.STORESMODULES.find((data) => data.id === contentType);
	},

	/** get view from a data.pageView */
	getPageView(uid) {
		const data = this.getDataByUID(uid);
		return this.PAGESVIEW[data.pageView];
	},
	/**@param {string} uid*/
	findIndexOf(uid) {
		return this.DATA.findIndex((data) => data.uid === uid);
	},
	/**@param {string} uid*/
	getDataByUID(uid) {
		return this.DATA.find((data) => data.uid === uid);
	},
	/** get data currently selected in onglet */
	selectedData() {
		return this.getDataByUID(this._selectedUID);
	},
	visibleData() {
		return this.DATA.filter((data) => data.onglet.visible);
	},
});
