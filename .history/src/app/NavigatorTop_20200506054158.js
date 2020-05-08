import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Radio, Button } from 'antd';

/** Store Componment */
export const Store_Modules = store({
	MODELE: {
		id: 'filename',
		ext: '.class',
		contentId: '',
	},
	_currentSelect: 0,
	data: [],
	create() {
		const newData = { ...this.MODELE };
		this.data.push(newData);
		this._currentSelect = this.data.length - 1;
	},
});

const NavigatorTop = () => {
	const { data, _currentSelect } = Store_Modules;
	return (
		<div className='NavigatorTop'>
			<Button type='primary' onClick={() => Store_Modules.create()}>
				Create new Class
			</Button>
			<Radio.Group
				className={'NavigatorTop_Group'}
				defaultValue={Store_Modules._currentSelect}
				buttonStyle='solid'
				size={'small'}
				onChange={(e) => console.log('e.target.value: ', [e.target.value])}
			>
				{data.map((_data, i) => {
					return (
						<Radio.Button key={i} className={'NavigatorTop_Page'} value={i}>
							{_data.id}
						</Radio.Button>
					);
				})}
			</Radio.Group>
		</div>
	);
};

export default view(NavigatorTop);
