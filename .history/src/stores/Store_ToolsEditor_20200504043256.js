import React from 'react';
import { store } from '@risingstack/react-easy-state';
import {
	FormOutlined,
	DeleteOutlined,
	CopyOutlined,
	DragOutlined,
	ColumnWidthOutlined,
	PicRightOutlined,
	ZoomInOutlined,
	ZoomOutOutlined,
	FolderViewOutlined,
	CompressOutlined,
} from '@ant-design/icons';

/** switchi selon les modes, un seul mode a la foi */
export const Store_Tool_mode = store({
	groupType: 'radio',
	data: { value: 'selectRec' },
	groups: {
		selectRec: {
			id: 'selectRec',
			icon: <DragOutlined />,
			tooltip: 'Select,Drag elements based on layer selected',
			onClick() {
				const data = Store_Tool_mode.data;
				data.value = 'selectRec';
			},
			drawRec: {
				id: 'drawRec',
				icon: <FormOutlined />,
				tooltip: 'Draw empty grid zone layer',
				onClick() {
					const data = Store_Tool_mode.data;
					data.value = 'selectRec';
				},
			},
			duplicator: {
				id: 'duplicator',
				icon: <CopyOutlined />,
				tooltip: 'Duplicate, clone a grid',
				onClick() {
					const data = Store_Tool_mode.data;
					data.value = 'selectRec';
				},
			},
			delete: {
				id: 'delete',
				icon: <DeleteOutlined />,
				tooltip: 'Delette a grid zone and childrens',
				onClick() {
					const data = Store_Tool_mode.data;
					data.value = 'selectRec';
				},
			},
		},
	},
});

/** Stock tous les info pour afficher le content dans la pane-left */
export const Store_Tool_Zoom = store({
	groupType: 'button',
	data: { value: 1, min: 0.4, max: 1.6 },
	groups: {
		zoomIn: {
			id: 'zoomIn',
			icon: <ZoomInOutlined />,
			tooltip: 'ZoomIn',
			onClick() {
				const data = Store_Tool_Zoom.data;
				data.value = Math.min(data.max, data.value + 0.1);
			},
		},
		zoomOut: {
			id: 'zoomOut',
			icon: <ZoomOutOutlined />,
			tooltip: 'ZoomOut',
			onClick() {
				const data = Store_Tool_Zoom.data;
				data.value = Math.max(data.min, data.value - 0.1);
			},
		},
		fit: {
			id: 'fit',
			icon: <CompressOutlined />,
			tooltip: 'fit Screen',
			onClick() {
				Store_Tool_Zoom.data.value = 1;
			},
		},
	},
});

/**
 * @typedef {Object} DataGroupTools - Desc
 * @property {string} DataGroupTools.id - Desc
 * @property {string} DataGroupTools.title - Desc
 * @property {string} DataGroupTools.type - radio,radioButton,switch,switchButton,button
 * @property {string|Array.<string>} [DataGroupTools.actived] - Desc
 * @property {Array.<DataTool>} DataGroupTools.children - Desc
 * @property {function} [isActive] - Desc
 * @property {function} [toggleActive] - Desc
 */
/**
 * @typedef {Object} DataTool - Desc
 * @property {string} DataTool.id - Desc
 * @property {JSX.Element} DataTool.icon - Desc
 * @property {string} DataTool.tooltip - Desc
 */

/** Store des tools */
export const Store_ToolsEditor = store({
	/**@static type of groupTool */
	TYPE: {
		RADIO: 'radio',
		SWITCH: 'switch',
		BUTTON: 'button',
	},
	/** Le zoom Actuel*/
	_zoomValue: 1,
	data: {
		/**@type {DataGroupTools} icon par default pour les actions*/
		editors: {
			id: 'editors',
			title: '',
			type: 'radio',
			actived: 'selectRec',
			children: [
				{
					id: 'selectRec',
					icon: <DragOutlined />,
					tooltip: 'Select,Drag elements based on layer selected',
				},
				{
					id: 'drawRec',
					icon: <FormOutlined />,
					tooltip: 'Draw empty grid zone layer',
				},
				{
					id: 'duplicator',
					icon: <CopyOutlined />,
					tooltip: 'Duplicate, clone a grid',
				},
				{
					id: 'delete',
					icon: <DeleteOutlined />,
					tooltip: 'Delette a grid zone and childrens',
				},
			],
		},
		/**@type {DataGroupTools} icon par default pour les actions*/
		mode: {
			id: 'mode',
			title: '',
			type: 'switch',
			actived: ['preventCollision'],
			children: [
				{
					id: 'preventCollision',
					icon: <ColumnWidthOutlined />,
					tooltip: 'Prevent Collider between grids when drag',
				},
				{
					id: 'compactType',
					icon: <PicRightOutlined />,
					tooltip: 'Auto Compact grids space orientations',
				},
				{
					id: 'renderMode',
					icon: <FolderViewOutlined />,
					tooltip: 'Data renderMode mode',
				},
			],
			isActive(id) {
				return this.actived.indexOf(id) > -1;
			},
			toggleActive(id) {
				const actived = [...this.actived];
				if (this.isActive(id)) {
					actived.splice(actived.indexOf(id), 1);
				} else {
					actived.push(id);
				}
				this.actived = actived;
			},
		},
		/**@type {DataGroupTools} icon par default pour les actions*/
		zoom: {
			id: 'editors',
			title: '',
			type: 'button',
			children: [
				{
					id: 'zoomIn',
					icon: <ZoomInOutlined />,
					tooltip: 'ZoomIn',
					onClick(id) {
						Store_ToolsEditor.data.zoom._zoomValue;
					},
				},
				{
					id: 'zoomOut',
					icon: <ZoomOutOutlined />,
					tooltip: 'ZoomOut',
				},
			],
		},
		// modes: {
		// 	id: 'modes',
		// 	type: 'buttonSwitch',
		// 	actived: ['preventCollision'],
		// 	children: [
		// 		{
		// 			id: 'preventCollision',
		// 			icon: <ColumnWidthOutlined />,
		// 			desc: 'Prevent Collider between grids when drag',
		// 		},
		// 		{
		// 			id: 'compactType',
		// 			icon: <PicRightOutlined />,
		// 			desc: 'Auto Compact grids space orientations',
		// 		},
		// 		{
		// 			id: 'renderMode',
		// 			icon: <CopyOutlined />,
		// 			desc: 'Data renderMode mode',
		// 		},
		// 	],
		// 	isActive(id) {
		// 		return this.actived.indexOf(id) > -1;
		// 	},
		// 	toggleActive(id) {
		// 		if (this.isActive(id)) {
		// 			this.actived.splice(this.actived.indexOf(id), 1);
		// 		} else {
		// 			this.actived.push(id);
		// 		}
		// 	},
		// },

		// action: {
		// 	id: 'action',
		// 	type: 'button',
		// 	_zoomMax: 1.5,
		// 	_zoomMin: 0.5,
		// 	children: [
		// 		{ id: 'zoomIn', icon: <ZoomInOutlined /> },
		// 		{ id: 'zoomOut', icon: <ZoomOutOutlined /> },
		// 	],
		// 	onClick(id) {
		// 		const zoom = Store_ToolsEditor._zoomValue;

		// 		switch (id) {
		// 			case 'zoomIn':
		// 				Store_ToolsEditor._zoomValue = Math.min(this._zoomMax, zoom + 0.1);
		// 				break;
		// 			case 'zoomOut':
		// 				Store_ToolsEditor._zoomValue = Math.max(this._zoomMin, zoom - 0.1);
		// 				break;
		// 		}
		// 		console.log('zoom: ', zoom, id);
		// 	},
		// 	isDisable(id) {
		// 		switch (id) {
		// 			case 'zoomIn':
		// 				return Store_ToolsEditor._zoomValue === this._zoomMax;
		// 				break;
		// 			case 'zoomOut':
		// 				return Store_ToolsEditor._zoomValue === this._zoomMin;
		// 				break;
		// 		}
		// 	},
		// },
		// /** le tool layers est baser sur le nombre de couche detecter */
		// layers: {
		// 	id: 'layers',
		// 	type: 'radio',
		// 	selectedId: 'layer_0',
		// 	children: [{ id: 'layer_0', icon: null }],
		// 	/** calcul le nombre de nested layers dans la composition */
		// 	getMaxNestedLayer() {},
		// },
	},
	/**@returns {DataGroupTools} */
	getById(id) {
		return Store_ToolsEditor.data[id];
	},
});
