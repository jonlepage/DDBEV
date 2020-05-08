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
} from '@ant-design/icons';

const PageTopTool = () => {
	//todo: Store_DataPage fait un store
	return (
		<div className={'ButtonsTool'}>
			<Radio.Group defaultValue='a' style={{ marginTop: 16 }}>
				<Radio.Button value='a'>
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
