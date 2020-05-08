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
} from '@ant-design/icons';
/** Store des tools */
export const Store_ToolsEditor = store({
	/** Le zoom Actuel*/
	_zoomValue: 1,
	data: [
		/** icon par default pour les actions*/
		{
			id: 'editors',
			type: 'buttonRadio',
			selectedId: 'selectRec',
			children: [
				{
					id: 'selectRec',
					icon: <DragOutlined />,
					desc: 'Select,Drag elements based on layer selected',
				},
				{
					id: 'drawRec',
					icon: <FormOutlined />,
					desc: 'Draw empty grid zone layer',
				},
				{
					id: 'duplicator',
					icon: <CopyOutlined />,
					desc: 'Duplicate, clone a grid',
				},
				{
					id: 'delete',
					icon: <DeleteOutlined />,
					desc: 'Delette a grid zone and childrens',
				},
			],
		},
		{
			id: 'modes',
			type: 'buttonSwitch',
			actived: ['preventCollision'],
			children: [
				{
					id: 'preventCollision',
					icon: <ColumnWidthOutlined />,
					desc: 'Prevent Collider between grids when drag',
				},
				{
					id: 'compactType',
					icon: <PicRightOutlined />,
					desc: 'Auto Compact grids space orientations',
				},
				{
					id: 'renderMode',
					icon: <CopyOutlined />,
					desc: 'Data renderMode mode',
				},
			],
			isActive(id) {
				return this.actived.indexOf(id) > -1;
			},
			toggleActive(id) {
				if (this.isActive(id)) {
					this.actived.splice(this.actived.indexOf(id), 1);
				} else {
					this.actived.push(id);
				}
			},
		},

		{
			id: 'action',
			type: 'button',
			_zoomMax: 1.5,
			_zoomMin: 0.5,
			children: [
				{ id: 'zoomIn', icon: <ZoomInOutlined /> },
				{ id: 'zoomOut', icon: <ZoomOutOutlined /> },
			],
			onClick(id) {
				const zoom = Store_ToolsEditor._zoomValue;

				switch (id) {
					case 'zoomIn':
						Store_ToolsEditor._zoomValue = Math.max(this._zoomMax, zoom - 0.1);
						break;
					case 'zoomOut':
						Store_ToolsEditor._zoomValue = Math.min(this._zoomMin, zoom + 0.1);
						break;
				}
				console.log('zoom: ', zoom);
			},
		},
		/** le tool layers est baser sur le nombre de couche detecter */
		{
			id: 'layers',
			type: 'radio',
			selectedId: 'layer_0',
			children: [{ id: 'layer_0', icon: null }],
			/** calcul le nombre de nested layers dans la composition */
			getMaxNestedLayer() {},
		},
	],
	getByIndex(i) {
		return Store_ToolsEditor.data[i];
	},
});
