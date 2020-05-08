import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Radio, Tooltip, Button, Switch } from 'antd';
import { Store_ToolsEditor } from '../../stores/Store_ToolsEditor';

function createToolGroup(i) {
	const data = Store_ToolsEditor.data[i];
	return (
		<div key={i} className='EditorTool'>
			<div>{data.title}</div>
			{Object.values(data.children).map((_data, i) => (
				<Tooltip key={i} placement='bottomLeft' title={_data.tooltip}>
					<Button
						className={data.getClass(_data.id)}
						onClick={(e) => data.onClick?.(_data.id)}
					>
						{_data.icon}
					</Button>
				</Tooltip>
			))}
		</div>
	);
}

function create_radio(id) {
	const data = Store_ToolsEditor.getById(id);
	return (
		<Radio.Group
			key={data.id}
			className='EditorTool'
			defaultValue={data.actived}
			onChange={(e) => (data.actived = e.target.value)}
		>
			{data.title}
			{data.children.map((_data, i) => (
				<Tooltip key={i} placement='bottomLeft' title={_data.tooltip}>
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
function create_switch(id) {
	const data = Store_ToolsEditor.getById(id);
	return (
		<div key={data.id} className='EditorTool'>
			{data.title}
			{data.children.map((_data, i) => (
				<Tooltip key={i} placement='bottomLeft' title={_data.tooltip}>
					{_data.icon ? ( //si icon, ces radio button
						<Button
							className={data.isActive(_data.id) && 'Active'}
							onClick={(e) => data.toggleActive(_data.id)}
							value={_data.id}
						>
							{_data.icon}
						</Button>
					) : (
						<Switch defaultChecked>{_data.id}</Switch>
					)}
				</Tooltip>
			))}
		</div>
	);
}

const PageTopTool = () => {
	//todo: Store_DataPage fait un store
	return (
		<div className='ButtonsTool'>
			{Object.values(Store_ToolsEditor.data).map((data, i) =>
				createToolGroup(i)
			)}
		</div>
	);
};

export default view(PageTopTool);
