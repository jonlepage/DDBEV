import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Radio } from 'antd';
import { Store_app } from '../../stores/Store_App';

const PageTopTool = () => {
	//todo: Store_DataPage fait un store
	return (
		<div className={'ButtonsTool'}>
			<Radio.Group defaultValue='a' style={{ marginTop: 16 }}>
				<Radio.Button value='a'>Hangzhou</Radio.Button>
				<Radio.Button value='b'>Shanghai</Radio.Button>
				<Radio.Button value='c'>Beijing</Radio.Button>
				<Radio.Button value='d'>Chengdu</Radio.Button>
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
