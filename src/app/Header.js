import React from 'react';
import { Box } from '@material-ui/core';
import { view } from '@risingstack/react-easy-state';
import Logo from './Header/Logo';
import Title from './Header/Title';
import Satus from './Header/Satus';
import MenueOS from './Header/MenueOS';
import ButtonOS from './Header/ButtonOS';

const Header = () => {
	return (
		<Box
			className='OsNav'
			display='flex'
			justifyContent='flex-end'
			bgcolor='grey.900'
			style={{ padding: 2, alignItems: 'center' }}
		>
			<Logo />
			<MenueOS />
			<Title />
			<Satus />
			<ButtonOS />
		</Box>
	);
};

export default view(Header);
