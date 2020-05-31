import React from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { Button } from 'antd';
import { PlusSquareFilled } from '@ant-design/icons';
import { Store_Global } from '../../stores/Store_Global';
import { Store_Modales } from '../Modales';
import { Store_NavButton } from './NavButton.store';

/** Button for fast create a data type with a Modale Form*/
const NavButton = () => {
	const { DATA, onclick } = Store_NavButton;
	return (
		<div className='NavButton'>
			{DATA.map((data, i) => {
				const { _title, _icon } = data;
				return (
					<Button
						key={i}
						type='primary'
						/** Doi faire appelel a un formulaire*/
						onClick={(e) => onclick(e, data)}
					>
						<PlusSquareFilled />
						{_title}
					</Button>
				);
			})}
		</div>
	);
};

export default view(NavButton);
