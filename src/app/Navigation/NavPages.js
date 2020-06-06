import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { CloseOutlined } from '@ant-design/icons';
import { Store_ContentPage } from '../ContentPage.store';
const NavPages = () => {
	// TODO: IMPROTANT, REPENSER ENCORE. open Soi u ndata Id, ou une page type
	// doi pouvroir ouvrir une page de rendu
	const { DATA, _currentUID } = Store_ContentPage;
	if (_currentUID) {
		return (
			<div className='NavPages'>
				{DATA.map((data, i) => {
					const { UID, _id, _descriptions, _visibleNav } = data;
					if (_visibleNav) {
						const selected = UID === _currentUID;
						return (
							<div
								draggable={true}
								key={UID}
								className='NavigatorTop_Page'
								title={UID + `\n${_descriptions}`}
								style={
									selected
										? { borderBottom: '2px solid #ffc7b1', color: '#fff' }
										: {}
								}
								onClick={(e) => Store_ContentPage.select(UID)}
							>
								<div className='NavigatorTop_CloseX'>
									<CloseOutlined />
								</div>
								{_id}
							</div>
						);
					}
				})}
			</div>
		);
	} else {
		Store_ContentPage.selectNextFrom(_currentUID);
	}
};

export default view(NavPages);
