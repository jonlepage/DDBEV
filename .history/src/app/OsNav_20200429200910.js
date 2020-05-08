import React, { useState } from 'react';
import { view, store } from '@risingstack/react-easy-state';
import Avatar from 'antd/lib/avatar';
import { UserOutlined } from '@ant-design/icons/lib/icons';
import { Box } from '@material-ui/core';
import OsMenue from './OsNav/OsMenue';

function OsNav() {
	return (
		<>
			<Box
				className='OsNav'
				display='flex'
				justifyContent='flex-end'
				bgcolor='grey.900'
				style={{ padding: 2, alignItems: 'center' }}
			>
				<Box px={1}>
					<img height={20} src='../res/icon/appicon.png' alt='Logo' />
				</Box>
				<OsMenue />

				<Box
					display='flex'
					flexGrow={1}
					mx={1}
					justifyContent='center'
					alignItems='center'
				>
					<div>.\Documents\user\projet.dat</div>
				</Box>
				<Box px={1} mx={1} bgcolor='grey.800'>
					<Avatar size='small' icon={<UserOutlined />} /> offline -Git
				</Box>
				<OsWin />
				<Box display='flex' justifyContent='flex-end' alignItems='flex-start'>
					<Box px={2} mx={0}>
						_
					</Box>
					<Box px={2} mx={0}>
						[]
					</Box>
					<Box px={2} mx={0}>
						X
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default view(OsNav);
