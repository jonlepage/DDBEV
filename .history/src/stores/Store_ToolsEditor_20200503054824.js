import { store } from '@risingstack/react-easy-state';
import {
	FormOutlined,
	DeleteOutlined,
	AppstoreTwoTone,
	WindowsFilled,
	CopyOutlined,
	DragOutlined,
} from '@ant-design/icons';
/** Store des tools */
export const Store_ToolsEditor = store({
	/** le tools selectionner */
	selected: '',
	tools: [
		{ id: 'selectRec', icon: <DragOutlined /> },
		{ id: 'drawRec', icon: <FormOutlined /> },
		{ id: 'duplicator', icon: <CopyOutlined /> },
		{ id: 'delete', icon: <DeleteOutlined /> },
	],
});
