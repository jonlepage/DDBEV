import { store } from '@risingstack/react-easy-state';
import { Store_NavPages } from './app/Navigation/NavPages.store';
import { message, notification } from 'antd';
import { Store_ContentPage } from './app/ContentPage.store';
import React from 'react';
import ReactJson from 'react-json-view';
import { Store_PageClass } from './app/ContentPage/PageClass.store';

export const App_DATA = store({
	/** Le id au plus haut niveau qui permet de tracker tous les info */
	rootUID: '',
	/** TODO: JE SE PAS SI VRAIMENT BESOIN DETRE UNIQUE >? peut etre pour chaque type de data ?
	 * Peut etre que oui. car sa initialise aussi des subDatas avec meme id !
	 */
	uid: '',
	/** todo: mapper ca dune autre maniere */
	_ContentPage: '',
});

export const App_store = store({
	_updateResize: 0,
});

window.addEventListener('resize', () => {
	App_store._updateResize++;
});
//TODO: keys
/** */
document.addEventListener('keyup', (e) => {
	if (e.key === 'F1') {
		//TODO: ETAPE PAR ETAPE, PROCEDER A CE QUE ON SOUHAIT SAUVEGARDER
		const saver = {
			[Store_ContentPage.NAME]: Store_ContentPage.DATA,
			[Store_PageClass.NAME]: Store_PageClass.DATA,
		};
		//TODO: ON PEUT utiliser des callbacl ici pour eviter import React !
		//TODO: ESSAYER  de creer un dataGlobal cooerence, voir si un module peut gerer tous type de dataPage>>>?
		localStorage.setItem('localSave', JSON.stringify(saver));
		message.success('localSave success');
		notification.open({
			message: 'Local Storage Save Datas',
			description: (
				<ReactJson
					theme='railscasts'
					name={'localSave'}
					// sortKeys={true}
					collapsed={true}
					src={saver}
				/>
			),
		});
	}
	if (e.key === 'F2') {
		const save = JSON.parse(localStorage.getItem('localSave'));
		Store_ContentPage.DATA = save[Store_ContentPage.NAME];
		message.success('Loaded success');
	}
});
