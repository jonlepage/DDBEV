import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Radio, Tooltip, Button } from 'antd';
import { Store_ToolsEditor } from '../../stores/Store_ToolsEditor';

function create_radio(id) {
	const data = Store_ToolsEditor.getById(id);
	return (
		<Radio.Group
			key={data.id}
			className='EditorTool'
			defaultValue={data.selectedId}
			onChange={(e) => (data.selectedId = e.target.value)}
		>
			{data.title}:
			{data.children.map((_data, i) => (
				<Tooltip key={i} placement='bottomLeft' title={_data.desc}>
					{_data.icon ? ( //si icon, ces radio button
						<Radio.Button value={_data.id}>{_data.icon}</Radio.Button>
					) : (
						<Radio value={_data.id}>{_data.id}</Radio>
					)}
				</Tooltip>
			))}
		</Radio.Group>
	);
}

function buildTool_buttonSwitch(i) {
	const data = Store_ToolsEditor.getByIndex(i);
	return (
		<div className='EditorTool' key={data.id}>
			{data.children.map((_data, i) => (
				<Tooltip key={i} placement='bottomLeft' title={_data.desc}>
					<Button
						className={data.isActive(_data.id) && 'Active'}
						onClick={(e) => data.toggleActive(_data.id)}
						value={_data.id}
					>
						{_data.icon}
					</Button>
				</Tooltip>
			))}
		</div>
	);
}
function buildTool_button(i) {
	const data = Store_ToolsEditor.getByIndex(i);
	return (
		<div className='EditorTool' key={data.id}>
			{data.children.map((_data, i) => (
				<Tooltip key={i} placement='bottomLeft' title={_data.desc}>
					<Button
						disabled={data.isDisable(_data.id)}
						onClick={() => data.onClick(_data.id)}
						value={_data.id}
					>
						{_data.icon}
					</Button>
				</Tooltip>
			))}
		</div>
	);
}

const PageTopTool = () => {
	//todo: Store_DataPage fait un store
	return (
		<div className='ButtonsTool'>
			{Object.values(Store_ToolsEditor.data).map((data, i) => {
				if (data.type === 'radio') {
					return create_radio(data.id);
				}
			})}
			{/* <Radio.Group
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
			</Radio.Group> */}
		</div>
	);
};

export default view(PageTopTool);
