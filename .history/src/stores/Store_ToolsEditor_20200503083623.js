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
	/** le tools selectionner */
	selected: '',
	data: [
		/** icon par default pour les actions*/
		{
			id: 'editors',
			type: 'radio',
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
				{ id: 'preventCollision', icon: <ColumnWidthOutlined /> },
				{ id: 'compactType', icon: <PicRightOutlined /> },
				{ id: 'zenMode', icon: <CopyOutlined /> },
				{ id: 'layers', icon: <CopyOutlined /> },
			],
		},

		{
			id: 'action',
			type: 'button',
			children: [
				{ id: 'zoomIn', icon: <ZoomInOutlined /> },
				{ id: 'zoomOut', icon: <ZoomOutOutlined /> },
			],
		},
		/** le tool layers est baser sur le nombre de couche detecter */
		{
			id: 'layers',
			type: 'radio',
			children: [{ id: '0', icon: null }],
		},
	],
	getByIndex(i) {
		return Store_ToolsEditor.data[i];
	},
	isActived() {},
});
