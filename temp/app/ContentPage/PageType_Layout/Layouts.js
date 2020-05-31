import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';

import Grids, { Store_Grids } from './Grids';

import { Store_Modules } from '../../LeftPaneContents/Activity_Modules';
import { Store_PageOnglets } from '../../NavigatorTop';
import { Store_layoutSettings } from '../../SettingBarRight/Setting_Layout';
import { Store_Global } from '../../../../src/stores/Store_Global';

/** Store Des data layouts
 * Permet la constructions des layouts des pages CLASS
 */
export const Store_layouts = store({
	/**@static Default settings pour layouts seulement */
	SETTING: {
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
		backgroundColor: '#24799e',
		gridColor: '#0000002b',
		gridThickness: 1,
	},
	MODELE: {
		/** root Id permet de retracer le layout root , lorsque nested layout */
		rootId: '',
		/** id unique du layout, peut utiliser dans key car unique */
		id: '',
		/** ID du setting connecter au layout, permet reference local seulement*/
		settingId: '',
		//FIXME: PROBABLEMENT PAS BESOIN,
		/** dataGrid pour la position et largeur du grid  */
		datagrid: { x: 1, y: 1, w: 2, h: 1, minW: 1, minH: 1 },
		/** Si ces un input? remplace le layout */
		inputType: '',
		/** IDs des childs layouts */
		childrens: [],
	},
	/** les template layout sauvegarder qui peuvent etre partager */
	template: {},
	dataSetting: {},
	/** @type {Object.<string, DataLayout>}*/
	data: {},
	/** Id focus lorsque mouseEnter */
	_focused: '',
	/** id de lelement selectionner */
	_selected: '',
	isFocused(id) {
		return this._focused === id;
	},
	isSelected(id) {
		return this._selected === id;
	},
	isExiste(id) {
		return !!this.data[id];
	},
	/** creer un layout */
	create(id, rootId = id) {
		console.log('Store_layouts create: ', id);
		const newData = { ...this.MODELE, id, rootId, childrens: [] };
		this.data[id] = newData;
		this.createSetting(id);
	},
	createSetting(id) {
		if (!this.dataSetting[id]) {
			const newDataSetting = { ...this.SETTING };
			this.dataSetting[id] = newDataSetting;
		}
	},
	connectData(parentId, ChildId) {
		const parent = this.getById(parentId);
		const child = this.getById(ChildId);
		parent.childrens = [...parent.childrens, ChildId];
		child.parentId = parentId;
	},
	getById(id) {
		return this.data[id];
	},
});

const Layouts = ({ uid }) => {
	// const { rootId, childrens } = Store_layouts.getById(id);
	// const { dropData } = Store_Modules;
	const { SETTINGS } = Store_Global.getContentByUID(uid);
	const { dnd } = Store_Global.EVENTSKEYS;
	const {
		width,
		cols,
		rowHeight,
		backgroundColor,
		gridColor,
		gridThickness,
		margin,
	} = SETTINGS;
	const alpha = 1; //TODO: ADD TO SETTING

	return (
		<GridLayout
			style={{
				// backgroundPositionX: margin.x,
				width: width,
				backgroundSize: `${width / cols}px ${rowHeight}px`,
				backgroundColor: backgroundColor,
				backgroundImage: `linear-gradient(to right, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
                        linear-gradient(to left, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
                        linear-gradient(to top, ${gridColor}  ${gridThickness}px, transparent ${alpha}px),
                        linear-gradient(to bottom, ${gridColor}  ${gridThickness}px, transparent ${alpha}px)`,
				minHeight: `${rowHeight * 10}px`,
			}}
			className='ContentLayout'
			key={uid}
			width={width}
			cols={cols}
			margin={[margin.x, margin.y]}
			rowHeight={rowHeight}
			// maxRows={3} permet de limiter le height
			compactType={null}
			preventCollision={true}
			// droppingItem={dropData}
			// isDraggable={level === Store_App.levelEditor}
			isDroppable={!!dnd}
			useCSSTransforms={true}
			transformScale={1}
			onDrop={({ x, y }) => {
				// const _dropData = { ...dnd, x, y };
				// const _id = `${dropData.i}_${Date.now()}`;
				// Store_Grids.create(id, _id, _dropData);
			}}
		>
			{/* {childrens.map((childId) => Store_Grids.getView(childId))} */}
		</GridLayout>
	);
};

export default view(Layouts);
