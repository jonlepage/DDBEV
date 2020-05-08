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
			children: [
				{ id: 'selectRec', icon: <DragOutlined /> },
				{ id: 'drawRec', icon: <FormOutlined /> },
				{ id: 'duplicator', icon: <CopyOutlined /> },
				{ id: 'delete', icon: <DeleteOutlined /> },
			],
		},
		{
			id: 'modes',
			type: 'trigger',
			children: [
				{ id: 'preventCollision', icon: <ColumnWidthOutlined /> },
				{ id: 'compactType', icon: <PicRightOutlined /> },
				{ id: 'zenMode', icon: <CopyOutlined /> },
				{ id: 'layers', icon: <CopyOutlined />, radio: [] },
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
			children: [],
			/** return le nombre total de layers du sheets */
			get totalLayer() {
				return 3;
			},
		},
	],
	getByIndex(i) {
		return Store_ToolsEditor.data[i];
	},
});
