import { store } from '@risingstack/react-easy-state';
import { Store_NavPages } from './app/Navigation/NavPages.store';

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
