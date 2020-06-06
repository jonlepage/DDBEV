import { store } from '@risingstack/react-easy-state';

/** view store represente les key qui point verse un autre store name
 * Agis comme un register, permet deviter des imports chaotique dans d'autre sous modules
 * Preferable utiliser les nom de fichier comme key.
 * Cette aproche permet de pouvoir construire des DATA literal dun autre stores, en important les TYPE ici
 * Cette aproche permet egalement detablir une connection pour changer tous les ref si besoin **
 */
export const VIEW_PanelContent = store({
	PanelModule: 'PanelModule',
});

export const Store_PanelContent = store({});
