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
			{ label: '-New project', iconPath: '../../res/img/menu/NEW.png' },
			{ label: '-Load Projet', iconPath: '../../res/img/menu/LOAD.png' },
			null,
			{ label: '-save', iconPath: '../../res/img/menu/SAVE.png' },
			{ label: '-Save as', iconPath: '../../res/img/menu/SAVE.png' },
			{ label: '-Export', iconPath: 'new_proj.png' },
			null,
			{ label: '-Setting', iconPath: 'new_proj.png' },
			{ label: '-Close', iconPath: 'new_proj.png' },
			{ label: '-Exit', iconPath: 'new_proj.png' },
		],
	});
	const underline = { textDecoration: 'underline' };
	const menu_file = (
		<Menu>
			{File.list.map((data, i) => {
				if (data) {
					return (
						<Menu.Item key={i}>
							<Text type='secondary'>
								<img className={'OsMenue'} src={data.iconPath} alt='Logo' />
								{data.label}
							</Text>
						</Menu.Item>
					);
				} else {
					return <Menu.Divider key={i} />;
				}
			})}
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
