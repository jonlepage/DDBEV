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
		this.setSelect(this.data.length - 1);
	},
	setSelect(index) {
		this._currentSelect = index;
	},
});

const NavigatorTop = () => {
	const { data, _currentSelect } = Store_Modules;
	const [_state, _setState] = useState(_currentSelect); // react hook states

	return (
		<div className='NavigatorTop'>
			<Button type='primary' onClick={() => Store_Modules.create()}>
				Create new Class
			</Button>
			<Radio.Group
				className={'NavigatorTop_Group'}
				defaultValue={Store_Modules._currentSelect + 3}
				buttonStyle='solid'
				size={'small'}
				// onChange={(e) => (_currentSelect = e.target.value + '')}
			>
				{data.map((_data, i) => {
					return (
						<Radio.Button key={i} className={'NavigatorTop_Page'} value={i}>
							{Store_Modules._currentSelect}
							{_data.id}
						</Radio.Button>
					);
				})}
			</Radio.Group>
		</div>
	);
};

export default view(NavigatorTop);
