import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Radio, Button } from 'antd';

/** Store Componment */
export const Store_Modules = store({
	/** drag drop id en cour */
	dropId: null,
	data: [Store_Module_inputString],
	/** quand on drag un module */
	onDragStart(data) {
		this.dropId = data;
	},
	onDragEnd(i) {
		this.dropId = null;
	},
	/** creer un data en clonant un module  */
	dropCreate() {
		const mod = this.data[0];
		mod;
	},
});

const NavigatorTop = () => {
	return (
		<>
			<Button type='primary'>Create new Class</Button>
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
