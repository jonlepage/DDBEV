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
	data: [],
	create() {
		const newData = { ...this.MODELE };
		this.data.push(newData);
	},
});

const NavigatorTop = () => {
	const Data = Store_Modules.data;
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
				{Data.map((data, i) => {
					return (
						<Radio.Button
							key={}
							className={'RadioOngletTop'}
							value='a'
							disabled
						>
							filename.class
						</Radio.Button>
					);
				})}
			</Radio.Group>
		</>
	);
};

export default view(NavigatorTop);
