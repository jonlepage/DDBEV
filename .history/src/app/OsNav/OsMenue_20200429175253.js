import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Dropdown } from 'antd';

const OsMenue = () => {
	const [_state, _setState] = useState('value'); // react hook states
	const lstore = store({ _state: 30 }); // store states local
	const underline = { textDecoration: 'underline' };
	return (
		<Box className='OsMenue' display='flex'>
			<Dropdown overlay={menu_file} trigger={['click']}>
				<b style={underline}>F</b>ile
			</Dropdown>

			<Box px={1}>
				<b style={underline}>F</b>ile
			</Box>
			<Box px={1}>
				<b style={underline}>E</b>dition
			</Box>
			<Box px={1}>
				<b style={underline}>N</b>avigate
			</Box>
			<Box px={1}>
				<b style={underline}>V</b>iew
			</Box>
			<Box px={1}>
				<b style={underline}>W</b>indow
			</Box>
			<Box px={1}>
				<b style={underline}>H</b>elp
			</Box>
		</Box>
	);
};

export default view(OsMenue);
