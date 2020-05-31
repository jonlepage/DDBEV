import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Radio, Tooltip, Button, Switch } from 'antd';
import { Store_ToolsEditor } from '../../Store_ToolsEditor';

function createToolGroup(i) {
	const data = Store_ToolsEditor.data[i];
	return (
		<div key={i} className='EditorTool'>
			<div style={{ fontSize: 10 }}>
				{data.title}:{data.data.value}
			</div>
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
