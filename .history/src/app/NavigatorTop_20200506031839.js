import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Radio, Button } from 'antd';

/** Store Componment */
export const Store_Modules = store({
	MODELE: {
		id: 'filename.class',
		ext: '.class',
	},
	data: [],
	create() {
		const newData = { ...this.MODELE };
		this.data.push(newData);
	},
});

const NavigatorTop = () => {
	return (
		<>
			<Button type='primary' onClick={() => Store_Modules.create()}>
				Create new Class
			</Button>
			<Radio.Group
				className={'RadioOngletTopGroup'}
				defaultValue='a'
				buttonStyle='solid'
				size={'small'}
			>
				<Radio.Button className={'RadioOngletTop'} value='a' disabled>
					filename.class
				</Radio.Button>
				<Radio.Button className={'RadioOngletTop'} value='b'>
					filename.data
				</Radio.Button>
				<Radio.Button className={'RadioOngletTop'} value='c'>
					filename
				</Radio.Button>
				<Radio.Button className={'RadioOngletTop'} value='d'>
					filename
				</Radio.Button>
				<Radio.Button className={'RadioOngletTop'} value='dd'>
					filename
				</Radio.Button>
				<Radio.Button className={'RadioOngletTop'} value='ddd'>
					filename
				</Radio.Button>
				<Radio.Button className={'RadioOngletTop'} value='dddd'>
					filename
				</Radio.Button>
				<Radio.Button className={'RadioOngletTop'} value='ddddd'>
					filename
				</Radio.Button>
			</Radio.Group>
		</>
	);
};

export default view(NavigatorTop);
