import React from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Radio } from 'antd';

const PageTopTool = () => {
	//todo: Store_DataPage fait un store
	return (
		<div className={'ButtonsTool'}>
			<Radio.Group
				size='small'
				onChange={(e) => (Store_DataBaseStorage.radioLevel = e.target.value)}
				value={Store_DataBaseStorage.radioLevel}
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
