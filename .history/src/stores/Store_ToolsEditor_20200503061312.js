import React from 'react';
import { store } from '@risingstack/react-easy-state';
import {
	FormOutlined,
	DeleteOutlined,
	CopyOutlined,
	DragOutlined,
	ColumnWidthOutlined,
	PicRightOutlined,
} from '@ant-design/icons';
/** Store des tools */
export const Store_ToolsEditor = store({
	/** le tools selectionner */
	selected: '',
	data: {
		/** icon par default pour les actions*/
		editor: {
			id: 'editor',
			type: 'radio',
			children: [
				{ id: 'selectRec', icon: <DragOutlined /> },
				{ id: 'drawRec', icon: <FormOutlined /> },
				{ id: 'duplicator', icon: <CopyOutlined /> },
				{ id: 'delete', icon: <DeleteOutlined /> },
			],
		},
		mode: {
			id: 'mode',
			type: 'trigger',
			children: [
				{ id: 'preventCollision', icon: <ColumnWidthOutlined /> },
				{ id: 'compactType', icon: <PicRightOutlined /> },
				{ id: 'zenMode', icon: <CopyOutlined /> },
				{ id: 'layers', icon: <CopyOutlined />, radio: [] },
			],
		},
		mode: {
			type: 'trigger',
			children: [
				{ id: 'preventCollision', icon: <ColumnWidthOutlined /> },
				{ id: 'compactType', icon: <PicRightOutlined /> },
				{ id: 'zenMode', icon: <CopyOutlined /> },
				{ id: 'layers', icon: <CopyOutlined />, radio: [] },
			],
		},
		action: {
			type: 'button',
			children: [
				{ id: 'zoomIn', icon: <DeleteOutlined /> },
				{ id: 'zoomOut', icon: <DeleteOutlined /> },
			],
		},
	},
});
