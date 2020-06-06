import { store } from '@risingstack/react-easy-state';

export const Store_HeaderTool = store({
	/** Affiche les debug tools sur moduels */
	_showDebugTools: false,
	/** un mode rapide pour previsualiser le rendu dans un DataBase */
	_previewRenderDB: false,
});
