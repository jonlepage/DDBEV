import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Radio } from 'antd';

const NavigatorTop = () => {
	return (
		<>
			<Radio.Group
				className={'RadioOngletTopGroup'}
				defaultValue='a'
				buttonStyle='solid'
				size={'small'}
			>
				<Radio.Button className={'RadioOngletTop'} value='a' disabled>
					filename
				</Radio.Button>
				<Radio.Button className={'RadioOngletTop'} value='b'>
					filename
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
