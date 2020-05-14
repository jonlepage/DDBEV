import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';

import Grids, { Store_Grids } from './Grids';
import { Store_app } from '../../../stores/Store_App';
import { Store_Modules } from '../../LeftPaneContents/Activity_Modules';
import { Store_PageOnglets } from '../../NavigatorTop';
import { Store_layoutSettings } from '../../SettingBarRight/Setting_Layout';

/** Store Des data layouts
 * Permet la constructions des layouts des pages CLASS
 */
export const Store_layouts = store({
	MODELE: {
		/** root Id permet de retracer le layout root , lorsque nested layout */
		rootId: '',
		/** id unique du layout, peut utiliser dans key car unique */
		id: '',
		/** ID du setting connecter au layout*/
		settingId: '',
		/** dataGrid pour la position et largeur du grid  */
		datagrid: { x: 1, y: 1, w: 2, h: 1, minW: 1, minH: 1 },
		/** Si ces un input? remplace le layout */
		inputType: '',
		/** IDs des childs layouts */
		childrens: [],
	},
	/** les template layout sauvegarder qui peuvent etre partager */
	template: {},
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
		const newData = { ...this.MODELE, id, rootId, childrens: [] };
		this.data[id] = newData;
		Store_layoutSettings.create(id);
	},
	connectData(parentId, ChildId) {
		const parent = this.getById(parentId);
		const child = this.getById(ChildId);
		parent.childrens = [...parent.childrens, ChildId];
		child.parentId = parentId;
	},
	getById(id) {
		return this.data[id] || { ...this.MODELE, id };
	},
});

const Layouts = ({ id }) => {
	const { rootId, childrens } = Store_layouts.getById(id);
	const { dropData } = Store_Modules;

	const {
		width,
		cols,
		rowHeight,
		backgroundColor,
		gridColor,
		gridThickness,
		margin,
	} = Store_layoutSettings.getById(rootId);
	const alpha = 1;

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
			key={id}
			width={width}
			cols={cols}
			margin={[margin.x, margin.y]}
			rowHeight={rowHeight}
			// maxRows={3} permet de limiter le height
			compactType={null}
			preventCollision={true}
			droppingItem={dropData}
			// isDraggable={level === Store_app.levelEditor}
			isDroppable={!!dropData}
			useCSSTransforms={true}
			transformScale={1}
			onDrop={({ x, y }) => {
				const _dropData = { ...dropData, x, y };
				const _id = `${dropData}_${Date.now()}`;
				Store_Grids.create(id, _id, _dropData);
			}}
		>
			{childrens.map((childId) => Store_Grids.getView(childId))}
		</GridLayout>
	);
};

export default view(Layouts);
