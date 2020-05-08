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
		this._currentSelect = this.data.length;
	},
});

const NavigatorTop = () => {
	const { data, _currentSelect } = Store_Modules;
	return (
		<>
			<Button type='primary' onClick={() => Store_Modules.create()}>
				Create new Class
			</Button>
			<div className='NavigatorPage'>
				{data.map((_data, i) => {
					return (
						<div key={i} className={'RadioOngletTop'} value={i}>
							{_data.id}
						</div>
					);
				})}
			</div>
			{/* <Radio.Group
				className={'RadioOngletTopGroup'}
				defaultValue={_currentSelect}
				buttonStyle='solid'
				size={'small'}
			></Radio.Group> */}
		</>
	);
};

export default view(NavigatorTop);
