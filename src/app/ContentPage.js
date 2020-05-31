import React, { useState } from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { App_store } from '../App.store';
import { Store_NavPages } from './Navigation/NavPages.store';
import { DATA_PageWelcome } from './ContentPage/PageWelcome.store';
import { Store_ContentPage } from './ContentPage.store';
import PageWelcome from './ContentPage/PageWelcome';
import { DATA_PageClass } from './ContentPage/PageClass.store';
import PageClass from './ContentPage/PageClass';
import { DATA_PageData } from './ContentPage/PageData.store';
import PageData from './ContentPage/PageData';

/** TODO: FAIRE un storeEvents plus general pour gerer ca, car la , ont risque de update Content root, mais besoin juste pour camera */
// export const EVENTS_ContentPage = store({
// 	_spaceBar: false,
// 	onKeyDown(e) {
// 		if (e.keyCode === 32) {
// 			//const { space } = Store_Global.EVENTSKEYS;
// 			EVENTS_ContentPage._spaceBar = true;
// 			e.preventDefault();
// 		}
// 	},
// 	onKeyUp(e) {
// 		//const { space } = Store_Global.EVENTSKEYS;
// 		EVENTS_ContentPage._spaceBar = false;
// 	},
// 	// onMouseMove(e) {
// 	// 	const { coor } = Store_Global.MOUSE;
// 	// 	coor.x = e.clientX;
// 	// 	coor.y = e.clientY;
// 	// },
// });

/** todo: peut etre fair un gesiter de page, sa eviterai des import ici */
function getView(TYPE, UID) {
	switch (TYPE) {
		case DATA_PageClass.NAME:
			return <PageClass UID={UID} />;
		case DATA_PageWelcome.NAME:
			return <PageWelcome />;
		case DATA_PageData.NAME:
			return <PageData />;
		default:
			return 'getView unknow Page';
	}
}

/** Affiche un type de page selon l'onglet choisi */
const ContentPage = () => {
	const { _selectedUID } = Store_NavPages;
	// si pas de _selectedUID, rooting vers Store_PageWelcome.NAME
	if (_selectedUID) {
		const { UID, TYPE } = Store_ContentPage.getData(_selectedUID);
		console.log('UID, TYPE: ', UID, TYPE);

		return (
			<div
				className='ContentRoot'
				// onKeyDown={EVENTS_ContentPage.onKeyDown}
				// onKeyUp={EVENTS_ContentPage.onKeyUp}
				// onMouseMove={onMouseMove}
				// this shit make events fired !! dont ask me why
				tabIndex={-1}
			>
				{getView(TYPE, UID)}
			</div>
		);
	}
};

export default view(ContentPage);
