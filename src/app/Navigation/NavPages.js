import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { Radio, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { Store_NavPages } from './NavPages.store';
import { Store_ContentPage } from '../ContentPage.store';
import { DATA_PageWelcome } from '../ContentPage/PageWelcome.store';
import { DATA_PageData } from '../ContentPage/PageData.store';

const NavPages = () => {
	// TODO: IMPROTANT, REPENSER ENCORE. open Soi u ndata Id, ou une page type
	// doi pouvroir ouvrir une page de rendu
	const { DATA, _selectedUID } = Store_NavPages;
	if (!_selectedUID) {
		// if nothing selected, force select Welecome page
		Store_NavPages.Select(DATA_PageWelcome.NAME);
		Store_NavPages.Select(DATA_PageData.NAME);
	}
	return (
		<Radio.Group
			className='NavigatorTop_Group'
			buttonStyle='solid'
			size='small'
			value={_selectedUID}
			onChange={(e) => Store_NavPages.onChange(e, e.target.value)}
		>
			<Space size={4}>
				{DATA.map((data, i) => {
					const { UID, _visible, _icon, TYPE } = data;
					//TODO: OK PROBLEME: si page welcom, ou autre data ? comment tracer
					console.log('NavPages UID: ', UID);
					const { _id, _descriptions } = Store_ContentPage.getData(UID);

					if (_visible) {
						return (
							<div
								key={i}
								className='NavigatorTop_Page'
								title={UID + `\n${_descriptions}`}
							>
								<Space size={1}>
									<Radio.Button value={UID}>{_id}</Radio.Button>
									<CloseOutlined />
								</Space>
							</div>
						);
					}
				})}
			</Space>
		</Radio.Group>
	);
};

export default view(NavPages);
