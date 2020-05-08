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
	NumberOutlined,
} from '@ant-design/icons';

/** switchi selon les modes, un seul mode a la foi */
export const Store_Tool_mode = store({
	groupType: 'radio',
	title: 'Mode:',
	data: { value: 'selectRec' },
	children: {
		selectRec: {
			id: 'selectRec',
			icon: <DragOutlined />,
			tooltip: 'Select,Drag elements based on layer selected',
		},
		drawRec: {
			id: 'drawRec',
			icon: <FormOutlined />,
			tooltip: 'Draw empty grid zone layer',
		},
		duplicator: {
			id: 'duplicator',
			icon: <CopyOutlined />,
			tooltip: 'Duplicate, clone a grid',
		},
		delete: {
			id: 'delete',
			icon: <DeleteOutlined />,
			tooltip: 'Delette a grid zone and childrens',
		},
	},
	getClass(id) {
		return this.isActive(id) && 'Active';
	},
	onClick(id) {
		this.data.value = id;
	},
	isActive(id) {
		return this.data.value === id;
	},
});
/** options activer pendant ledition */
export const Store_Tool_options = store({
	groupType: 'radio',
	title: 'Options:',
	data: { value: ['preventCollision'] },
	children: {
		preventCollision: {
			id: 'preventCollision',
			icon: <ColumnWidthOutlined />,
			tooltip: 'Prevent Collider between grids when drag',
		},
		compactType: {
			id: 'compactType',
			icon: <PicRightOutlined />,
			tooltip: 'Auto Compact grids space orientations',
		},
		renderMode: {
			id: 'renderMode',
			icon: <FolderViewOutlined />,
			tooltip: 'Data renderMode mode',
		},
	},
	getClass(id) {
		return this.isActive(id) && 'Active';
	},
	onClick(id) {
		const index = this.data.value.indexOf(id);
		if (index > -1) {
			this.data.value = this.data.value.filter((v) => v !== id);
		} else {
			this.data.value = [...this.data.value, id];
		}
	},
	isActive(id) {
		return this.data.value.indexOf(id) > -1;
	},
});

/** Stock tous les info pour afficher le content dans la pane-left */
export const Store_Tool_Zoom = store({
	groupType: 'button',
	title: 'view:',
	data: { value: 1, min: 0.4, max: 1.6 },
	children: {
		zoomIn: {
			id: 'zoomIn',
			icon: <ZoomInOutlined />,
			tooltip: 'ZoomIn',
		},
		zoomOut: {
			id: 'zoomOut',
			icon: <ZoomOutOutlined />,
			tooltip: 'ZoomOut',
		},
		fit: {
			id: 'fit',
			icon: <CompressOutlined />,
			tooltip: 'fit Screen',
		},
	},

	onClick(id) {
		const data = this.data;
		if (id === this.children.zoomIn.id) {
			data.value = Math.min(data.max, data.value + 0.1);
		}
		if (id === this.children.zoomOut.id) {
			data.value = Math.max(data.min, data.value - 0.1);
		}
		if (id === this.children.fit.id) {
			data.value = 1;
		}
	},
	getClass(id) {
		const className = 'Disabled';
		const data = this.data;
		switch (id) {
			case this.children.zoomIn.id:
				return data.value >= data.max && className;
			case this.children.zoomOut.id:
				return data.value <= data.min && className;
			case this.children.fit.id:
				return data.value === 1 && className;
		}
	},
});
/** switchi selon les modes, un seul mode a la foi */
export const Store_Tool_layer = store({
	groupType: 'radio',
	title: 'Mode:',
	data: { value: 'auto' },
	children: {
		auto: {
			id: 'selectRec',
			icon: <NumberOutlined />,
			tooltip: 'Make auto level based on mouse',
		},
		'0': {
			id: 'layer_0',
			icon: '0',
			tooltip: 'focus level 0',
		},
	},
	getClass(id) {},
	onClick(id) {
		this.data.value = id;
	},
	isActive(id) {
		return this.data.value === id;
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
	/** ce son la list des tools visible */
	data: [
		Store_Tool_mode,
		Store_Tool_options,
		Store_Tool_Zoom,
		Store_Tool_layer,
	], //, Store_Tool_options, Store_Tool_Zoom
});
