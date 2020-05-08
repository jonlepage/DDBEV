import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Dropdown, Menu } from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;
const OsMenue = () => {
	/** Gestion du drop list pour les menuL OS */
	const File = store({
		title: 'File',
		list: [
			{ label: '-New project', icon: 'new_proj.png' },
			{ label: '-New Projet', icon: 'new_proj.png' },
			{ label: '-Load Projet', icon: 'new_proj.png' },
			{ label: '-Open Projet', icon: 'new_proj.png' },
			null,
			{ label: '-save', icon: 'new_proj.png' },
			{ label: '-Save as', icon: 'new_proj.png' },
			{ label: '-Export', icon: 'new_proj.png' },
			null,
			{ label: '-Setting', icon: 'new_proj.png' },
			{ label: '-Close', icon: 'new_proj.png' },
			{ label: '-Exit', icon: 'new_proj.png' },
		],
	});
	const underline = { textDecoration: 'underline' };
	const menu_file = (
		<Menu>
			{File.list.map((data, i) => {
				if (data) {
					return (
						<Menu.Item key={i}>
							<a href='http://www.alipay.com/'>1st menu item</a>
						</Menu.Item>
					);
				} else {
					return <Menu.Divider key={i} />;
				}
			})}
			<Menu.Item key='0'>
				<a href='http://www.alipay.com/'>1st menu item</a>
			</Menu.Item>
			<Menu.Item key='1'>
				<a href='http://www.taobao.com/'>2nd menu item</a>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key='3'>3rd menu item</Menu.Item>
		</Menu>
	);
	return (
		<Box className='OsMenue' display='flex'>
			<Dropdown className='OsMenue' overlay={menu_file} trigger={['click']}>
				<Text type='secondary'>
					<b style={underline}>F</b>ile
				</Text>
			</Dropdown>
			<Dropdown className='OsMenue' overlay={menu_file} trigger={['click']}>
				<Text type='secondary'>
					<b style={underline}>E</b>dition
				</Text>
			</Dropdown>
			<Dropdown className='OsMenue' overlay={menu_file} trigger={['click']}>
				<Text type='secondary'>
					<b style={underline}>N</b>avigate
				</Text>
			</Dropdown>
			<Dropdown className='OsMenue' overlay={menu_file} trigger={['click']}>
				<Text type='secondary'>
					<b style={underline}>V</b>iew
				</Text>
			</Dropdown>
			<Dropdown className='OsMenue' overlay={menu_file} trigger={['click']}>
				<Text type='secondary'>
					<b style={underline}>W</b>indow
				</Text>
			</Dropdown>
			<Dropdown className='OsMenue' overlay={menu_file} trigger={['click']}>
				<Text type='secondary'>
					<b style={underline}>H</b>elp
				</Text>
			</Dropdown>
		</Box>
	);
};

export default view(OsMenue);
