import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Radio } from 'antd';
import { Store_app } from '../../stores/Store_App';
import {
	FormOutlined,
	DeleteOutlined,
	AppstoreTwoTone,
	WindowsFilled,
	CopyOutlined,
	DragOutlined,
} from '@ant-design/icons';
import { Store_ToolsEditor } from '../../stores/Store_ToolsEditor';
function buildToolType(i) {
	const data = Store_ToolsEditor.getByIndex(i);
	if (data.type === 'radio') {
		return buildTool_radio(i);
	}
}
function buildTool_radio(i) {
	const data = Store_ToolsEditor.getByIndex(i);
	return (
		<Radio.Group
			key={data.id}
			className='EditorTool'
			defaultValue={0}
			style={{ marginTop: 16 }}
		>
			{data.children.map((_data, i) => (
				<Radio.Button key={i} value={_data.id}>
					<FormOutlined />
				</Radio.Button>
			))}
		</Radio.Group>
	);
}
const PageTopTool = () => {
	//todo: Store_DataPage fait un store
	return (
		<div className='ButtonsTool'>
			{/* {Store_ToolsEditor.data.map((i) => buildToolType(i))} */}
			<Radio.Group
				className='EditorTool'
				defaultValue='drag'
				style={{ marginTop: 16 }}
			>
				<Radio.Button value='drag'>
					<DragOutlined />
				</Radio.Button>
				<Radio.Button value='a'>
					<FormOutlined />
				</Radio.Button>
				<Radio.Button value='b'>
					<WindowsFilled />
				</Radio.Button>
				<Radio.Button value='c'>
					<AppstoreTwoTone />
				</Radio.Button>
				<Radio.Button value='d'>
					<CopyOutlined />
				</Radio.Button>
				<Radio.Button value='d'>
					<DeleteOutlined />
				</Radio.Button>
			</Radio.Group>
			<Radio.Group
				size='small'
				onChange={(e) => (Store_app.levelEditor = e.target.value)}
				value={Store_app.levelEditor}
			>
				Nested layers:
				<Radio value={0}>0</Radio>
				<Radio value={1}>1</Radio>
				<Radio value={3}>2</Radio>
				<Radio value={4}>3</Radio>
			</Radio.Group>
		</div>
	);
};

export default view(PageTopTool);
