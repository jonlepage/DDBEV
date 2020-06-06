import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { VIEW_ContentPage, Store_ContentPage } from './ContentPage.store';
import PageWelcome from './ContentPage/PageWelcome';
import PageData from './ContentPage/PageData';
import PageClass from './ContentPage/PageClass';
import PageDataBase from './ContentPage/PageDataBase';
import { Store_NavPages } from './Navigation/NavPages.store';

function getView(TYPE, UID) {
	switch (TYPE) {
		case VIEW_ContentPage.PageWelcome:
			return <PageWelcome />;
		case VIEW_ContentPage.PageData:
			return <PageData />;
		case VIEW_ContentPage.PageClass:
			return <PageClass UID={UID} />;
		case VIEW_ContentPage.PageDataBase:
			return <PageDataBase UID={UID} />;
		default:
			return 'getView unknow Page';
	}
}

/** Affiche un type de page selon l'onglet choisi */
const ContentPage = () => {
	const { _currentUID } = Store_ContentPage;
	// si pas de _selectedUID, rooting vers Store_PageWelcome.NAME
	if (_currentUID) {
		const { UID, TYPE } = Store_ContentPage.getData(_currentUID);
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
