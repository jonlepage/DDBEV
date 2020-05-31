import React from 'react';
import { view } from '@risingstack/react-easy-state';
import NavButton from './Navigation/NavButton';
import NavPages from './Navigation/NavPages';
import { Store_Navigation } from './Navigation.store';

const Navigation = () => {
	return (
		<div className='NavigatorTop'>
			<NavButton />
			<NavPages />
		</div>
	);
};

export default view(Navigation);
